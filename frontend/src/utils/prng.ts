/**
 * Seedable pseudo-random number generator (mulberry32 algorithm).
 * Given the same seed, always produces the same sequence.
 */
export function createSeededRandom(seed: number) {
  let s = seed >>> 0;

  function random(): number {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function pickN<T>(array: T[], n: number): T[] {
    const shuffled = shuffle(array);
    return shuffled.slice(0, Math.min(n, shuffled.length));
  }

  function pick<T>(array: T[]): T {
    return array[Math.floor(random() * array.length)];
  }

  function pickIndex(max: number): number {
    return Math.floor(random() * max);
  }

  return { random, shuffle, pickN, pick, pickIndex };
}
