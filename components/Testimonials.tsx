"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emeka Okafor",
    role: "Engineer, Lagos",
    route: "Lagos → Ibadan",
    avatar: "#1D4ED8",
    initials: "EO",
    stars: 5,
    text: "I used to dread the Jibowu park experience — waiting two hours for a bus to fill up, then stopping everywhere. This is just a completely different thing. I booked my seat the night before, the driver was there at 7am, and we were in Ibadan by 9:30. That's it.",
  },
  {
    name: "Adaeze Nwosu",
    role: "Civil servant, Enugu",
    route: "Enugu → Owerri",
    avatar: "#F59E0B",
    initials: "AN",
    stars: 5,
    text: "As a woman travelling alone, knowing the driver was verified and that someone had reviewed them before me made a real difference. The ride was clean, quiet, and I actually felt relaxed. That's not something I'd say about most intercity trips.",
  },
  {
    name: "Yusuf Abdullahi",
    role: "Business owner, Abuja",
    route: "Abuja → Kaduna",
    avatar: "#10B981",
    initials: "YA",
    stars: 5,
    text: "I do Abuja-Kaduna at least twice a month for business. The cost share makes sense financially, and the other passengers are always people who planned the trip — not random pickups at the roadside. It's professional travel at a reasonable price.",
  },
  {
    name: "Chisom Eze",
    role: "Student, Owerri",
    route: "Enugu → Owerri",
    avatar: "#8B5CF6",
    initials: "CE",
    stars: 5,
    text: "My parents were worried about me travelling alone. Showing them the driver's verified profile and the fact that I shared the trip details with them actually calmed them down. That peace of mind is worth a lot.",
  },
  {
    name: "Kehinde Adeyemi",
    role: "Driver, Lagos",
    route: "Lagos ↔ Ibadan",
    avatar: "#EF4444",
    initials: "KA",
    stars: 5,
    text: "I go to Ibadan every weekend to see family. I used to just absorb the fuel cost alone. Now I share the car with two or three people going the same direction and I barely spend anything on fuel. The riders are respectful and the whole thing is organised.",
  },
  {
    name: "Fatima Bello",
    role: "Nurse, Kaduna",
    route: "Abuja → Kaduna",
    avatar: "#0EA5E9",
    initials: "FB",
    stars: 5,
    text: "What I noticed most was how calm the journey was. No driver blasting music, no picking up extra people on the road, no stopping at every junction. Just Abuja to Kaduna, directly. It sounds simple but it changed everything about the experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#FFFBEB] text-[#D97706] text-xs font-semibold rounded-full mb-4">
            Early travelers
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            What people are saying
          </h2>
          <p className="text-gray-500 text-lg">
            From people who&apos;ve experienced a different kind of intercity travel.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="break-inside-avoid bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group mb-5"
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <Quote size={18} className="text-gray-100 group-hover:text-gray-200 transition-colors" />
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatar }}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{t.name}</p>
                  <p className="text-xs text-gray-400 truncate">{t.role}</p>
                </div>
                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg whitespace-nowrap">
                  {t.route}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
