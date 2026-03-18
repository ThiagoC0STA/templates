"use client";

import { usePathname } from "next/navigation";

export default function useBaseURL(): string {
  const pathname = usePathname() ?? "";
  return "/" + pathname.split("/").filter(Boolean)[0];
}
