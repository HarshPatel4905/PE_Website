import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle: string;
  dark?: boolean;
}

export function PageHeader({ breadcrumbs, title, subtitle, dark = true }: PageHeaderProps) {
  return (
    <section
      className={
        dark
          ? 'bg-[#102B46] text-white border-b border-[#172536]'
          : 'bg-white text-[#102B46] border-b border-[#DCE6EF]'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs mb-5">
          {breadcrumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className={`w-3.5 h-3.5 ${dark ? 'text-[#DCE6EF]/50' : 'text-[#172536]/40'}`}
                />
              )}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className={`transition-colors ${
                    dark
                      ? 'text-[#DCE6EF]/80 hover:text-white'
                      : 'text-[#172536]/70 hover:text-[#102B46]'
                  }`}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={dark ? 'text-white font-medium' : 'text-[#102B46] font-medium'}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight max-w-4xl leading-tight">
          {title}
        </h1>
        <p
          className={`mt-4 text-base sm:text-lg max-w-3xl leading-relaxed ${
            dark ? 'text-[#DCE6EF]/90' : 'text-[#172536]/80'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
