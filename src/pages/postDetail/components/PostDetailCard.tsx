import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/types/blog";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostDetailCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{post.title}</CardTitle>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">
            <div>{post.author.name}</div>
            <div>{format(new Date(post.createdAt), "MMMM d, yyyy")}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function PostDetailCardSkel() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40" />
        </CardContent>
      </Card>
    </div>
  );
}
