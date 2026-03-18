'use client';

import ScrollToTop from "react-scroll-to-top";
import type { ComponentProps } from "react";

type ScrollTopWrapperProps = Omit<ComponentProps<typeof ScrollToTop>, "width" | "height"> & {
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;
};

const ScrollTopWrapper = ({ width, height, ...rest }: ScrollTopWrapperProps) => {
  return (
    <ScrollToTop
      {...rest}
      smooth
      width={width !== undefined ? String(width) : undefined}
      height={height !== undefined ? String(height) : undefined}
      
    />
  );
};

export default ScrollTopWrapper;
