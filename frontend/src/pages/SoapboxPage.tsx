import React, { useState, useEffect } from 'react';
import {
  loadPosts,
  addPost,
  likePost,
  addReply,
  formatTimestamp,
  SoapboxPost,
} from '../utils/soapboxUtils';
import { ThumbsUp, MessageSquare, Send } from 'lucide-react';

function PostCard({ post, onLike, onReply }: {
  post: SoapboxPost;
  onLike: (id: string) => void;
  onReply: (id: string, text: string) => void;
}) {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');

  function handleReplySubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!replyText.trim()) return;
    onReply(post.id, replyText.trim());
    setReplyText('');
    setShowReply(false);
  }

  return (
    <div className="soapbox-post p-4 mb-3">
      {/* Post header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 flex items-center justify-center font-masthead text-sm flex-shrink-0"
            style={{ background: 'oklch(0.52 0.16 38)', color: 'oklch(0.93 0.04 88)' }}
          >
            {post.username.charAt(0)}
          </div>
          <div>
            <span className="font-subheading text-xs tracking-wide" style={{ color: 'oklch(0.35 0.12 42)' }}>
              @{post.username}
            </span>
          </div>
        </div>
        <span className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 60)' }}>
          {formatTimestamp(post.timestamp)}
        </span>
      </div>

      {/* Post text */}
      <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.22 0.05 55)' }}>
        {post.text}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-1 font-subheading text-xs tracking-wide px-2 py-1 transition-colors"
          style={{
            background: 'oklch(0.76 0.16 88)',
            color: 'oklch(0.22 0.05 55)',
            border: '1px solid oklch(0.60 0.14 80)',
          }}
        >
          <ThumbsUp size={12} />
          GROOVY! {post.likes > 0 && `(${post.likes})`}
        </button>
        <button
          onClick={() => setShowReply(!showReply)}
          className="flex items-center gap-1 font-subheading text-xs tracking-wide px-2 py-1 transition-colors"
          style={{
            background: 'oklch(0.86 0.06 78)',
            color: 'oklch(0.35 0.08 55)',
            border: '1px solid oklch(0.65 0.08 60)',
          }}
        >
          <MessageSquare size={12} />
          REPLY {post.replies.length > 0 && `(${post.replies.length})`}
        </button>
      </div>

      {/* Reply form */}
      {showReply && (
        <form onSubmit={handleReplySubmit} className="mt-3 flex gap-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Say something groovy..."
            className="flex-1 font-body text-sm px-3 py-1.5"
            style={{
              background: 'oklch(0.95 0.03 90)',
              border: '2px solid oklch(0.65 0.08 60)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
            }}
            maxLength={280}
          />
          <button type="submit" className="retro-btn py-1 px-3 flex items-center gap-1 text-xs">
            <Send size={12} />
            SEND
          </button>
        </form>
      )}

      {/* Replies */}
      {post.replies.length > 0 && (
        <div className="mt-3 ml-4 space-y-2">
          {post.replies.map((reply) => (
            <div
              key={reply.id}
              className="p-3"
              style={{
                background: 'oklch(0.90 0.04 82)',
                borderLeft: '3px solid oklch(0.76 0.16 88)',
              }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-subheading text-xs" style={{ color: 'oklch(0.40 0.10 48)' }}>
                  @{reply.username}
                </span>
                <span className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 60)' }}>
                  {formatTimestamp(reply.timestamp)}
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'oklch(0.25 0.06 50)' }}>
                {reply.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SoapboxPage() {
  const [posts, setPosts] = useState<SoapboxPost[]>([]);
  const [newPostText, setNewPostText] = useState('');
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  function handlePostSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newPostText.trim()) return;
    addPost(newPostText.trim());
    setPosts(loadPosts());
    setNewPostText('');
    setCharCount(0);
  }

  function handleLike(postId: string) {
    const updated = likePost(postId);
    setPosts(updated);
  }

  function handleReply(postId: string, text: string) {
    const updated = addReply(postId, text);
    setPosts(updated);
  }

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value;
    if (val.length <= 280) {
      setNewPostText(val);
      setCharCount(val.length);
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="retro-border-thick p-4 mb-6 text-center" style={{ background: 'oklch(0.89 0.05 80)' }}>
        <h1 className="retro-masthead text-3xl md:text-4xl mb-1" style={{ color: 'oklch(0.35 0.12 42)' }}>
          THE SOAPBOX
        </h1>
        <p className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.55 0.08 60)' }}>
          GROOVY SPEAK · YOUR VOICE · YOUR PLATFORM · YOUR PROBLEM
        </p>
      </div>

      {/* Post composer */}
      <div className="retro-card p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="starburst w-10 h-10 flex-shrink-0" />
          <h3 className="retro-heading text-lg" style={{ color: 'oklch(0.35 0.12 42)' }}>
            SPEAK YOUR MIND, BABY!
          </h3>
        </div>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPostText}
            onChange={handleTextChange}
            placeholder="What's on your groovy mind? Share it with the world, daddy-o..."
            rows={3}
            className="w-full font-body text-sm p-3 mb-2 resize-none"
            style={{
              background: 'oklch(0.95 0.03 90)',
              border: '2px solid oklch(0.65 0.08 60)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
            }}
          />
          <div className="flex justify-between items-center">
            <span
              className="font-body text-xs"
              style={{ color: charCount > 250 ? 'oklch(0.55 0.22 25)' : 'oklch(0.55 0.06 60)' }}
            >
              {charCount}/280
            </span>
            <button
              type="submit"
              disabled={!newPostText.trim()}
              className="retro-btn flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={14} />
              POST IT!
            </button>
          </div>
        </form>
      </div>

      <div className="retro-divider mb-4" />

      {/* Feed */}
      {posts.length === 0 ? (
        <div className="retro-card p-8 text-center">
          <p className="font-heading text-xl mb-2" style={{ color: 'oklch(0.40 0.10 50)' }}>
            The Soapbox is empty, baby!
          </p>
          <p className="font-body text-sm" style={{ color: 'oklch(0.50 0.06 60)' }}>
            Be the first to speak your mind. The world is waiting. Well, this page is waiting.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.52 0.16 38)' }}>
              {posts.length} GROOVY POST{posts.length !== 1 ? 'S' : ''}
            </span>
            <span className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 60)' }}>
              Newest first
            </span>
          </div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onReply={handleReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}
