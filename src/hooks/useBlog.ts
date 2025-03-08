import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "@/store/store";
import { toast } from "sonner";
import { resetError, resetCurrentPost } from "@/store/features/blog/blogSlice";
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
  const {
    posts,
    currentPost,
    isInitialized,
    loading,
    error,
    pagination,
    lastFetchTime,
  } = useSelector((state: RootState) => state.blog);

  const handleCreatePost = async (title: string, content: string) => {
    try {
      await dispatch(createPost({ title, content })).unwrap();
      toast.success("Post created successfully");
      navigate("/");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleUpdatePost = async (
    id: string,
    data: { title?: string; content?: string }
  ) => {
    try {
      await dispatch(updatePost({ id, data })).unwrap();
      toast.success("Post updated successfully");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      await dispatch(deletePost(id)).unwrap();
      toast("Post deleted successfully");
      navigate("/");
    } catch (error) {
      toast(error as string);
    }
  };

  const handleAddComment = async (postId: string, content: string) => {
    try {
      await dispatch(addComment({ postId, content })).unwrap();
      toast("Comment added successfully");
    } catch (error) {
      toast(error as string);
    }
  };

  const handleFetchPosts = (page?: number, limit?: number) =>
    dispatch(fetchPosts({ page, limit }));

  return {
    posts,
    currentPost,
    isInitialized,
    loading,
    error,
    lastFetchTime,
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
