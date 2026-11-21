import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface CookieConsentProps {
  forceOpen: boolean;
  onCloseForce: () => void;
}

export function CookieConsent({ forceOpen, onCloseForce }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('flexora_cookie_consent');
      if (!saved) {
        const timer = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(timer);
      }
      const parsed = JSON.parse(saved) as { analytics?: boolean };
      setAnalyticsEnabled(Boolean(parsed.analytics));
    } catch {
      setVisible(true);
    }
  }, []);

  const isShown = forceOpen || visible;
  if (!isShown) return null;

  const savePreference = (analytics: boolean) => {
    try {
      localStorage.setItem(
        'flexora_cookie_consent',
        JSON.stringify({ essential: true, analytics, updatedAt: new Date().toISOString() })
      );
    } catch {
      // Ignore storage failures in restricted contexts
    }
    setAnalyticsEnabled(analytics);
    setVisible(false);
    onCloseForce();
  };

  return (
    <aside
      aria-label="Cookie Preferences"
      className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md bg-white border border-[#DCE6EF] shadow-xl p-5"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="font-display text-sm font-bold text-[#102B46]">Cookie &amp; Analytics Preferences</h2>
        <button
          type="button"
          onClick={() => savePreference(analyticsEnabled)}
          aria-label="Close cookie notice"
          className="text-[#172536]/60 hover:text-[#102B46] p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-[#172536]/80 leading-relaxed mb-4">
        FLEXORA uses essential technical storage to maintain enquiry form integrity. Optional analytics help measure technical resource usefulness. Read our{' '}
        <Link to="/privacy-policy" className="text-[#3977A8] underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex items-center justify-between gap-3 mb-4 py-2 border-y border-[#DCE6EF]">
        <span className="text-xs font-medium text-[#172536]">Optional Usage Analytics</span>
        <label className="inline-flex items-center gap-2 text-xs text-[#172536] cursor-pointer">
          <input
            type="checkbox"
            checked={analyticsEnabled}
            onChange={(e) => setAnalyticsEnabled(e.target.checked)}
            className="w-4 h-4 accent-[#102B46]"
          />
          <span>{analyticsEnabled ? 'Enabled' : 'Disabled'}</span>
        </label>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => savePreference(false)}
          className="px-3 py-2 text-xs font-medium text-[#172536] border border-[#DCE6EF] hover:bg-[#F5F8FB] transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => savePreference(true)}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
        >
          Accept Selected
        </button>
      </div>
    </aside>
  );
}
