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
    | "cyan"
    | "aqua"
    | "gold"
    | "sun"
    | "orange"
    | "amber"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineCyan"
    | "outlineGold"
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
  variant = "cyan",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Aqualife Palette: Deep Royal Blue (#024395), Radiant Cyan (#02B8FD), Sun Gold (#FCCF04), Dark Navy (#051C73), WhatsApp (#16A34A)
  const variantClasses = {
    cyan:
      "bg-[#02B8FD] hover:bg-[#029BD6] text-[#031445] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all border border-[#02B8FD] hover:-translate-y-0.5 active:translate-y-0",
    aqua:
      "bg-[#02B8FD] hover:bg-[#029BD6] text-[#031445] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all border border-[#02B8FD] hover:-translate-y-0.5 active:translate-y-0",
    gold:
      "bg-[#FCCF04] hover:bg-[#E5BC00] text-[#031445] font-bold shadow-sm hover:shadow-lg hover:shadow-yellow-400/30 transition-all border border-[#FCCF04] hover:-translate-y-0.5 active:translate-y-0",
    sun:
      "bg-[#FCCF04] hover:bg-[#E5BC00] text-[#031445] font-bold shadow-sm hover:shadow-lg hover:shadow-yellow-400/30 transition-all border border-[#FCCF04] hover:-translate-y-0.5 active:translate-y-0",
    orange:
      "bg-[#FCCF04] hover:bg-[#E5BC00] text-[#031445] font-bold shadow-sm hover:shadow-lg hover:shadow-yellow-400/30 transition-all border border-[#FCCF04] hover:-translate-y-0.5 active:translate-y-0",
    amber:
      "bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold shadow-sm hover:shadow-md hover:shadow-amber-500/25 transition-all border border-[#F59E0B] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#024395] hover:bg-[#051C73] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-900/25 transition-all border border-[#024395] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#051C73] hover:bg-[#024395] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#1E4BA8] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#024395] hover:border-[#024395] hover:bg-[#F0F9FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#024395] bg-transparent text-[#024395] hover:bg-[#024395] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineCyan:
      "border border-[#02B8FD] bg-transparent text-[#024395] hover:bg-[#02B8FD] hover:text-[#031445] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineGold:
      "border border-[#FCCF04] bg-transparent text-[#031445] hover:bg-[#FCCF04] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineOrange:
      "border border-[#FCCF04] bg-transparent text-[#031445] hover:bg-[#FCCF04] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#BAE6FD] bg-[#F0F9FF] text-[#024395] hover:bg-[#E0F2FE] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#024395] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02B8FD] select-none text-center cursor-pointer whitespace-nowrap " +
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
