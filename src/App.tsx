import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/home/HomePage";
import PostDetailPage from "@/pages/postDetail/PostDetailPage";
import CreatePostPage from "@/pages/createPost/CreatePostPage";
import LoginPage from "@/pages/login/LoginPage";
import RegisterPage from "@/pages/register/RegisterPage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import EditPostPage from "./pages/editPost/EditPostPage";

function AppRoutes() {
  const { getProfile } = useAuth();

  useEffect(() => {
    // Check for token and fetch user profile
    const token = localStorage.getItem("token");
    if (token) {
      getProfile();
    }
  }, []);

  return (
    <>
      <div className="app-wrapper min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route
              path="/post/:id/edit"
              element={
                <ProtectedRoute>
                  <EditPostPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreatePostPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Toaster />
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
}
