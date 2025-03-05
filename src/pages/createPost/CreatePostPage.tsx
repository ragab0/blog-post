import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { addPost } from "@/store/features/blog/blogSlice";
import { RootState } from "@/store/store";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  content: yup
    .string()
    .min(50, "Content must be at least 50 characters")
    .required("Content is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function CreatePostPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = useSelector((state: RootState) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newPost = {
        id: Date.now().toString(),
        title: data.title,
        content: data.content,
        author: {
          id: user?.id || "",
          name: user?.name || "",
          avatar: user?.avatar || "",
        },
        createdAt: new Date().toISOString(),
        comments: [],
      };
      dispatch(addPost(newPost));
      toast({
        title: "Success",
        description: "Your post has been published.",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to publish post. Please try again.",
      });
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                {...register("title")}
                className={errors.title ? "border-destructive" : ""}
              />
              {errors.title && (
                <p className="text-sm text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                {...register("content")}
                className={`min-h-[300px] ${
                  errors.content ? "border-destructive" : ""
                }`}
              />
              {errors.content && (
                <p className="text-sm text-destructive">
                  {errors.content.message}
                </p>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Publishing..." : "Publish Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
