export type ProductCategorySlug =
  | 'pe-films-jumbo-rolls'
  | 'industrial-pe-bags'
  | 'insulation-packaging'
  | 'pallet-covers-stretch-hood'
  | 'shrink-films'
  | 'industrial-liners'
  | 'construction-films'
  | 'agricultural-films'
  | 'pe-tubing-layflat-films'
  | 'custom-packaging';

export interface ProductSpecRow {
  parameter: string;
  illustrativeRange: string;
  notes: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductItem {
  slug: string;
  categorySlug: ProductCategorySlug;
  name: string;
  shortLabel: string;
  resinOptions: string[];
  summary: string;
  imageKey:
    | 'pe_films'
    | 'industrial_bags'
    | 'insulation_pack'
    | 'insulation_batt_single'
    | 'insulation_batt_pallet'
    | 'logistics_export'
    | 'polymer_pellets'
    | 'hero_rolls';
  galleryImageKeys?: (
    | 'pe_films'
    | 'industrial_bags'
    | 'insulation_pack'
    | 'insulation_batt_single'
    | 'insulation_batt_pallet'
    | 'logistics_export'
    | 'polymer_pellets'
    | 'hero_rolls'
  )[];
  overview: string;
  whatItIs: string;
  howManufactured: string;
  availableMaterials: string[];
  constructionOptions: string[];
  specifications: ProductSpecRow[];
  typicalApplications: string[];
  industryUseCases: { industry: string; useCase: string }[];
  performanceCharacteristics: string[];
  availableCustomisation: string[];
  qualityInspectionParameters: string[];
  packagingAndLogistics: string[];
  howBuyersSelect: string[];
  commonBuyerMistakes: string[];
  faqs: ProductFAQ[];
  relatedProductSlugs: string[];
  relatedArticleSlugs: string[];
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  shortTitle: string;
  tagline: string;
  imageKey:
    | 'pe_films'
    | 'industrial_bags'
    | 'insulation_pack'
    | 'insulation_batt_single'
    | 'insulation_batt_pallet'
    | 'logistics_export'
    | 'polymer_pellets'
    | 'hero_rolls';
  galleryImageKeys?: (
    | 'pe_films'
    | 'industrial_bags'
    | 'insulation_pack'
    | 'insulation_batt_single'
    | 'insulation_batt_pallet'
    | 'logistics_export'
    | 'polymer_pellets'
    | 'hero_rolls'
  )[];
  overview: string;
  technicalScope: string[];
  keyEvaluationParameters: string[];
  complianceNote?: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface EditorialArticle {
  slug: string;
  number: number;
  title: string;
  category:
    | 'Polymer Materials'
    | 'Film Manufacturing'
    | 'Technical Properties'
    | 'Quality Control'
    | 'Industrial Packaging'
    | 'Market & Logistics';
  publishedDate: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  relatedProductCategories: ProductCategorySlug[];
}

export type NewsSectionRoute =
  | 'polymer-market'
  | 'packaging-industry'
  | 'manufacturing-technology'
  | 'sustainability-innovation';

export type NewsCategory =
  | 'Polymer Market News'
  | 'Polyethylene Price Trends'
  | 'Global Petrochemical Industry'
  | 'Industrial Packaging Developments'
  | 'Flexible Packaging Innovation'
  | 'Manufacturing Technology'
  | 'Sustainability and Recycling'
  | 'Supply Chain and Logistics'
  | 'Australia Packaging Market'
  | 'International Trade and Regulation';

export interface NewsItem {
  slug: string;
  title: string;
  category: NewsCategory;
  sectionRoute: NewsSectionRoute;
  originalPublishedDate: string;
  year: '2024' | '2025' | '2026';
  publisher: string;
  sourceUrl: string;
  isHistoricalArchive: boolean;
  sourceReportingSummary: string;
  flexoraCommentary: string;
  buyerRelevancePoints: string[];
}

export interface IndustrySector {
  slug: string;
  name: string;
  summary: string;
  packagingChallenges: string[];
  recommendedCategories: ProductCategorySlug[];
  keyMaterialConsiderations: string[];
}
