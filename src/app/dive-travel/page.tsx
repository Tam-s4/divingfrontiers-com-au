import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Dive Travel",
  description:
    "Dive travel trips organised by Diving Frontiers. Raja Ampat, Komodo, Great Barrier Reef, Truk Lagoon, Vanuatu and more. Group trips for all levels.",
};

const destinations = [
  {
    name: "Raja Ampat, Indonesia",
    region: "Indonesia",
    status: "Upcoming",
    statusColor: "bg-green-100 text-green-700",
    img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
    desc: "Widely considered the most biodiverse marine environment on earth. Drift dives through schools of fish, stunning coral gardens and the chance of encountering manta rays, sharks and dugong.",
  },
  {
    name: "Komodo Liveaboard",
    region: "Indonesia",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=800&q=80",
    desc: "Home to Komodo dragons above water and world-class drift diving below. The Komodo National Park is one of the diving world's most coveted destinations.",
  },
  {
    name: "Mabul, Borneo",
    region: "Malaysia",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    desc: "The macro diving capital of the world. Mabul is famous for muck diving with incredible critters — pygmy seahorses, frogfish, nudibranchs and more hidden in the sand and rubble.",
  },
  {
    name: "East Bali Dive Safari",
    region: "Indonesia",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80",
    desc: "Explore the cooler, nutrient-rich waters of East Bali. USS Liberty wreck at Tulamben, Nusa Penida's crystal bay, and the spectacular Manta Point.",
  },
  {
    name: "Nusa Penida, Bali",
    region: "Indonesia",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&q=80",
    desc: "Famous for the Mola Mola (Ocean Sunfish) and Manta Rays. Nusa Penida offers dramatic underwater topography and some of the most exciting big animal encounters in Bali.",
  },
  {
    name: "Espiritu Santo, Vanuatu",
    subtitle: "including the SS President Coolidge Wreck",
    region: "Pacific",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=800&q=80",
    desc: "Home to the SS President Coolidge, one of the largest and most accessible wreck dives in the world. This WWII troop carrier sits in shallow enough water for recreational divers.",
  },
  {
    name: "Spirit of Freedom Liveaboard",
    subtitle: "Great Barrier Reef",
    region: "Australia",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1521673252667-e05da380b252?w=800&q=80",
    desc: "Australia's iconic Great Barrier Reef aboard the Spirit of Freedom liveaboard. Northern Ribbon Reefs and Osprey Reef in the Coral Sea. World-class diving in pristine conditions.",
  },
  {
    name: "Truk Lagoon, Micronesia",
    region: "Pacific",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    desc: "The wreck diving capital of the world. Truk Lagoon holds over 60 Japanese warships and aircraft from WWII, now transformed into stunning artificial reefs teeming with life.",
  },
  {
    name: "Solomon Islands",
    region: "Pacific",
    status: "Date TBA",
    statusColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    desc: "Untouched reefs, WWII wrecks and some of the most remote diving in the Pacific. The Solomon Islands offer world-class visibility and diversity without the crowds.",
  },
  {
    name: "Albany Deep & Wreck",
    subtitle: "Long Weekend",
    region: "WA, Australia",
    status: "Enquire",
    statusColor: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    desc: "Explore the deep reefs and WWII wrecks around Albany on WA's south coast. A long weekend trip that's perfect for intermediate to advanced divers.",
  },
];

export default function DiveTravelPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=1920&q=80"
            alt="Tropical dive destination"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Explore the world
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Dive travel
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Group dive trips to the world&apos;s best underwater destinations.
            Led by our experienced Diving Frontiers instructors.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <GlobeAltIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <p className="text-gray-700">
            Travelling with Diving Frontiers means you dive with people who know
            you. Our group trips are organised, affordable and fun — led by
            familiar faces from your local dive shop. Contact us to find out
            about confirmed upcoming trips and to register your interest.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-48">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold uppercase tracking-widest bg-[#0f172a]/80 text-blue-300 px-3 py-1 rounded-full backdrop-blur-sm">
                      {d.region}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{d.name}</h3>
                      {d.subtitle && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {d.subtitle}
                        </p>
                      )}
                    </div>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${d.statusColor}`}
                    >
                      {d.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {d.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-blue-700 text-sm font-semibold hover:text-blue-800 transition-colors"
                  >
                    Register interest
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Interested in a trip?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Contact us to find out about confirmed trip dates and to register
            your interest. We&apos;ll let you know when bookings open.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded transition-colors"
          >
            Register your interest
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
