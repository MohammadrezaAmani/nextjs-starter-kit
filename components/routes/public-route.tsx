"use client";
import { ReactNode, memo } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

interface RouteProps {
  children: React.ReactNode;
}

const PublicRoute = memo(({ children }: RouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isClient, isAuthenticated, router]);

  if (!isClient) {
    return null; // In case the component is being rendered on the server, render nothing
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return !isAuthenticated ? <>{children}</> : null;
});

PublicRoute.displayName = "PublicRoute";
export default PublicRoute;
