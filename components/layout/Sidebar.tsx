import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { menuItems } from "../../data/menu";
import FixedContainer from "./FixedContainer";

interface SidebarItemProps {
  to: string;
  Icon: LucideIcon;
  label: string;
  isActive: boolean;
  subMenu?: {
    to: string;
    Icon: LucideIcon;
    label: string;
    badge?: number;
  }[];
  badge?: number;
  is_sidebar_open?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  Icon,
  label,
  isActive,
  subMenu,
  badge,
  is_sidebar_open,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubMenu = !!subMenu;

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const itemClass = cn(
    "flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 transition-all duration-200",
    isActive
      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/60",
  );

  const subItemClass = (subActive: boolean) =>
    cn(
      "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
      subActive
        ? "text-primary-700 dark:text-primary-400"
        : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
    );

  return (
    <div className="relative">
      <Link
        to={to}
        className={itemClass}
        onClick={hasSubMenu ? toggleSubMenu : undefined}
      >
        <span className="mr-3 h-5 w-5">
          <Icon />
        </span>
        {is_sidebar_open && <span className="flex-1">{label}</span>}
        {badge && (
          <span className="ml-auto inline-flex items-center justify-center h-5 min-w-5 px-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {badge}
          </span>
        )}
        {hasSubMenu && (
          <ChevronRight
            className={cn(
              "ml-auto h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-90",
            )}
          />
        )}
      </Link>

      {hasSubMenu && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-10 space-y-1"
            >
              {subMenu.map(
                ({
                  to: subTo,
                  Icon: SubIcon,
                  label: subLabel,
                  badge: subBadge,
                }) => (
                  <Link
                    key={subTo}
                    to={subTo}
                    className={subItemClass(location.pathname === subTo)}
                  >
                    <span className="h-4 w-4 mr-2">
                      <SubIcon />
                    </span>
                    {is_sidebar_open && (
                      <>
                        {subLabel}
                        {subBadge && (
                          <span className="ml-auto inline-flex items-center justify-center h-5 min-w-5 px-1 rounded-full text-xs font-medium bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300">
                            {subBadge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path: string) => location.pathname === path;
  const [isSidebarOpen] = useState(true);

  const sidebarVariants = {
    open: {
      width: 256,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      width: 72,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <FixedContainer
      position={{ top: 0, left: 0, bottom: 0 }} // Fixed to the left side, full height
      zIndex={10}
      className="hidden md:block" // Only show on medium screens and above
      isFixedOnMobile={false} // Not fixed on mobile (handled by Layout)
    >
      <motion.div
        className="glass-sidebar min-h-screen flex flex-col pt-16"
        variants={sidebarVariants}
        initial="open"
        animate={isSidebarOpen ? "open" : "closed"}
      >
        <motion.div
          className="flex flex-col flex-grow glass-sidebar pt-5 pb-4 h-full"
          animate={{ transition: { duration: 0.3 } }}
        >
          <div className="flex items-center flex-shrink-0 px-4 mb-8">
            <div className="w-full flex items-center p-2 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <Avatar>
                <AvatarImage
                  src={user?.avatar || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>{user?.name || "hojan"}</AvatarFallback>
              </Avatar>
              {isSidebarOpen && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.role}
                  </p>
                </div>
              )}
            </div>
          </div>

          <nav className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar">
            {menuItems.map((item, index) => (
              <motion.div key={item.to} variants={itemVariants}>
                {index === menuItems.length - 2 && isSidebarOpen && (
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800" />
                )}
                <SidebarItem
                  {...item}
                  isActive={isActive(item.to)}
                  is_sidebar_open={isSidebarOpen}
                />
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </motion.div>
    </FixedContainer>
  );
};

export default Sidebar;
