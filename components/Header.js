"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Mark from "./Mark";

const links = [
  { href: "/inventory", label: "Inventory" },
  { href: "/brands", label: "Brands" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const header = document.querySelector("[data-site-header]");
    if (!header || !onHome) return undefined;

    const onScroll = () => {
      header.toggleAttribute("data-scrolled", window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useLayoutEffect(() => {
    return () => setOpen(false);
  }, []);

  return (
    <header
      data-site-header
      className={`site-header fixed inset-x-0 top-0 z-40 h-[var(--header-h)] text-ivory ${
        onHome && !open ? "" : "is-solid"
      }`}
    >
      <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <Link href="/" aria-label="Velocity Motors, home" onClick={() => setOpen(false)}>
          <Mark compact />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.68rem] tracking-[0.22em] uppercase ${
                  active ? "text-ivory" : "text-silver hover:text-ivory"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/contact#enquiry" className="btn btn-ghost hidden px-4 sm:inline-flex">
            Enquire
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`block h-px bg-ivory transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px bg-ivory transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="fixed inset-0 top-[var(--header-h)] z-40 flex flex-col bg-obsidian px-6 py-8 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-display text-4xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#enquiry"
            onClick={() => setOpen(false)}
            className="btn btn-light mt-8 w-full"
          >
            Enquire
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
