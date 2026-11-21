import { ARTICLES_PART_1 } from './articles1';
import { ARTICLES_PART_2 } from './articles2';
import { EditorialArticle } from './types';

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  ...ARTICLES_PART_1,
  ...ARTICLES_PART_2,
];

export function getArticleBySlug(slug: string): EditorialArticle | undefined {
  return EDITORIAL_ARTICLES.find((a) => a.slug === slug);
}
