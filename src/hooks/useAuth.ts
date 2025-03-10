import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "@/store/store";
import { initAuth, resetError } from "@/store/features/auth/authSlice";
import { toast } from "sonner";
import {
  login,
  register,
  logout,
  getProfile,
  updateProfile,
} from "@/store/features/auth/authThunk";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await dispatch(register({ name, email, password, avatar: "" })).unwrap();
      toast.success("Registered successfully");
      navigate("/");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleUpdateProfile = async (data: Partial<typeof user>) => {
    if (!data) return;
    try {
      await dispatch(updateProfile(data)).unwrap();
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleGetProfile = useCallback(async () => {
    try {
      await dispatch(getProfile()).unwrap();
    } catch (error) {
      // If profile fetch fails, clear the token
      localStorage.removeItem("token");
    }
  }, [dispatch]);

  function isAuth() {
    console.log("IS AUTH FUNCTION");
    // Check for token and fetch user profile
    const token = localStorage.getItem("token");
    if (token && !isInitialized) {
      dispatch(getProfile()).unwrap();
      console.log("ISAUTH: GET PROFILE");
    } else {
      dispatch(initAuth());
      console.log("ISAUTH: init");
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    isInitialized,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    getProfile: handleGetProfile,
    updateProfile: handleUpdateProfile,
    resetError: () => dispatch(resetError()),
    isAuth,
  };
};
