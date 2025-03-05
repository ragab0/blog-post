import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          DevBlog
        </Link>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link to="/create">
                <Button variant="outline" size="sm">
                  <PenSquare className="mr-2 h-4 w-4" />
                  Write Post
                </Button>
              </Link>
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name}
              </span>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
