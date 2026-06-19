import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import skillTrainingImg from "@/assets/skill training.jpg";
import itServicesImg from "@/assets/19947.jpg";
import hrServicesImg from "@/assets/hr services.jpg";
=======
// import AnimatedSection from "./AnimatedSection";
>>>>>>> 0e44b9209dc35e62cc921fd96155179bed67e4bb

const services = [
  {
    title: "Skill Development & Training.",
    description: "We offer hands-on internships that turn learning into real-world skills and career readiness.",
    path: "/services/skill-development",
    image: skillTrainingImg,
    fit: "contain"
  },
  {
    title: "IT Services architecture.",
    description: "We design, implement, and maintain the technology your business runs on—from networks to software to day-to-day support.",
    path: "/services/it-services",
    image: itServicesImg,
    fit: "cover"
  },
  {
    title: "HR Services.",
    description: "We help you find the right people, streamline HR processes, and build aligned, motivated teams that drive performance and long-term growth.",
    path: "/services/hr-services",
    image: hrServicesImg,
    fit: "cover"
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
<<<<<<< HEAD
    <section id="services" className="bg-[#F4F4F6] py-24 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-[1400px]">
=======
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile decorative background wrapper */}
        <div className="services-wrapper -mt-24 relative z-10 max-w-7xl mx-auto">
export default function ServicesSection() {
            /* Mobile-only decorative bubbles and soft gradient */
            @media (max-width: 640px) {
                overflow: visible;
              }
>>>>>>> 0e44b9209dc35e62cc921fd96155179bed67e4bb

        {/* Section Header - Gap Fixed here (reduced padding and margins) */}
        <div className="mb-10 border-b border-gray-300 pb-4 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <span className="hidden md:block text-gray-500 font-bold text-xs uppercase tracking-[0.15em]">
            Select a pathway
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => {

<<<<<<< HEAD
            return (
              <div
                key={s.title}
                onClick={() => handleServiceClick(s.path)}
                role="button"
                tabIndex={0}
                className="group flex flex-col bg-white rounded-none border border-gray-200/50 shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 hover:border-[#FF6B00]/30 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-[240px] overflow-hidden bg-white rounded-none">
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full h-full ${s.fit === "contain" ? "object-contain" : "object-cover"} object-center transition-transform duration-1000 ease-out group-hover:scale-110`}
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between min-h-[220px]">
                  <div className="mb-6">
                    <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs lg:text-sm leading-relaxed text-gray-600 font-medium">
                      {s.description}
                    </p>
                  </div>

                  {/* Action Link (Beautiful Premium Learn More Button) */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#FF6B00] text-white text-sm font-bold rounded-none shadow-sm transition-all duration-300 group-hover:bg-[#E05E00] group-hover:shadow-[0_4px_20px_rgba(255,107,0,0.35)]">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
=======
              @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
            }
          `}</style>

          <span className="services-bubble small" aria-hidden />
          <span className="services-bubble med" aria-hidden />
          <span className="services-bubble large" aria-hidden />

// export default ServicesSection;
            <div className="col-span-3 text-center py-8">Services placeholder — testing build</div>
          </div>
>>>>>>> 0e44b9209dc35e62cc921fd96155179bed67e4bb
      </div>
    </section>
  );
};

export default ServicesSection;