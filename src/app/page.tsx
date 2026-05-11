import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { value: "1993", label: "Established" },
  { value: "30+", label: "Years experience" },
  { value: "1000s", label: "Divers trained" },
  { value: "Only", label: "Mares/SSI Pro Dealer in Perth" },
];

const steps = [
  {
    num: "01",
    title: "Choose your course",
    desc: "From a first-time Try Dive through to SSI Instructor — we have a course for every level. Courses start weekly.",
  },
  {
    num: "02",
    title: "Complete e-learning",
    desc: "SSI e-learning lets you finish the theory at home before you arrive, so you spend more time in the water.",
  },
  {
    num: "03",
    title: "Pool and open water sessions",
    desc: "Practice skills in our confined water sessions then head to Perth's premier dive sites with our instructors.",
  },
  {
    num: "04",
    title: "Certified and diving",
    desc: "Leave with an internationally recognised SSI certification and the skills to dive safely anywhere in the world.",
  },
];

const standards = [
  {
    icon: ShieldCheckIcon,
    title: "SSI Instructor Training Centre",
    desc: "Fully accredited by SSI. Our instructors hold the highest teaching qualifications available.",
  },
  {
    icon: AcademicCapIcon,
    title: "Weekly courses",
    desc: "Mid-week and weekend schedules. Never wait months for the next intake — classes run every week.",
  },
  {
    icon: SparklesIcon,
    title: "Mares/SSI Pro Dealer",
    desc: "The only authorised Mares and SSI Pro Dealer in Perth. Buy with confidence and full manufacturer warranty.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Factory-trained servicing",
    desc: "Ultrasonic cleaning, hydrostatic testing, and on-site Nitrox Membrane. All major brands serviced.",
  },
  {
    icon: MapPinIcon,
    title: "Purpose-built dive vessel",
    desc: "Weekend boat dives departing Fremantle, Hillarys and Mindarie Marina to Rottnest and local reefs.",
  },
  {
    icon: UserGroupIcon,
    title: "Price-match guarantee",
    desc: "We match any online price on equipment. No need to shop around — you'll get the best deal here.",
  },
];

const testimonials = [
  {
    quote:
      "Completed my Open Water here last year. The instructors are patient, knowledgeable and genuinely passionate. I was nervous starting but felt completely confident by the end.",
    name: "Sarah M.",
    detail: "Open Water Diver",
  },
  {
    quote:
      "Best dive shop in Perth. Darren and the team go above and beyond. Equipment advice, servicing, charters — they do it all brilliantly. Been a customer for over ten years.",
    name: "James T.",
    detail: "SSI Divemaster",
  },
  {
    quote:
      "Did the Rottnest charter and it was stunning. Well organised, great dive briefings and the gear hire is excellent value. Already booked the Oil Rig trip.",
    name: "Priya L.",
    detail: "Advanced Adventurer",
  },
];

