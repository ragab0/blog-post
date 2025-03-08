import { FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <EmptyState
        icon={<FileQuestion className="h-12 w-12" />}
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        action={
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        }
      />
    </div>
  );
}
