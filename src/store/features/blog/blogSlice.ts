import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '@/types/blog';

interface BlogState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setPosts, addPost, setLoading, setError } = blogSlice.actions;
export default blogSlice.reducer;