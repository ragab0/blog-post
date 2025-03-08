import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function PublicRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const { isAuthenticated, isInitialized } = useAuth();

  if (isInitialized && isAuthenticated) {
    navigate("/");
  }

  return <div>{children}</div>;
}
