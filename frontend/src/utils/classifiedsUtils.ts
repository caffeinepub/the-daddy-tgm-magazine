import { generateFakeUsername, formatTimestamp } from './soapboxUtils';
import type { ClassifiedCategory } from '../data/classifiedsLibrary';

const CLASSIFIEDS_KEY = 'tgm_user_classifieds';

export interface UserClassifiedAd {
  id: string;
  category: ClassifiedCategory;
  headline: string;
  body: string;
  contact?: string;
  username: string;
  timestamp: number;
  isUserSubmitted: true;
}

export function loadUserAds(): UserClassifiedAd[] {
  try {
    const raw = localStorage.getItem(CLASSIFIEDS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as UserClassifiedAd[];
  } catch {
    return [];
  }
}

function saveUserAds(ads: UserClassifiedAd[]): void {
  localStorage.setItem(CLASSIFIEDS_KEY, JSON.stringify(ads));
}

export function submitUserAd(
  category: ClassifiedCategory,
  headline: string,
  body: string,
  contact?: string
): UserClassifiedAd {
  const ads = loadUserAds();
  const newAd: UserClassifiedAd = {
    id: `user_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    category,
    headline,
    body,
    contact: contact?.trim() || undefined,
    username: generateFakeUsername(),
    timestamp: Date.now(),
    isUserSubmitted: true,
  };
  saveUserAds([newAd, ...ads]);
  return newAd;
}

export function clearUserAds(): void {
  localStorage.removeItem(CLASSIFIEDS_KEY);
}

export { formatTimestamp };
