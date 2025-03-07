import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { User } from "@/types/blog";
import { LoginCredentials, RegisterCredentials } from "@/types/auth";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register", credentials);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Registration failed"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Logout failed"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/profile");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch profile"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data: Partial<User>, { rejectWithValue }) => {
    try {
      const response = await api.put("/users/profile", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update profile"
        );
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
