"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const hours = [
  { days: "Monday to Thursday", time: "9:00am – 5:00pm" },
  { days: "Friday and Saturday", time: "8:30am – 5:30pm" },
  { days: "Sunday", time: "9:00am – 3:00pm" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=1920&q=80"
            alt="Contact Diving Frontiers"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Contact us
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Come in and talk to one of our friendly staff. You&apos;ll be
            surprised what deals we can offer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Store information
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-700">
                      <strong>Diving Frontiers</strong>
                      <br />
                      Unit 7, 89 Erindale Road
                      <br />
                      Balcatta, WA 6021
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-700">
                      <a
                        href="tel:0892406662"
                        className="font-medium hover:text-blue-700 transition-colors"
                      >
                        (08) 9240 6662
                      </a>
                      <br />
                      <span className="text-sm text-gray-500">
                        Fax: (08) 9240 6214
                      </span>
                      <br />
                      <span className="text-sm text-gray-500">
                        After hours:{" "}
                        <a href="tel:0405576078" className="hover:text-blue-700">
                          0405 576 078
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:mail@divingfrontiers.com.au"
                      className="text-gray-700 font-medium hover:text-blue-700 transition-colors"
                    >
                      mail@divingfrontiers.com.au
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Business hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-gray-500">{h.days}</span>
                      <span className="font-medium text-gray-800">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-lg overflow-hidden border border-gray-200 h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.025764834879!2d115.82657!3d-31.867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad3ae4e92c5%3A0x1!2s89+Erindale+Rd%2C+Balcatta+WA+6021!5e0!3m2!1sen!2sau!4v1699000000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Diving Frontiers location"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircleIcon className="w-14 h-14 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message sent
                  </h3>
                  <p className="text-gray-500">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.name
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                        errors.message
                          ? "border-red-400 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Tell us what you're interested in — a course, charter, servicing or general enquiry..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded px-4 py-3">
                      Something went wrong. Please try again or call us directly
                      on (08) 9240 6662.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded transition-colors text-sm"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
