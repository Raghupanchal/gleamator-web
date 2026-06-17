import { MonitorSmartphone, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import AnimatedSection from "./AnimatedSection";

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
        {/* Mobile decorative background wrapper */}
        <div className="services-wrapper -mt-24 relative z-10 max-w-7xl mx-auto">
export default function ServicesSection() {
            /* Mobile-only decorative bubbles and soft gradient */
            @media (max-width: 640px) {
                overflow: visible;
              }

              .services-bubble {
                position: absolute;
                border-radius: 9999px;
                filter: blur(8px);
                opacity: 0.9;
                transform: translate3d(0,0,0);
                animation: floaty 6s ease-in-out infinite;
                pointer-events: none;
              }

              .services-bubble.small { width: 48px; height: 48px; background: rgba(250,204,21,0.08); left: 8%; top: 8%; }
              .services-bubble.med { width: 84px; height: 84px; background: rgba(234,88,12,0.06); right: 10%; top: 12%; }
              .services-bubble.large { width: 120px; height: 120px; background: rgba(47,59,128,0.05); left: 40%; bottom: -10px; }

              @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
            }
          `}</style>

          <span className="services-bubble small" aria-hidden />
          <span className="services-bubble med" aria-hidden />
          <span className="services-bubble large" aria-hidden />

// export default ServicesSection;
            <div className="col-span-3 text-center py-8">Services placeholder — testing build</div>
          </div>
      </div>
    </section>
  );
};

export default ServicesSection;