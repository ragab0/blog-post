import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBlog } from "@/hooks/useBlog";
import { createPostschema } from "@/validations/createPost";
import * as yup from "yup";
import { useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { useNavigate } from "react-router-dom";

type FormData = yup.InferType<typeof createPostschema>;

export default function PostManipulate({
  isEditingId,
}: {
  isEditingId?: string | null;
}) {
  const navigate = useNavigate();
  const {
    createPost,
    updatePost,
    currentPost,
    fetchPostById,
    loading,
    isInitialized,
  } = useBlog();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createPostschema),
  });

  useEffect(function () {
    if (isEditingId && !currentPost) {
      fetchPostById(isEditingId!);
    }
  }, []);

  useEffect(
    function () {
      if (currentPost) reset(currentPost);
    },
    [currentPost]
  );

  const onSubmit = async (data: FormData) => {
    isEditingId
      ? updatePost(isEditingId!, data)
      : createPost(data.title, data.content);
  };

  const onCancel = async () => {
    isEditingId ? navigate(`/post/${isEditingId}`) : navigate("/");
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {isEditingId ? "Edit Post" : "Create New Post"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isInitialized && isEditingId ? (
            <Skels />
          ) : (
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
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading
                    ? isEditingId
                      ? "Updating..."
                      : "Publishing..."
                    : isEditingId
                    ? "Update Post"
                    : "Publish Post"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Skels() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/2" /> {/* Simulating a title */}
      <Skeleton className="h-10 w-full" /> {/* Simulating input field */}
      <Skeleton className="h-80 w-full" /> {/* Simulating textarea height */}
      <div className="flex gap-4 justify-end">
        <Skeleton className="h-8 w-1/4" /> {/* Simulating button */}
        <Skeleton className="h-8 w-1/4" /> {/* Simulating another button */}
      </div>
    </div>
  );
}
