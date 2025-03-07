import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "@/store/store";
import {
  login,
  register,
  logout,
  getProfile,
  updateProfile,
} from "@/store/features/auth/authThunk";
import { useToast } from "./use-toast";
import { resetError } from "@/store/features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password })).unwrap();
      toast({
        title: "Success",
        description: "Logged in successfully",
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

  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await dispatch(register({ name, email, password })).unwrap();
      toast({
        title: "Success",
        description: "Registered successfully",
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

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      navigate("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  const handleUpdateProfile = async (data: Partial<typeof user>) => {
    if (!data) return;
    try {
      await dispatch(updateProfile(data)).unwrap();
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error as string,
      });
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    getProfile: () => dispatch(getProfile()),
    updateProfile: handleUpdateProfile,
    resetError: () => dispatch(resetError()),
  };
};
