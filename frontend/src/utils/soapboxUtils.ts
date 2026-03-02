const POSTS_KEY = 'tgm_soapbox_posts';

export interface SoapboxReply {
  id: string;
  username: string;
  text: string;
  timestamp: number;
}

export interface SoapboxPost {
  id: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  replies: SoapboxReply[];
}

const FAKE_USERNAMES_70S = [
  'GroovyGeraldine',
  'FunkyFred1970',
  'DiscoDelilah',
  'HipHarold',
  'FarOutFelicia',
  'CoolCatClarence',
  'BoogieBarb',
  'SwingingSylvester',
  'RadicalRhonda',
  'JiveTalkingJim',
  'PeacefulPeggy',
  'SoulfulSam',
  'WildWendy',
  'MellowMelvin',
  'GlitteringGloria',
  'TubularTed',
  'OutaSightOlga',
  'HeavyHank',
  'FlashyFlorida',
  'DynamiteDorothy',
  'SmoothStan',
  'FunkyFrancesca',
  'GroovyGordon',
  'ChillCharlene',
  'BaddestBernie',
  'SassySylvia',
  'CrazyCarlos',
  'WickedWilma',
  'SlickSidney',
  'HotHarriet',
];

let usernameCounter = 0;

export function generateFakeUsername(): string {
  const name = FAKE_USERNAMES_70S[usernameCounter % FAKE_USERNAMES_70S.length];
  usernameCounter++;
  return name;
}

export function loadPosts(): SoapboxPost[] {
  try {
    const raw = localStorage.getItem(POSTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SoapboxPost[];
  } catch {
    return [];
  }
}

function savePosts(posts: SoapboxPost[]): void {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function addPost(text: string): SoapboxPost {
  const posts = loadPosts();
  const newPost: SoapboxPost = {
    id: `post_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    username: generateFakeUsername(),
    text,
    timestamp: Date.now(),
    likes: 0,
    replies: [],
  };
  const updated = [newPost, ...posts];
  savePosts(updated);
  return newPost;
}

export function likePost(postId: string): SoapboxPost[] {
  const posts = loadPosts();
  const updated = posts.map((p) =>
    p.id === postId ? { ...p, likes: p.likes + 1 } : p
  );
  savePosts(updated);
  return updated;
}

export function addReply(postId: string, text: string): SoapboxPost[] {
  const posts = loadPosts();
  const reply: SoapboxReply = {
    id: `reply_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    username: generateFakeUsername(),
    text,
    timestamp: Date.now(),
  };
  const updated = posts.map((p) =>
    p.id === postId ? { ...p, replies: [...p.replies, reply] } : p
  );
  savePosts(updated);
  return updated;
}

export function formatTimestamp(ts: number): string {
  const now = Date.now();
  const diff = now - ts;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
