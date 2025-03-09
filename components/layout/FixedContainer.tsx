import React from "react";
import { cn } from "../../lib/utils";

interface FixedContainerProps {
  children: React.ReactNode;
  position?: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
  zIndex?: number;
  className?: string;
  isFixedOnMobile?: boolean;
}

const FixedContainer: React.FC<FixedContainerProps> = ({
  children,
  position = {},
  zIndex = 10,
  className,
  isFixedOnMobile = true,
}) => {
  const { top, left, right, bottom } = position;

  const fixedStyles: React.CSSProperties = {
    position: "fixed",
    top: top ?? "auto",
    left: left ?? "auto",
    right: right ?? "auto",
    bottom: bottom ?? "auto",
    zIndex,
  };

  return (
    <div
      className={cn(isFixedOnMobile ? "" : "static md:fixed", className)}
      style={fixedStyles}
    >
      {children}
    </div>
  );
};

export default FixedContainer;
