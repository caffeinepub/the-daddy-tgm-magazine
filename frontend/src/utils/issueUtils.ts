const EPOCH = new Date('2024-01-01T00:00:00Z');
const ARCHIVE_KEY = 'tgm_archive';

export function getIssueNumberFromDate(date: Date): number {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const epoch = new Date(EPOCH.getFullYear(), EPOCH.getMonth(), EPOCH.getDate());
  const diffMs = d.getTime() - epoch.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1);
}

export function getTodayIssueNumber(): number {
  return getIssueNumberFromDate(new Date());
}

export function getIssueSeedFromDate(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return y * 10000 + m * 100 + d;
}

export function getTodaySeed(): number {
  return getIssueSeedFromDate(new Date());
}

export interface ArchivedIssue {
  dateStr: string;
  issueNumber: number;
  seed: number;
}

export function saveIssueToArchive(date: Date): void {
  const existing = getArchivedIssues();
  const dateStr = formatDateStr(date);
  const alreadyExists = existing.some((i) => i.dateStr === dateStr);
  if (!alreadyExists) {
    const issueNumber = getIssueNumberFromDate(date);
    const seed = getIssueSeedFromDate(date);
    const updated = [{ dateStr, issueNumber, seed }, ...existing];
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(updated));
  }
}

export function getArchivedIssues(): ArchivedIssue[] {
  try {
    const raw = localStorage.getItem(ARCHIVE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ArchivedIssue[];
    return parsed.sort((a, b) => b.dateStr.localeCompare(a.dateStr));
  } catch {
    return [];
  }
}

export function formatDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function parseDateStr(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function formatDisplayDate(dateStr: string): string {
  const date = parseDateStr(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