const guides = [
  {
    category: "Dive sites",
    title: "Scuba diving in Perth: sites, conditions and local insights",
    excerpt:
      "Perth offers some of the most diverse diving in Australia — vibrant limestone reefs, historic wrecks and offshore islands within easy reach of the city.",
    href: "/dive-travel",
    img: "https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=800&q=80",
  },
  {
    category: "Charters",
    title: "Diving at Opera House Shark Cave, Rottnest Island",
    excerpt:
      "Rottnest Island's most iconic dive site. Dramatic swim-throughs, western blue devils and — if conditions align — sharks resting in the cave.",
    href: "/charters",
    img: "https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=800&q=80",
  },
  {
    category: "Courses",
    title: "Which SSI course is right for you?",
    excerpt:
      "Not sure where to start? We break down every course from Try Dive to Instructor so you can find the right path for your goals and timeline.",
    href: "/courses",
    img: "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=800&q=80",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-end overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=1920&q=85"
            alt="Diver exploring a reef in clear blue water"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Perth&apos;s SSI Instructor Training Centre — Est. 1993
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 max-w-3xl">
              The complete guide to scuba diving in Perth
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
              Diving Frontiers is Perth&apos;s most trusted destination for
              scuba diving courses, dive charters, equipment and servicing.
              Established in Balcatta since 1993.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded transition-colors text-sm"
              >
                View courses
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/charters"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded border border-white/25 transition-colors text-sm backdrop-blur-sm"
              >
                Book a charter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-10 text-center first:pl-0 last:pr-0">
                <div className="text-4xl font-bold text-gray-900 mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              How it works
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
              Learning to dive in Perth is easy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-7xl font-bold text-gray-100 leading-none mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-10 border-t border-gray-100">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              Browse all courses
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Heritage */}
      <section className="py-24 bg-[#0f172a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Our story
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-8">
                Three decades.
                <br />
                One passion.
                <br />
                <span className="text-blue-400">30+ years.</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                Founded in 1993 by Glenn Bailey and now led by owner Darren
                Beadle, Diving Frontiers has trained thousands of Perth divers
                — from first-time Scuba Divers to professional SSI Instructors.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We are Perth&apos;s only Mares and SSI Pro Dealer, and the only
                accredited SSI Instructor Training Centre in Western Australia.
                Our Oceanic Dealer of the Year awards (2003–2013) reflect a
                commitment to service that hasn&apos;t changed in 30 years.
              </p>
              <p className="text-gray-300 leading-relaxed mb-10">
                Whether you&apos;re after an affordable Open Water course, a
                weekend charter to Rottnest, or a full regulator service —
                you&apos;ll find Perth&apos;s most experienced dive team at
                Unit 7, 89 Erindale Road, Balcatta.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Meet the team
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[520px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=900&q=80"
                  alt="Diving Frontiers instructor with students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-6 rounded-lg shadow-2xl">
                <div className="text-4xl font-bold leading-none mb-1">11×</div>
                <div className="text-sm text-blue-200 leading-tight max-w-[130px]">
                  Oceanic Dealer of the Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diving Frontiers Standard */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Why choose us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
              The Diving Frontiers standard
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-lg">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Get underwater
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Dive charters
              </h2>
              <p className="mt-4 text-gray-500 max-w-lg">
                Our purpose-built dive charter vessel departs every weekend
                from Fremantle, Hillarys, and Mindarie Marina.
              </p>
            </div>
            <Link
              href="/charters"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors flex-shrink-0 text-sm"
            >
              All charters
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Marmion Marine Park",
                departs: "Mindarie Marina",
                price: "$130",
                desc: "Swim-throughs, abundant fish life and crayfish. 2 dives. Back by midday.",
                img: "https://images.unsplash.com/photo-1682686578456-b83c9396a9e6?w=700&q=80",
              },
              {
                name: "Rottnest Island",
                departs: "Fremantle",
                price: "from $175",
                desc: "Perth's best diving. Caves, reefs and the legendary Opera House Shark Cave.",
                img: "https://images.unsplash.com/photo-1682686578842-106a6f5b3e42?w=700&q=80",
              },
              {
                name: "Key Biscayne Oil Rig",
                departs: "Lancelin",
                price: "Call for pricing",
                desc: "Spectacular sunken oil rig at 40m. Grey Nurse Sharks call this home.",
                img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
              },
            ].map((c) => (
              <Link
                key={c.name}
                href="/charters"
                className="group block overflow-hidden rounded-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 pb-2">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{c.name}</h3>
                    <span className="text-blue-700 font-bold text-sm whitespace-nowrap">{c.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-semibold">Departs {c.departs}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              What our divers say
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
              Trusted by Perth divers for 30 years
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-lg p-8">
                <p className="text-gray-200 leading-relaxed mb-8 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Diving guides
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Built by divers, for divers
              </h2>
            </div>
            <Link
              href="/dive-travel"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors flex-shrink-0 text-sm"
            >
              All destinations
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {guides.map((g) => (
              <Link key={g.title} href={g.href} className="group block">
                <div className="relative h-52 overflow-hidden rounded-lg mb-5">
                  <Image
                    src={g.img}
                    alt={g.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.15em] mb-2">
                  {g.category}
                </p>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {g.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{g.excerpt}</p>
              </Link>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Start your diving journey today
          </h2>
          <p className="text-blue-200 max-w-lg mx-auto mb-10">
            Courses start every week. Come in and talk to our team — you&apos;ll
            be surprised what deals we can offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded hover:bg-blue-50 transition-colors"
            >
              Contact us
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-bold rounded hover:bg-blue-900 transition-colors"
            >
              Browse courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
