import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/blog";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function PostDetailComments({
  post,
}: {
  post: Post;
  updatePost: (id: string, data: Partial<Post>) => void;
}) {
  const [comment, setComment] = useState("");
  const { isAuthenticated } = useAuth();

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments ({post.comments.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isAuthenticated && (
          <div className="space-y-2">
            <Textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end">
              <Button onClick={handleCommentSubmit} disabled={true}>
                Post Comment
              </Button>
            </div>
          </div>
        )}
        {post.comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={comment.author.avatar} />
                  <AvatarFallback>
                    {comment.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">
                  {comment.author.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {format(new Date(comment.createdAt), "MMM d, yyyy")}
                </span>
              </div>
            </CardHeader>
            <CardContent>{comment.content}</CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
