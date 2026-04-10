import { MonitorSmartphone, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Skill Development & Training",
    description: "We train individuals and teams with the practical, industry-ready skills needed to perform, adapt, and excel in today's fast-evolving workplace.",
    path: "/services/skill-development",
  },
  {
    icon: DollarSign,
    title: "IT Services",
    description: "We design, implement, and maintain the technology your business runs on—from networks to software to day-to-day support.",
    path: "/services/it-services",
  },
  {
    icon: Briefcase,
    title: "HR Services",
    description: "We help you find the right people, streamline HR processes, and build aligned, motivated teams that drive performance and long-term growth.",
    path: "/services/hr-services",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 -mt-24 relative z-10 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <div
                onClick={() => handleServiceClick(service.path)}
                className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-8 lg:p-10 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group h-full flex flex-col cursor-pointer border border-[#E2E8F0] hover:-translate-y-2 relative overflow-hidden"
              >
                
                {/* Decorative shape using exact hex to bypass Tailwind config issues */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF7ED] rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

                {/* Icon Container using exact hex colors */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-8 rounded-[1.25rem] bg-[#F8FAFC] flex items-center justify-center group-hover:bg-[#FFF7ED] transition-colors duration-500 shadow-sm border border-[#E2E8F0] group-hover:border-[#FDBA74]">
                  <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#334155] group-hover:text-[#EA580C] transition-colors duration-500 stroke-[1.5]" />
                </div>
                
                {/* Typography */}
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#0F172A] mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-sm lg:text-base leading-relaxed flex-grow mb-8">
                  {service.description}
                </p>

                {/* BULLETPROOF BUTTON: Forces Dark Orange text on Light Orange background */}
                <div className="mt-auto w-full">
                  <button className="w-full py-4 px-6 rounded-xl bg-[#F8FAFC] text-[#0F172A] font-bold text-sm uppercase tracking-wider border border-[#E2E8F0] flex items-center justify-center gap-3 transition-all duration-300 group-hover:border-[#EA580C] group-hover:text-[#EA580C] group-hover:bg-[#FFF7ED] shadow-sm">
                    Explore Service 
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;