"use client";

import { useEffect } from "react";

const useStickyHeader = (): void => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollTop = 500;
    const header = document.querySelector<HTMLElement>(".header-sticky");

    const onScroll = () => {
      if (!header) return;

      const currentScrollTop = window.scrollY || window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        header.classList.remove("sticky");
        header.classList.add("transformed");
      } else if (currentScrollTop <= 500) {
        header.classList.remove("sticky", "transformed");
      } else {
        header.classList.add("sticky");
        header.classList.remove("transformed");
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};

export default useStickyHeader;
