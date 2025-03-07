import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/home/HomePage";
import PostDetailPage from "@/pages/postDetail/PostDetailPage";
import CreatePostPage from "@/pages/createPost/CreatePostPage";
import LoginPage from "@/pages/login/LoginPage";
import RegisterPage from "@/pages/register/RegisterPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-wrapper min-h-screen">
          <Navbar />
          <main className="container mx-auto px-4 py-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<PostDetailPage />} />
              <Route path="/create" element={<CreatePostPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<h1>Not found *_*</h1>} />
            </Routes>
          </main>
          <Toaster />
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
