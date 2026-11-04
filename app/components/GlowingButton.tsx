"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "orange"
    | "amber"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineOrange"
    | "light"
    | "white"
    | "whatsapp";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "sm",
  variant = "orange",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Palette: Solar Orange (#FE7600), Deep Navy (#00206D), Darkest Navy (#001038), Sun Amber (#FFAA29), Official WhatsApp (#16A34A)
  const variantClasses = {
    orange:
      "bg-[#FE7600] hover:bg-[#E06800] text-white shadow-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all border border-[#FE7600] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#00206D] hover:bg-[#001954] text-white shadow-sm hover:shadow-lg hover:shadow-blue-900/25 transition-all border border-[#00206D] hover:-translate-y-0.5 active:translate-y-0",
    amber:
      "bg-[#FFAA29] hover:bg-[#E59518] text-[#001038] font-bold shadow-sm hover:shadow-md hover:shadow-amber-500/25 transition-all border border-[#FFAA29] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#001954] hover:bg-[#00206D] text-white shadow-sm hover:shadow transition-all border border-[#13398D] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#00206D] hover:border-[#00206D] hover:bg-[#F0F7FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#00206D] bg-transparent text-[#00206D] hover:bg-[#00206D] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineOrange:
      "border border-[#FE7600] bg-transparent text-[#FE7600] hover:bg-[#FE7600] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#FED7AA] bg-[#FFF7ED] text-[#E06800] hover:bg-[#FFECD9] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#00206D] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE7600] select-none text-center cursor-pointer whitespace-nowrap " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
