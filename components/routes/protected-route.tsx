import { ReactNode, memo } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

interface RouteProps {
  children: ReactNode;
}

const ProtectedRoute = memo(({ children }: RouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.replace("/login");
    return null;
  }

  return <>{children}</>;
});

ProtectedRoute.displayName = "ProtectedRoute";
export default ProtectedRoute;
