import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/types/blog";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostCard({ post }: { post: Post }) {
  const {
    title,
    content,
    createdAt,
    author: { name, avatar },
  } = post;
  return (
    <Card className="h-full overflow-hidden transition-colors hover:bg-muted/50">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="h-6 w-6">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{name}</span>
          <span>-</span>
          <span>{format(new Date(createdAt), "MMM d, yyyy")}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{content}...</p>
      </CardContent>
    </Card>
  );
}

export function PostCardSkel() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20" />
      </CardContent>
    </Card>
  );
}
