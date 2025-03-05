import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "@/store/store";
import { setPosts, setLoading } from "@/store/features/blog/blogSlice";
import { mockPosts } from "@/assets/dummyData";
import PostCard, { PostCardSkel } from "./components/PostCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(setLoading(true));
    // Simulate API call
    setTimeout(() => {
      dispatch(setPosts(mockPosts));
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);

  if (error) {
    return <div className="text-center text-destructive">{error}</div>;
  }

  return (
    <div className="home-page space-y-6">
      <h1 className="text-4xl font-bold">Latest Posts</h1>
      <div className="posts-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PostCardSkel key={i} />)
          : posts.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <PostCard post={post} />
              </Link>
            ))}
      </div>
    </div>
  );
}
