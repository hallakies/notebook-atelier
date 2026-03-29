"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    href: "/#finder",
    label: "추천 받기",
  },
  {
    href: "/how-to-choose",
    label: "추천 기준",
  },
  {
    href: "/buying-guides",
    label: "구매 가이드",
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-[1.3rem] tracking-[0.16em] text-[var(--ink)] sm:text-[1.5rem]"
          onClick={() => setIsOpen(false)}
        >
          Notebook Atelier
        </Link>

        <nav className="hidden items-center gap-2 text-sm text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === "/#finder" ? "primary-link px-4 py-2 text-sm" : "pill-link px-4 py-2"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="menu-button"
            aria-expanded={isOpen}
            aria-label="메뉴 열기"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-black/6 bg-[rgba(255,255,255,0.88)] px-4 py-3 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[18px] border border-black/8 bg-white/70 px-4 py-3 text-sm text-[var(--ink)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
