import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Dive Charters",
  description:
    "Dive charters from Fremantle, Hillarys, and Mindarie Marina to Rottnest Island and Perth's best dive sites. Double dive packages from $130.",
};

const charters = [
  {
    name: "Marmion Marine Park",
    subtitle: "Departing Mindarie Marina",
    price: "$130.00",
    img: "https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=800&q=80",
    description:
      "Departing Mindarie Marina, explore the local reefs of the Marmion Marine Park. Abundant swim-throughs, fish life and crayfish! Departing 8am and return midday after completing 2 dives. Departing 7 days a week.",
    highlights: [
      "2 dives included",
      "Departs 8:00am, returns midday",
      "7 days a week",
      "Call the shop to book",
    ],
  },
  {
    name: "Rottnest Island – Double Dive",
    subtitle: "Departing Fremantle",
    price: "from $175",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    description:
      "Dive Charters depart from Fremantle every weekend for awesome boat dives at Rottnest Island. Come face to face with Perth's most spectacular marine life. All certification levels welcome.",
    highlights: [
      "Departs Fremantle 8:00am",
      "Returns approximately 3:30pm",
      "Catered lunch included",
      "Endless tea and coffee",
      "Rottnest Island Reserve waters admission",
      "Snorkellers and day-trippers welcome",
    ],
  },
  {
    name: "Opera House (Shark Cave)",
    subtitle: "West End, Rottnest Island",
    price: "from $175",
    img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
    description:
      "The west end of Rottnest Island delivers a spectacular cave with the chance of seeing Grey Nurse Sharks. The sharks use this cave to rest during the day. A bucket-list dive for any Perth diver.",
    highlights: [
      "Grey Nurse Sharks resting in cave",
      "Spectacular cave formation",
      "West end of Rottnest",
      "Double dive charter",
    ],
  },
  {
    name: "Key Biscayne Oil Rig",
    subtitle: "Lancelin",
    price: "Call for pricing",
    img: "https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=800&q=80",
    description:
      "The west end of Rottnest Island — not for the faint hearted or ill-experienced. This sunken oil rig is a spectacular dive! The bottom lies at 40 metres and the shallowest point is 26 metres. So much marine life has made the rig home, including massive Grey Nurse Sharks.",
    highlights: [
      "Bottom at 40 metres",
      "Shallowest point: 26 metres",
      "Massive Grey Nurse Sharks",
      "Advanced certification required",
      "One of the best dives on the west coast",
    ],
  },
  {
    name: "Lena Wreck",
    subtitle: "Bunbury",
    price: "Call for pricing",
    img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80",
    description:
      "Explore the Lena Wreck off Bunbury. A thrilling wreck dive with abundant marine life. Contact the shop for current pricing and available dates.",
    highlights: [
      "Wreck diving experience",
      "Off Bunbury",
      "Diverse marine life",
      "Contact shop for dates",
    ],
  },
];

const included = [
  "Catered lunch (including vegetarian options, vegan on request)",
  "Endless tea and coffee",
  "Snacks",
  "Rottnest Island Reserve waters admission fee",
  "Snorkellers and day-trippers welcome",
];

export default function ChartersPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt="Dive boat at Rottnest Island"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Get underwater
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Dive charters
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Our fast, purpose-built dive charter vessel leaves from Fremantle,
            Hillarys, or Mindarie Marina every weekend for Perth&apos;s best
            dive sites.
          </p>
        </div>
      </section>

      {/* Rottnest includes */}
      <section className="py-12 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4 text-center">
            What&apos;s included on Rottnest day charters
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-blue-600/50 rounded-full px-4 py-2 text-sm text-white"
              >
                <CheckCircleIcon className="w-4 h-4 text-blue-200 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-center text-blue-200 text-xs mt-4">
            Excludes scuba equipment hire. Equipment hire available from{" "}
            <strong>$70/day</strong> (head to toe).
          </p>
        </div>
      </section>

      {/* Charters list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {charters.map((c, i) => (
              <div
                key={c.name}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="relative h-72 rounded-lg overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {c.name}
                      </h2>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                        <MapPinIcon className="w-4 h-4 text-blue-600" />
                        {c.subtitle}
                      </div>
                    </div>
                    <div className="flex-shrink-0 bg-blue-50 text-blue-700 font-bold text-lg px-4 py-2 rounded-lg">
                      {c.price}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {c.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircleIcon className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white font-semibold text-sm rounded hover:bg-blue-800 transition-colors"
                  >
                    Book this charter
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              Important
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>
                Divers <strong>must</strong> present their Dive Certification
                Card or Temporary Dive Card on the morning of the charter to be
                permitted to board the vessel.
              </li>
              <li>
                Charter is dependent on numbers and weather conditions.
              </li>
              <li>
                <CurrencyDollarIcon className="w-4 h-4 inline mr-1" />
                Equipment hire available: head-to-toe from $70.00 for the day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Ready to get wet?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Book your next dive
          </h2>
          <p className="text-blue-200 mb-10 max-w-lg mx-auto">
            Call us on (08) 9240 6662 or send us a message to book your spot.
            Weekends fill fast.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded hover:bg-blue-50 transition-colors"
          >
            Contact us to book
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
