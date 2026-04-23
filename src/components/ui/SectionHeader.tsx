import * as React from "react";
import { cn } from "./cn";

export interface SectionHeaderProps {
  tag: string;
  title: string;
  centered?: boolean;
  subtitle?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  centered,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <p className="text-xs font-medium uppercase tracking-wider text-[#7cb342]">
        {tag}
      </p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

