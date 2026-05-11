import type { Metadata } from "next";
import Image from "next/image";
import { TrophyIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 1993, Diving Frontiers is Perth's premier SSI Instructor Training Centre. Meet the team of experienced diving instructors.",
};

const awards = [
  "Oceanic Dealer of the Year – Western Australia 2003",
  "Oceanic Dealer of the Year – Western Australia 2004",
  "Oceanic Dealer of the Year – Western Australia 2005",
  "Oceanic Dealer of the Year – Western Australia 2006",
  "Oceanic Dealer of the Year – Australia 2007",
  "Oceanic Dealer of the Year – Australia 2008",
  "Oceanic Dealer of the Year – Australia 2009",
  "Oceanic Dealer of the Year – Western Australia 2010",
  "Oceanic Dealer of the Year – Western Australia 2011",
  "Oceanic Dealer of the Year – Western Australia 2012",
  "Oceanic Dealer of the Year – Western Australia 2013",
];

const staff = [
  {
    name: "Darren Beadle",
    role: "Owner / Manager / SSI Instructor",
    bio: "Darren has been diving for almost 20 years in many parts of Australia including WA, Queensland, New South Wales, Victoria and South Australia. He has also experienced diving in the UK, Vanuatu and Fiji. Qualified as an SSI and PADI Instructor in December 2002, he has worked for a number of different dive operations in Perth. Darren joined the team at Diving Frontiers in 2004 and worked closely with Diving Frontiers founder, Glenn Bailey, before eventually taking over the reigns as Owner in 2017.",
    favDives: [
      "SS President Coolidge and Million Dollar Point, Vanuatu",
      "SS Yongala, Townsville",
      "Navy Pier and Muiron Islands, Exmouth",
    ],
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Simon Humphreys",
    role: "Shop Manager / SSI Instructor Trainer / Service Technician",
    bio: "Simon has worked overseas for several years at several busy diving organisations, gaining a significant amount of experience. Prior to returning home to Perth, Simon was Trip Director on Spirit of Freedom, a 5 Star liveaboard vessel based in Cairns, running trips to the Northern Ribbon Reefs and Osprey Reef in the Coral Sea. He has also worked on the Sunshine Coast, Hamilton Island and the Mackerel Islands. Like everyone at Diving Frontiers, Simon is passionate about diving and the marine environment.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Hannah Donnelly",
    role: "SSI Instructor",
    bio: "Hannah has grown up in the water and was the first graduate of our Instructor Training Centre. She is obsessed with sharks and coral, holds a Bachelor in Marine Science and is a big advocate for conservation. Her fun loving, bubbly personality endears her to all her students. During her Instructor Examination, she received a special commendation from her Instructor Examiner, who said that Hannah's performance and marks during the IE were some of the best he had ever observed.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1494790108755-2616b332c59b?w=400&q=80",
  },
  {
    name: "Grace Chesky",
    role: "SSI Instructor",
    bio: "Grace's love for diving began in 2012 on Australia's East Coast. She loved the colourful corals, the abundant fish life and the fact that diving allowed her to explore an amazing new world. She describes diving as meditation and enjoys the peaceful quietness her diving brings. Grace studied Marine Science, currently works at AQWA and lists Rottnest Island, Mindarie and Centaur Reef as some of her top dives.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Helaina Wright",
    role: "SSI and PADI Instructor",
    bio: "Helaina has been diving since she was in primary school. She is always excited to dive, loves sharing her knowledge and passion for diving and loves all the marine life she gets to hang out with. Along with diving, Helaina's other passion is her martial arts — she has competed in many kickboxing tournaments and won State and National Jiu Jitsu titles. Her most memorable dive is Castle Rock in Komodo.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Dario Carpenito",
    role: "Freediving Instructor",
    bio: "Dario's deepest dive to date is a 44m Freedive and his longest breath hold is 5 minutes 30 seconds. He has experienced Freediving in Italy, Indonesia, Sri Lanka and Australia and was taught by French multi-record holder Yoram Zekri. He has trained in Sardinia with the legendary Umberto Pelizzari and some of the best Apnea Instructors in Italy.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Carmen Reidy",
    role: "SSI and PADI Instructor",
    bio: "Carmen has been a Dive Instructor since 2012. She worked full time out of Hamilton Island, then moved to Cairns and worked on the world renowned liveaboard vessel Spirit of Freedom. She also worked a season on the Ningaloo Reef in 2015 on a liveaboard called Shore Thing. Carmen says the best part about diving is always finding or seeing something new — you just never know when you're going to see something you haven't seen before.",
    favDives: [],
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative min-h-[420px] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80"
            alt="Underwater diving scene"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Our story
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            About Diving Frontiers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Established in 1993 and one of the leading scuba diving stores in
            Perth, WA.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our shop
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Diving Frontiers was established in 1993 and is one of the
                  leading scuba diving stores in Perth, WA. Originally developed
                  to promote scuba diving education at an affordable cost, with
                  the emphasis on the fun of diving, whilst maintaining high
                  training standards.
                </p>
                <p>
                  Over the last 30 years, the business has built up a large team
                  of professional and experienced Instructors and Staff, who all
                  share the passion of diving. Today, we still offer some of the
                  most affordable scuba diving courses from beginner, through to
                  Divemaster and all the way up to Instructor.
                </p>
                <p>
                  The Shop has a fantastic selection of very competitively priced
                  dive equipment, from quality brands such as Mares, Cressi and
                  Oceanic, along with one of the best selections of Spearfishing
                  and Freediving equipment in Perth.
                </p>
                <p>
                  We have a large service department, using cutting edge
                  ultrasonic cleaning machines and genuine servicing parts, with
                  all servicing carried out by fully trained Technicians. All our
                  servicing work comes with a guarantee. We also have an approved
                  Hydrostatic Test Station on site, as well as an Enriched Air
                  Nitrox Membrane.
                </p>
                <p>
                  The shop has achieved the rating of SSI Instructor Training
                  Centre, one of the highest professional level ratings in the
                  Industry and is also the{" "}
                  <strong>only Mares/SSI Pro Dealer in Perth.</strong>
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521673252667-e05da380b252?w=800&q=80"
                alt="Diving Frontiers shop interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrophyIcon className="w-7 h-7 text-blue-700" />
            <h2 className="text-3xl font-bold text-gray-900">Awards</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Previously, the shop has been recognised as the Oceanic Dealer of
            the Year for Western Australia and Australia across many consecutive
            years. Few dive shops in Perth can boast such an impressive and
            consistent record.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {awards.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100"
              >
                <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">
              The team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the Diving Frontiers staff
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Our shop has the most experienced Diving Instructors in Perth. They
              have certified thousands of divers, but still have a real passion
              for teaching and ensuring students have an enjoyable time.
            </p>
          </div>
          <div className="space-y-12">
            {staff.map((person, i) => (
              <div
                key={person.name}
                className={`grid lg:grid-cols-4 gap-8 items-start ${
                  i > 0 ? "pt-12 border-t border-gray-100" : ""
                }`}
              >
                <div className="lg:col-span-1">
                  <div className="relative w-32 h-32 lg:w-full lg:h-48 rounded-lg overflow-hidden">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-blue-700 font-medium text-sm mb-3">
                    {person.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  {person.favDives.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        Most memorable dives:
                      </p>
                      <ul className="space-y-1">
                        {person.favDives.map((d) => (
                          <li
                            key={d}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
