"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Charters", href: "/charters" },
  { label: "Courses", href: "/courses" },
  { label: "Dive Travel", href: "/dive-travel" },
  { label: "Servicing", href: "/servicing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0f172a] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="text-gray-400 text-xs">
            Unit 7, 89 Erindale Road, Balcatta, Perth WA 6021
          </span>
          <a
            href="tel:0892406662"
            className="flex items-center gap-1.5 text-blue-400 font-medium text-xs hover:text-blue-300 transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            (08) 9240 6662
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">DF</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900 text-base tracking-tight">
                Diving Frontiers
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                SSI Instructor Training Centre
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded hover:bg-blue-800 transition-colors"
            >
              Book a Course
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded text-center hover:bg-blue-800 transition-colors"
            >
              Book a Course
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
