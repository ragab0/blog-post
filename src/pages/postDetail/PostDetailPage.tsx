import PostDetailComments from "./components/PostDetailComments";
import { mockPost } from "@/assets/dummyData";
import { useEffect, useState } from "react";
import { Post } from "@/types/blog";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";
import PostDetailCard, {
  PostDetailCardSkel,
} from "./components/PostDetailCard";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setPost(mockPost);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load post.",
        });
      }
    };

    fetchPost();
  }, [id, toast]);

  if (loading) {
    return <PostDetailCardSkel />;
  }

  if (!post) {
    return <div className="text-center text-destructive">Post not found</div>;
  }

  return (
    <div className="post-detail-page mx-auto max-w-3xl space-y-6">
      <PostDetailCard post={post} />
      <PostDetailComments post={post} setPost={setPost} />
    </div>
  );
}
