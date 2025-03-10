import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

export default function PublicRoute({ children }: React.PropsWithChildren) {
  const { isAuthenticated, isInitialized } = useAuth();
  const navigate = useNavigate();

  if (!isInitialized) return <LoadingScreen />;

  if (isAuthenticated) {
    navigate("/"); // the thook this time <3
  }

  return <div>{children}</div>;
}
