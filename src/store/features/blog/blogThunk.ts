import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Post } from "@/types/blog";

export const fetchPosts = createAsyncThunk(
  "blog/fetchPosts",
  async (
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get(`/posts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch posts"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "blog/fetchPostById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch post"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const createPost = createAsyncThunk(
  "blog/createPost",
  async (data: { title: string; content: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/posts", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to create post"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const updatePost = createAsyncThunk(
  "blog/updatePost",
  async (
    { id, data }: { id: string; data: Partial<Post> },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update post"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const deletePost = createAsyncThunk(
  "blog/deletePost",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.delete(`/posts/${id}`);
      return id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to delete post"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const addComment = createAsyncThunk(
  "blog/addComment",
  async (
    { postId, content }: { postId: string; content: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post(`/posts/${postId}/comments`, { content });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add comment"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
