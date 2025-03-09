import React, { memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { mobileMenuItems } from "../../data/menu";
import FixedContainer from "./FixedContainer"; // Import the FixedContainer component

interface NavBarItemProps {
  to: string;
  Icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const NavBarItem = memo(
  ({ to, Icon, label, isActive }: NavBarItemProps) => (
    <div className="relative">
      <Link
        to={to}
        className={cn(
          "flex items-center justify-center w-full p-3 rounded-xl transition-colors",
          isActive
            ? "bg-primary-400 text-primary-700"
            : "text-gray-600 hover:bg-gray-100",
        )}
        title={label}
      >
        <Icon className="w-5 h-5" />
      </Link>
    </div>
  ),
  (prev, next) => prev.isActive === next.isActive,
);

const isActivePath = (path: string, currentPath: string) =>
  path === currentPath;

const NavBar: React.FC = memo(() => {
  const { pathname } = useLocation();

  const menuItems = useMemo(() => {
    return mobileMenuItems.map((item) => ({
      ...item,
      isActive: isActivePath(item.to, pathname),
    }));
  }, [pathname]);

  return (
    <FixedContainer
      position={{ bottom: 0, left: 0, right: 0 }} // Fixed to the bottom, spanning full width
      zIndex={50} // Ensure it stays above other content
      className={cn(
        "md:hidden", // Only visible on mobile (below md breakpoint)
        "rounded-tr-xl rounded-tl-xl",
        "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",
        "border-gray-100 dark:border-gray-800 py-2 px-4",
      )}
      isFixedOnMobile={true} // Fixed positioning on mobile
    >
      <div className="flex justify-around items-center max-w-md mx-auto">
        {menuItems.map((item) => (
          <NavBarItem
            key={item.to}
            to={item.to}
            Icon={item.Icon}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </div>
    </FixedContainer>
  );
});

export default NavBar;
