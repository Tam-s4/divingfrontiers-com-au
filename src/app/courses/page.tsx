import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Scuba Diving Courses",
  description:
    "Scuba diving courses in Perth from beginner to instructor level. SSI Open Water, Advanced, Divemaster, Instructor Training, Freediving and Technical Diving.",
};

const courses = [
  {
    name: "Scuba Diver Course",
    level: "Beginner",
    badge: "bg-green-100 text-green-700",
    img: "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=600&q=80",
    description:
      "The Scuba Diver certification is your first step into the world of scuba diving. You will learn the basics of scuba diving and earn your 12m certification. Perfect for those who want a taste of diving before committing to a full Open Water course.",
    highlights: [
      "12m depth certification",
      "Supervised dives only",
      "Upgrade to Open Water anytime",
      "SSI certified",
    ],
  },
  {
    name: "Open Water Diver",
    level: "Beginner",
    badge: "bg-green-100 text-green-700",
    img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80",
    description:
      "The most popular diving course in the world. Complete your theory via SSI e-learning in the comfort of your own home, then join us for pool and ocean sessions. You'll be certified to dive to 18m independently.",
    highlights: [
      "18m depth certification",
      "SSI e-learning theory",
      "Pool and open water sessions",
      "Internationally recognised",
    ],
  },
  {
    name: "Advanced Adventurer",
    level: "Intermediate",
    badge: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=600&q=80",
    description:
      "Take your diving further. The Advanced Adventurer course builds on your Open Water skills with guided adventure dives in specialties of your choosing — deep diving, navigation, night diving and more.",
    highlights: [
      "5 adventure dives",
      "Choose your specialties",
      "Dive to 30m",
      "Builds on Open Water skills",
    ],
  },
  {
    name: "Stress and Rescue",
    level: "Intermediate",
    badge: "bg-blue-100 text-blue-700",
    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&q=80",
    description:
      "One of the most rewarding diving courses available. Learn to recognise and manage stress in divers, and perform effective rescues. An essential qualification for any diver who dives with buddies.",
    highlights: [
      "Stress recognition and management",
      "Rescue techniques",
      "First aid integration",
      "Highly recommended for all divers",
    ],
  },
  {
    name: "Specialty Courses",
    level: "All levels",
    badge: "bg-purple-100 text-purple-700",
    img: "https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=600&q=80",
    description:
      "Expand your diving skills with specialty courses including Deep Diving, Wreck Penetration, Underwater Photography, Night and Limited Visibility, Navigation and many more.",
    highlights: [
      "Deep Diving",
      "Wreck Penetration",
      "Underwater Photography",
      "Night and Limited Visibility",
    ],
  },
  {
    name: "Refresher / Scuba Review",
    level: "Returning divers",
    badge: "bg-gray-100 text-gray-700",
    img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&q=80",
    description:
      "Haven't been in the water for a while? Our Scuba Review refreshes your skills in a controlled environment so you can get back in the water with confidence.",
    highlights: [
      "Pool session",
      "Skills review",
      "Confidence building",
      "No exam required",
    ],
  },
  {
    name: "Freediving Courses",
    level: "All levels",
    badge: "bg-cyan-100 text-cyan-700",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    description:
      "Explore the underwater world on a single breath. Our SSI Freediving courses are taught by Dario, who has freedived to 44m and trained with the legendary Umberto Pelizzari in Sardinia.",
    highlights: [
      "SSI Freediving certified",
      "Expert instruction",
      "Pool and open water",
      "Spearfishing progression",
    ],
  },
  {
    name: "Technical Diving",
    level: "Advanced",
    badge: "bg-red-100 text-red-700",
    img: "https://images.unsplash.com/photo-1521673252667-e05da380b252?w=600&q=80",
    description:
      "Go beyond recreational limits. Our Technical Diving courses include Advanced Nitrox, Decompression Procedures, Rebreather training and more. Taught by TDI/SDI certified instructors.",
    highlights: [
      "Advanced Nitrox",
      "Decompression Procedures",
      "Rebreather training",
      "TDI/SDI certified",
    ],
  },
  {
    name: "Divemaster Program",
    level: "Professional",
    badge: "bg-orange-100 text-orange-700",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    description:
      "The first professional level of diving. The SSI Divemaster Program prepares you to lead certified divers, assist with courses, and work in the dive industry.",
    highlights: [
      "First pro rating",
      "Lead certified dives",
      "Assist with courses",
      "Work in the industry",
    ],
  },
  {
    name: "SSI Instructor Training",
    level: "Professional",
    badge: "bg-orange-100 text-orange-700",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    description:
      "Become a certified SSI Dive Instructor. Diving Frontiers is an SSI Instructor Training Centre — one of the highest professional level ratings in the industry. Train with our experienced Instructor Trainers.",
    highlights: [
      "SSI Instructor Training Centre",
      "Experienced Instructor Trainers",
      "Internationally recognised certification",
      "Teach all SSI courses",
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=1920&q=80"
            alt="Scuba diver underwater"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Learn to dive
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Scuba diving courses
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From beginner Open Water through to SSI Instructor Training. Some of
            the most affordable scuba diving courses in Perth, with lessons
            starting every week.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-gray-600 max-w-2xl">
              Are you interested in learning how to dive? Don&apos;t know where
              to start? We offer some of Perth&apos;s most affordable scuba
              courses — from beginner through to Divemaster and Instructor
              Training, plus SSI Freediving and Technical Diving.
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition-colors text-sm"
            >
              Book a course
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, i) => (
              <div
                key={course.name}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i > 0 ? "pt-16 border-t border-gray-100" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={course.img}
                      alt={course.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${course.badge}`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {course.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm"
                  >
                    Enquire about this course
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Ready to dive?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Start your diving journey today
          </h2>
          <p className="text-blue-200 mb-10 max-w-lg mx-auto">
            Courses run weekly — mid-week and weekend options available. Come
            in and talk to our team about what suits you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded hover:bg-blue-50 transition-colors"
            >
              Contact us to book
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
