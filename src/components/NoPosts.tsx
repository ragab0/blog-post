import EmptyState from "@/components/EmptyState";
import { BookX } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function NoPosts() {
  const { isAuthenticated } = useAuth();

  return (
    <EmptyState
      icon={<BookX className="h-12 w-12" />}
      title="No Posts Yet"
      description={
        isAuthenticated
          ? "Be the first to share your thoughts! Create a post and start the conversation."
          : "There are no posts yet. Sign in to create the first post!"
      }
      action={
        isAuthenticated ? (
          <Link to="/create">
            <Button>Create First Post</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button>Sign In</Button>
          </Link>
        )
      }
    />
  );
}
