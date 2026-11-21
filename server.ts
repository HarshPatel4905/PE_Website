import express from 'express';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const isProduction = process.env.NODE_ENV === 'production';

interface EnquiryRecord {
  referenceId: string;
  receivedAt: string;
  type: 'specification' | 'general';
  name: string;
  company: string;
  email: string;
  country: string;
  productCategory?: string;
  hasAttachment: boolean;
  attachmentName?: string;
}

const enquiryStore: EnquiryRecord[] = [];
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv',
  'text/plain',
  'image/png',
  'image/jpeg',
]);

const ALLOWED_EXTENSIONS = new Set([
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.csv',
  '.txt',
  '.png',
  '.jpg',
  '.jpeg',
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
    files: 1,
  },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    if (ALLOWED_MIME_TYPES.has(file.mimetype) && ALLOWED_EXTENSIONS.has(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file format. Accepted: PDF, DOCX, XLSX, CSV, TXT, PNG, JPG.'));
    }
  },
});

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 12;
  const entry = rateLimitMap.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count += 1;
  return true;
}

function cleanString(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const SITEMAP_PATHS = [
  '/',
  '/about',
  '/products',
  '/products/pe-films-jumbo-rolls',
  '/products/industrial-pe-bags',
  '/products/insulation-packaging',
  '/products/pallet-covers-stretch-hood',
  '/products/shrink-films',
  '/products/industrial-liners',
  '/products/construction-films',
  '/products/agricultural-films',
  '/products/pe-tubing-layflat-films',
  '/products/custom-packaging',
  '/manufacturing-capabilities',
  '/quality-assurance',
  '/industries',
  '/global-supply-exports',
  '/sustainability',
  '/news',
  '/news/polymer-market',
  '/news/packaging-industry',
  '/news/manufacturing-technology',
  '/news/sustainability-innovation',
  '/blog',
  '/knowledge-centre',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
];

async function createServer() {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'flexora-web' });
  });

  app.get('/robots.txt', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    res.type('text/plain').send(
      [
        'User-agent: *',
        'Allow: /',
        'Disallow: /api/',
        `Sitemap: ${baseUrl.replace(/\/$/, '')}/sitemap.xml`,
      ].join('\n')
    );
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = (process.env.APP_URL || `${req.protocol}://${req.get('host')}`).replace(/\/$/, '');
    const today = new Date().toISOString().split('T')[0];
    const urls = SITEMAP_PATHS.map(
      (route) =>
        `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${
          route === '/' || route.startsWith('/news') ? 'weekly' : 'monthly'
        }</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
    ).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
    res.type('application/xml').send(xml);
  });

  app.post('/api/enquiries', (req, res) => {
    const clientIp = req.ip || 'unknown';
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Too many requests submitted. Please wait one minute before submitting another enquiry.',
      });
      return;
    }

    upload.single('attachment')(req, res, (uploadErr) => {
      if (uploadErr) {
        res.status(400).json({
          ok: false,
          error: uploadErr instanceof Error ? uploadErr.message : 'Invalid attachment upload.',
        });
        return;
      }

      const body = req.body as Record<string, unknown>;
      // Honeypot spam protection
      if (cleanString(body.website_url, 100) !== '') {
        res.status(400).json({ ok: false, error: 'Submission could not be verified.' });
        return;
      }

      const name = cleanString(body.name, 120);
      const company = cleanString(body.company, 160);
      const email = cleanString(body.email, 160);
      const country = cleanString(body.country, 100);
      const productCategory = cleanString(body.productCategory, 140);
      const intendedApplication = cleanString(body.intendedApplication, 200);
      const requiredMaterial = cleanString(body.requiredMaterial, 120);
      const thickness = cleanString(body.thickness, 80);
      const dimensions = cleanString(body.dimensions, 160);
      const quantity = cleanString(body.quantity, 120);
      const destination = cleanString(body.destination, 140);
      const targetDeliveryDate = cleanString(body.targetDeliveryDate, 80);
      const technicalRequirements = cleanString(body.technicalRequirements, 2500);

      if (!name || !company || !email || !country || !productCategory) {
        res.status(400).json({
          ok: false,
          error: 'Please complete all required fields: name, company, business email, country, and product category.',
        });
        return;
      }

      if (!isValidEmail(email)) {
        res.status(400).json({
          ok: false,
          error: 'Please provide a valid business email address.',
        });
        return;
      }

      const referenceId = `FX-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
      const receivedAt = new Date().toISOString();
      const safeFileName = req.file ? path.basename(req.file.originalname).slice(0, 120) : undefined;

      enquiryStore.push({
        referenceId,
        receivedAt,
        type: 'specification',
        name,
        company,
        email,
        country,
        productCategory,
        hasAttachment: Boolean(req.file),
        attachmentName: safeFileName,
      });

      if (enquiryStore.length > 250) {
        enquiryStore.shift();
      }

      res.status(201).json({
        ok: true,
        referenceId,
        receivedAt,
        summary: {
          company,
          productCategory,
          intendedApplication: intendedApplication || 'General industrial requirement',
          requiredMaterial: requiredMaterial || 'To be recommended',
          thickness: thickness || 'To be confirmed',
          dimensions: dimensions || 'To be confirmed',
          quantity: quantity || 'To be confirmed',
          destination: destination || country,
          targetDeliveryDate: targetDeliveryDate || 'Flexible',
          technicalRequirementsLength: technicalRequirements.length,
          attachmentName: safeFileName || null,
        },
      });
    });
  });

  app.post('/api/contact', (req, res) => {
    const clientIp = req.ip || 'unknown';
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Too many requests submitted. Please wait one minute before retrying.',
      });
      return;
    }

    const body = req.body as Record<string, unknown>;
    if (cleanString(body.website_url, 100) !== '') {
      res.status(400).json({ ok: false, error: 'Submission could not be verified.' });
      return;
    }

    const name = cleanString(body.name, 120);
    const company = cleanString(body.company, 160);
    const email = cleanString(body.email, 160);
    const country = cleanString(body.country, 100);
    const subject = cleanString(body.subject, 200);
    const message = cleanString(body.message, 2500);

    if (!name || !company || !email || !country || !message) {
      res.status(400).json({
        ok: false,
        error: 'Please complete your name, company, business email, country, and enquiry message.',
      });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({
        ok: false,
        error: 'Please provide a valid business email address.',
      });
      return;
    }

    const referenceId = `FX-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const receivedAt = new Date().toISOString();

    enquiryStore.push({
      referenceId,
      receivedAt,
      type: 'general',
      name,
      company,
      email,
      country,
      productCategory: subject || 'General Discussion',
      hasAttachment: false,
    });

    if (enquiryStore.length > 250) {
      enquiryStore.shift();
    }

    res.status(201).json({
      ok: true,
      referenceId,
      receivedAt,
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FLEXORA server running at http://0.0.0.0:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
