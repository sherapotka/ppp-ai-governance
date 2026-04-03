"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/proposal", label: "Proposal" },
  { href: "/survey", label: "Survey Paper" },
  { href: "/methodology", label: "Methodology" },
  { href: "/analysis", label: "Analysis" },
  { href: "/findings", label: "Findings" },
  { href: "/map", label: "Map" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-primary-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            {/* Logo: three interlocking circles (PPP) over a globe grid */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* Globe outline */}
              <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              {/* Globe meridian lines */}
              <ellipse cx="18" cy="18" rx="8" ry="16" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
              <line x1="2" y1="18" x2="34" y2="18" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
              <ellipse cx="18" cy="18" rx="16" ry="6" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

              {/* Three PPP circles — interlocking Venn */}
              {/* People (blue) */}
              <circle cx="14" cy="14.5" r="7" fill="rgba(96,165,250,0.3)" stroke="rgba(147,197,253,0.8)" strokeWidth="1.2" />
              {/* Processes (amber) */}
              <circle cx="22" cy="14.5" r="7" fill="rgba(251,191,36,0.25)" stroke="rgba(252,211,77,0.8)" strokeWidth="1.2" />
              {/* Platforms (green) */}
              <circle cx="18" cy="21.5" r="7" fill="rgba(52,211,153,0.25)" stroke="rgba(110,231,183,0.8)" strokeWidth="1.2" />

              {/* Center intersection dot */}
              <circle cx="18" cy="17" r="1.8" fill="white" opacity="0.9" />

              {/* P letters */}
              <text x="11.5" y="13.5" fill="white" fontSize="5.5" fontWeight="700" fontFamily="system-ui" opacity="0.95">P</text>
              <text x="19.5" y="13.5" fill="white" fontSize="5.5" fontWeight="700" fontFamily="system-ui" opacity="0.95">P</text>
              <text x="15.5" y="23" fill="white" fontSize="5.5" fontWeight="700" fontFamily="system-ui" opacity="0.95">P</text>
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight leading-tight">
                PPP AI Governance
              </span>
              <span className="text-[10px] text-primary-300 leading-tight tracking-wide">
                Global Regulatory Survey
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary-700 text-white"
                    : "text-primary-200 hover:bg-primary-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-primary-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  pathname === link.href
                    ? "bg-primary-700 text-white"
                    : "text-primary-200 hover:bg-primary-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
