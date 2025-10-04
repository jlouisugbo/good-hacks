'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_POSTS } from '@/lib/mock-data/posts';
import { MOCK_USERS } from '@/lib/mock-data/users';
import { MOCK_BADGES } from '@/lib/mock-data/badges';
import { MOCK_PROGRAMS } from '@/lib/mock-data/programs';
import { Heart, MessageCircle, Plus, Radio, CirclePlay as PlayCircle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, buttonHover } from '@/lib/utils/animations';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postContent, setPostContent] = useState('');

  if (!user) return null;

  const handleHeart = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const hasHearted = post.heartedBy.includes(user.id);
        return {
          ...post,
          heartedBy: hasHearted ? post.heartedBy.filter(id => id !== user.id) : [...post.heartedBy, user.id],
          heartsCount: hasHearted ? post.heartsCount - 1 : post.heartsCount + 1
        };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (!postContent.trim()) return;

    const newPost = {
      id: `post_${Date.now()}`,
      userId: user.id,
      content: postContent,
      timestamp: new Date().toISOString(),
      heartsCount: 0,
      heartedBy: [],
      isAchievement: false,
      contentType: 'text' as const
    };

    setPosts([newPost, ...posts]);
    setPostContent('');
    setShowCreatePost(false);
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return postDate.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-iga-text-dark mb-8"
        >
          Community
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          {!showCreatePost ? (
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowCreatePost(true)}
              className="w-full bg-white border-2 border-iga-border hover:border-iga-primary text-iga-text-gray hover:text-iga-primary py-4 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Share something with the community
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-iga-border"
            >
              <Textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Share your thoughts, achievements, or questions..."
                className="mb-4 min-h-[120px] border-iga-border focus:border-iga-primary"
                maxLength={500}
              />
              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCreatePost(false);
                    setPostContent('');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreatePost}
                  className="bg-iga-primary hover:bg-iga-secondary text-white"
                  disabled={!postContent.trim()}
                >
                  Post
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <AnimatePresence>
            {posts.map((post) => {
              const postUser = MOCK_USERS.find(u => u.id === post.userId);
              const badge = post.badgeId ? MOCK_BADGES.find(b => b.id === post.badgeId) : null;
              const program = post.programId ? MOCK_PROGRAMS.find(p => p.id === post.programId) : null;
              const isHearted = post.heartedBy.includes(user.id);

              return (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  layout
                  className="bg-white rounded-xl shadow-sm border border-iga-border hover:border-iga-primary/50 transition-all overflow-hidden"
                >
                  {post.contentType === 'livestream' && post.isLive && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Radio className="h-4 w-4 animate-pulse" />
                        <span className="font-semibold text-sm">LIVE NOW</span>
                      </div>
                      <span className="text-sm">{post.viewerCount} watching</span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-iga-primary to-iga-secondary flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                        {postUser?.displayName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-iga-text-dark">{postUser?.displayName}</p>
                            <p className="text-sm text-iga-text-gray">{getTimeAgo(post.timestamp)}</p>
                          </div>
                          {post.contentType === 'achievement' && badge && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-3 py-1 rounded-full">
                              <Award className="h-4 w-4 text-amber-600" />
                              <span className="text-xs font-semibold text-amber-700">Achievement</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-iga-text-dark mb-4">{post.content}</p>

                    {post.contentType === 'video' && post.videoUrl && (
                      <div className="mb-4 rounded-lg overflow-hidden bg-black aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={post.videoUrl}
                          title="Video post"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-0"
                        />
                      </div>
                    )}

                    {post.contentType === 'livestream' && post.livestreamUrl && (
                      <div className="mb-4 rounded-lg overflow-hidden bg-black aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={post.livestreamUrl}
                          title="Livestream"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-0"
                        />
                      </div>
                    )}

                    {badge && (
                      <div className="mb-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-200">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{badge.icon}</div>
                          <div>
                            <p className="font-semibold text-iga-text-dark">{badge.name}</p>
                            <p className="text-sm text-iga-text-gray">{badge.description}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {program && (
                      <div className="mb-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-iga-primary/30">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-iga-primary to-iga-secondary flex items-center justify-center">
                            <PlayCircle className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-iga-text-gray mb-1">{program.category}</p>
                            <p className="font-semibold text-iga-text-dark">{program.title}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-6 pt-4 border-t border-iga-border">
                      <motion.button
                        onClick={() => handleHeart(post.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          isHearted ? 'text-red-500' : 'text-iga-text-gray hover:text-red-500'
                        }`}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className={`h-5 w-5 ${isHearted ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{post.heartsCount}</span>
                      </motion.button>

                      <button className="flex items-center gap-2 text-iga-text-gray hover:text-iga-primary transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm font-medium">Comment</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
