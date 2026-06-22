import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import skillTrainingImg from "@/assets/skill training.jpg";
import itServicesImg from "@/assets/19947.jpg";
import hrServicesImg from "@/assets/hr services.jpg";

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
    <section id="services" className="bg-[#F8FAFC] py-16 md:py-24 flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 border-b border-slate-200 pb-5 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-semibold mt-1.5 uppercase tracking-wider">
              Empowering your business with specialized expertise
            </p>
          </div>
          <span className="hidden md:block text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
            Select a pathway
          </span>
        </div>
 
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            return (
              <div
                key={s.title}
                onClick={() => handleServiceClick(s.path)}
                role="button"
                tabIndex={0}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-orange-500/5 hover:border-[#FF6B00]/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-[200px] xs:h-[240px] overflow-hidden bg-white">
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`w-full h-full ${s.fit === "contain" ? "object-contain" : "object-cover"} object-center transition-transform duration-1000 ease-out group-hover:scale-105`}
                  />
                  {/* Subtle vignette on the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
 
                {/* Bottom Content Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between min-h-[240px]">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 border border-orange-100/50 px-3 py-1 rounded-full">
                        Pathway 0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                      {s.description}
                    </p>
                  </div>
 
                  {/* Action Link (Beautiful Premium Learn More Button) */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#FF6B00] to-[#FF8500] text-white text-sm font-bold rounded-xl shadow-md shadow-[#FF6B00]/10 transition-all duration-300 group-hover:from-[#E05E00] group-hover:to-[#FF6B00] group-hover:shadow-lg group-hover:shadow-[#FF6B00]/25">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;