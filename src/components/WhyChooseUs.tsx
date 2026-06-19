import { Award, Layers, Settings, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import whyChooseImg from "@/assets/whychooseglemator.png";

const reasons = [
  { icon: Award, title: "Practical Experience", description: "We focus on real-world skills that are useful in today's jobs." },
  { icon: Layers, title: "All Services in One Place", description: "Training, IT support, HR services, and career programs under one roof." },
  { icon: Settings, title: "Flexible Solutions", description: "Our services are customized to match your needs and growth plans." },
  { icon: Target, title: "Results That Matter", description: "We help people and businesses achieve clear, measurable outcomes." },
];


const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      {/* Background Image with Light Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={whyChooseImg}
          alt="Why Choose Us Background"
          className="w-full h-full object-cover opacity-85"
        />
        {/* Soft border gradients to blend the image edges into the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-secondary opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary text-center mb-20 md:mb-32">
            Why Choose Us
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-20">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-400 h-full ring-1 ring-transparent hover:ring-accent/10">
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-[#EA580C] flex items-center justify-center text-white shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                <div className="mt-6 flex items-center justify-center">
                  <span className="inline-block w-10 h-1 bg-accent rounded-full opacity-90" />
                </div>
              </div>
            </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
