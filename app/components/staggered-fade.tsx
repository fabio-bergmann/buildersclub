"use client";

import { useEffect, useState, type ReactNode } from "react";

export function StaggeredFade({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, index * 70);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={`transition-all duration-700 ${
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-3 scale-[0.97] opacity-0 blur-[6px]"
      } ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}
