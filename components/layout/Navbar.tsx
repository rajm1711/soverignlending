"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!isTransparent
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/60 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Sovereign Lending Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 rounded-sm object-cover" 
            />
            <span
              className={`font-semibold text-lg tracking-tight transition-colors duration-500 ${!isTransparent ? "text-obsidian" : "text-white"
                }`}
            >
              {COMPANY.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold-500 ${pathname === link.path
                    ? "text-gold-500"
                    : !isTransparent
                      ? "text-graphite"
                      : "text-white/90"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className={`text-sm transition-colors ${!isTransparent ? "text-graphite hover:text-obsidian" : "text-white/90 hover:text-white"
                }`}
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-obsidian text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gold-500 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${!isTransparent || mobileOpen ? "text-obsidian" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100">
          <div className="px-6 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 text-base font-medium transition-colors ${pathname === link.path ? "text-gold-500" : "text-graphite"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-100">
              <Link
                href="/contact"
                className="block w-full text-center bg-obsidian text-white py-3 rounded-lg text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}