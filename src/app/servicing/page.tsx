import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Dive Equipment Servicing",
  description:
    "Factory-trained dive equipment servicing in Perth. Regulators, BCDs, hydrostatic testing, Nitrox fills and air fills. 3-month warranty on all work.",
};

const brands = [
  "Aqualung", "Apeks", "Oceanic", "Mares", "Cressi", "Atomic",
  "Scubapro", "Tusa", "Hollis", "Zeagle", "OceanPro", "Sherwood",
  "Genesis",
];

const services = [
  {
    name: "Regulator Servicing",
    price: "$105.00 plus parts",
    note: "Includes First and Second Stages, Gauges and LP Inflator Hose",
    featured: true,
  },
  {
    name: "BCD Service",
    price: "$35.00 plus parts",
    note: "",
    featured: false,
  },
  {
    name: "Hydrostatic Tests",
    price: "$35.00",
    note: "Includes fill",
    featured: false,
  },
  {
    name: "Tank Valve Service",
    price: "$15.00",
    note: "",
    featured: false,
  },
  {
    name: "AIR 2 Service",
    price: "$48.50",
    note: "",
    featured: false,
  },
  {
    name: "Computer Batteries",
    price: "See note",
    note: "Depends on model as costs vary significantly",
    featured: false,
  },
  {
    name: "Air Fills",
    price: "$7.00",
    note: "With fill card. Standard 12.2 steel or 11.5 Aluminium tank. High quality air. Prices vary by cylinder size.",
    featured: false,
  },
  {
    name: "Nitrox Fills",
    price: "from $12.95",
    note: "Nitrox Membrane — can be put into non O2-clean cylinders",
    featured: false,
  },
];

const guarantees = [
  "3-month warranty on all servicing work",
  "Ultrasonic cleaning baths",
  "Authorised manufacturer replacement parts",
  "Fully trained technicians",
  "Approved Hydrostatic Test Station on site",
  "State of the art Nitrox Membrane",
];

export default function ServicingPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521673252667-e05da380b252?w=1920&q=80"
            alt="Dive equipment servicing"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Keep your gear in perfect condition
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Dive equipment servicing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Factory-trained technicians servicing all major brands. Ultrasonic
            cleaning, hydrostatic testing, Nitrox membrane and air fills all
            under one roof.
          </p>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="py-10 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-6 h-6 text-blue-200" />
            <h2 className="text-white font-bold text-lg">
              Servicing guarantee
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {guarantees.map((g) => (
              <div
                key={g}
                className="flex items-center gap-2.5 text-sm text-blue-100"
              >
                <CheckCircleIcon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">
            Brands we service
          </p>
          <div className="flex flex-wrap gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded"
              >
                {b}
              </span>
            ))}
            <span className="bg-gray-100 text-gray-500 text-sm px-3 py-1.5 rounded">
              + all other major brands
            </span>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Service rates
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                * Charges may vary from time to time. Check with the store for
                up to date pricing.
              </p>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3.5 font-semibold text-gray-700">
                        Service
                      </th>
                      <th className="text-right px-5 py-3.5 font-semibold text-gray-700">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s, i) => (
                      <tr
                        key={s.name}
                        className={`border-b border-gray-100 last:border-0 ${
                          s.featured ? "bg-blue-50" : ""
                        } ${i % 2 === 0 && !s.featured ? "bg-white" : !s.featured ? "bg-gray-50/50" : ""}`}
                      >
                        <td className="px-5 py-4">
                          <div
                            className={`font-medium ${
                              s.featured ? "text-blue-900" : "text-gray-900"
                            }`}
                          >
                            {s.name}
                            {s.featured && (
                              <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-semibold">
                                Most popular
                              </span>
                            )}
                          </div>
                          {s.note && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {s.note}
                            </div>
                          )}
                        </td>
                        <td
                          className={`px-5 py-4 text-right font-semibold tabular-nums ${
                            s.featured ? "text-blue-700" : "text-gray-900"
                          }`}
                        >
                          {s.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Side info */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  Nitrox membrane
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  We have a state of the art Nitrox Membrane which means we can
                  pump unlimited amounts of Enriched Air into standard
                  cylinders. No need to have cylinders cleaned. Cost for an
                  Enriched Air fill is only{" "}
                  <strong>$12.95</strong> (conditions apply).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Hydrostatic testing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hydrostatic Testing is carried out on an approved testing
                  station and all work is done in accordance with Australian
                  Standards. Station 616 on site for prompt tank testing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Air fills
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  High quality air fills from{" "}
                  <strong>$7.00</strong> with fill card. Standard 12.2 steel or
                  11.5 aluminium tank. Prices vary depending on cylinder size.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition-colors text-sm w-full"
              >
                Book your service
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
