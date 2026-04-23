import * as React from "react";
import { cn } from "./cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#e8f5e9] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#1a2f1c]/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

