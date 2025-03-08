import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "@/hooks/useBlog";
import PostCard, { PostCardSkel } from "./components/PostCard";
import NoPosts from "@/components/NoPosts";

export default function HomePage() {
  const { posts, loading, error, fetchPosts, isInitialized } = useBlog();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-center text-destructive">{error}</div>;
  }

  if (isInitialized && !posts.length) {
    return <NoPosts />;
  }

  return (
    <div className="home-page space-y-6">
      <h1 className="text-4xl font-bold">Latest Posts</h1>
      <div className="posts-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!isInitialized || loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PostCardSkel key={i} />)
          : posts.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <PostCard post={post} />
              </Link>
            ))}
      </div>
    </div>
  );
}
