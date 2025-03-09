import React, { useEffect, useState, useMemo, Suspense, lazy } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "../../lib/utils";

const Sidebar = lazy(() => import("./Sidebar"));
const NavBar = lazy(() => import("./Navbar"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const MemoizedNavBar = useMemo(() => <NavBar />, []);
  const MemoizedSidebar = useMemo(() => <Sidebar />, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? MemoizedNavBar : MemoizedSidebar}
      </Suspense>
      <div className={cn("flex-1 p-4", !isMobile && "md:ml-64 md:p-6")}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
