import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "@/store/store";
import { resetError, resetCurrentPost } from "@/store/features/blog/blogSlice";
import { useToast } from "./use-toast";
import {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost,
  addComment,
} from "@/store/features/blog/blogThunk";

export const useBlog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { posts, currentPost, loading, error, pagination } = useSelector(
    (state: RootState) => state.blog
  );

  const handleCreatePost = async (title: string, content: string) => {
    try {
      await dispatch(createPost({ title, content })).unwrap();
      toast({
        title: "Success",
        description: "Post created successfully",
      });
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  const handleUpdatePost = async (
    id: string,
    data: { title?: string; content?: string }
  ) => {
    try {
      await dispatch(updatePost({ id, data })).unwrap();
      toast({
        title: "Success",
        description: "Post updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      await dispatch(deletePost(id)).unwrap();
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  const handleAddComment = async (postId: string, content: string) => {
    try {
      await dispatch(addComment({ postId, content })).unwrap();
      toast({
        title: "Success",
        description: "Comment added successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  const handleFetchPosts = (page?: number, limit?: number) =>
    dispatch(fetchPosts({ page, limit }));

  return {
    posts,
    currentPost,
    loading,
    error,
    pagination,
    fetchPosts: handleFetchPosts,
    fetchPostById: (id: string) => dispatch(fetchPostById(id)),
    createPost: handleCreatePost,
    updatePost: handleUpdatePost,
    deletePost: handleDeletePost,
    addComment: handleAddComment,
    resetError: () => dispatch(resetError()),
    resetCurrentPost: () => dispatch(resetCurrentPost()),
  };
};
