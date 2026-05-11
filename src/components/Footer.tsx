import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Charters", href: "/charters" },
  { label: "Scuba Diving Courses", href: "/courses" },
  { label: "Dive Travel", href: "/dive-travel" },
  { label: "Servicing", href: "/servicing" },
  { label: "Contact Us", href: "/contact" },
];

const courses = [
  { label: "Open Water Diver", href: "/courses" },
  { label: "Advanced Adventurer", href: "/courses" },
  { label: "Stress and Rescue", href: "/courses" },
  { label: "Divemaster Program", href: "/courses" },
  { label: "SSI Instructor Training", href: "/courses" },
  { label: "Freediving Courses", href: "/courses" },
  { label: "Technical Diving", href: "/courses" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">DF</span>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Diving Frontiers
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Perth&apos;s premier SSI Instructor Training Centre. Established
              1993. The only Mares/SSI Pro Dealer in Perth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/divingfrontiers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/divingfrontiers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Store information
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2.5">
                <MapPinIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>
                  Unit 7, 89 Erindale Road
                  <br />
                  Balcatta, Perth WA 6021
                </span>
              </li>
              <li className="flex gap-2.5">
                <PhoneIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:0892406662"
                    className="hover:text-blue-400 transition-colors"
                  >
                    (08) 9240 6662
                  </a>
                  <br />
                  <span className="text-xs text-gray-500">
                    After hours: 0405 576 078
                  </span>
                </div>
              </li>
              <li className="flex gap-2.5">
                <EnvelopeIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:mail@divingfrontiers.com.au"
                  className="hover:text-blue-400 transition-colors"
                >
                  mail@divingfrontiers.com.au
                </a>
              </li>
              <li className="pt-1 text-xs leading-relaxed">
                <span className="text-gray-500">Mon–Thu</span> 9:00am – 5:00pm
                <br />
                <span className="text-gray-500">Fri–Sat</span> 8:30am – 5:30pm
                <br />
                <span className="text-gray-500">Sun</span> 9:00am – 3:00pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Diving Frontiers. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
