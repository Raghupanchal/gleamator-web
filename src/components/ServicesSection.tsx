import { MonitorSmartphone, DollarSign, Briefcase } from "lucide-react";
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
    description: "We design, implement, and maintain the technology your business runs on from networks to software to day-to-day support.",
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

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <div
                className="bg-card rounded-lg shadow-lg p-8 text-center border-t-4 border-t-navy hover:shadow-xl transition-shadow group h-full cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-muted flex items-center justify-center group-hover:border-accent transition-colors">
                  <service.icon className="w-8 h-8 text-navy-light" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
