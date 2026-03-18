import React, { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}


const SmoothScroll: React. FC<SmoothScrollProps> = ({ children }) => {
  return (
    <div id="smooth-wrapper" suppressHydrationWarning>
      <div id="smooth-content" suppressHydrationWarning>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
