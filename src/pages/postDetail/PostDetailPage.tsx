import PostDetailComments from "./components/PostDetailComments";
import PostActions from "./components/PostActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks/useBlog";
import PostDetailCard, {
  PostDetailCardSkel,
} from "./components/PostDetailCard";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { fetchPostById, isInitialized, loading, currentPost, updatePost } =
    useBlog();

  useEffect(() => {
    if (id) {
      if (currentPost && currentPost.id === id) return;
      fetchPostById(id);
    }
  }, []);

  if (!isInitialized || loading) {
    return <PostDetailCardSkel />;
  }

  if (!currentPost) {
    return <div className="text-center text-destructive">Post not found</div>;
  }

  return (
    <div className="post-detail-page mx-auto max-w-3xl space-y-6">
      <PostActions postId={currentPost.id} authorId={currentPost.author.id} />
      <PostDetailCard post={currentPost} />
      <PostDetailComments post={currentPost} updatePost={updatePost} />
    </div>
  );
}
