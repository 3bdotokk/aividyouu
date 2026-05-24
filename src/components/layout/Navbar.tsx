"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
              Ai
            </div>
            <span className="text-xl font-bold text-white">
              Aividyou
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            
            {/* Categories Dropdown */}
            <div className="relative" onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)}>
              <button className="px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1">
                Categories
                <svg className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 glass rounded-xl p-2 shadow-2xl"
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${cat.slug}/`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">{cat.name}</p>
                          <p className="text-xs text-dark-400">{cat.description}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/ai-video-tools/">Video Tools</NavLink>
            <NavLink href="/ai-image-tools/">Image Tools</NavLink>
            <NavLink href="/free-tools/">Free Tools</NavLink>
            <NavLink href="/blog/">Blog</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <Link
              href="/#search"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-dark-400 text-sm hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search tools...</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-white/10 text-xs">⌘K</kbd>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/5 bg-dark-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
              <MobileLink href="/ai-video-tools/" onClick={() => setMobileOpen(false)}>AI Video Tools</MobileLink>
              <MobileLink href="/ai-image-tools/" onClick={() => setMobileOpen(false)}>AI Image Tools</MobileLink>
              <MobileLink href="/ai-productivity-tools/" onClick={() => setMobileOpen(false)}>AI Productivity</MobileLink>
              <MobileLink href="/free-tools/" onClick={() => setMobileOpen(false)}>Free Tools</MobileLink>
              <MobileLink href="/blog/" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
              <MobileLink href="/about/" onClick={() => setMobileOpen(false)}>About</MobileLink>
              <MobileLink href="/contact/" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-dark-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
