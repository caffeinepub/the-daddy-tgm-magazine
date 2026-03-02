import { createSeededRandom } from './prng';
import {
  spoofMoviePosters,
  comicStrips,
  fakeProductAds,
  spoofReviews,
  lettersToEditor,
  backPageItems,
  ContentItem,
} from '../data/contentLibrary';

export interface IssuePage {
  pageNumber: number;
  contentType: ContentItem['type'];
  contentItem: ContentItem;
}

export function generateIssuePages(seed: number): IssuePage[] {
  const rng = createSeededRandom(seed);

  // Build a pool of all non-back-page content
  const pool: ContentItem[] = [
    ...spoofMoviePosters,
    ...comicStrips,
    ...fakeProductAds,
    ...spoofReviews,
    ...lettersToEditor,
  ];

  // Shuffle the pool
  const shuffled = rng.shuffle(pool);

  // We need 49 pages of regular content + 1 back page
  const pages: IssuePage[] = [];

  for (let i = 0; i < 49; i++) {
    const item = shuffled[i % shuffled.length];
    pages.push({
      pageNumber: i + 1,
      contentType: item.type,
      contentItem: item,
    });
  }

  // Page 50 is always a back page
  const backPage = rng.pick(backPageItems);
  pages.push({
    pageNumber: 50,
    contentType: 'backPage',
    contentItem: backPage,
  });

  return pages;
}
