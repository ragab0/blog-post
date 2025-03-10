import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOutIcon, PenSquare } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import Logo from "./Logo";

export default function Navbar() {
  const { isAuthenticated, isInitialized, logout } = useAuth();

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto p-4 flex items-center justify-between gap-8">
        <Logo />
        <div className="flex items-center gap-4 flex-wrap justify-end">
          {!isInitialized ? (
            <Skel />
          ) : isAuthenticated ? (
            <>
              <Link to="/create" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <PenSquare className="mr-2 h-4 w-4" />
                  Write Post
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex-1"
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </Button>
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

function Skel() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  );
}
