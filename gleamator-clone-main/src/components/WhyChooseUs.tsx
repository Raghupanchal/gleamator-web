import { Award, Layers, Settings, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Award, title: "Practical Experience", description: "We focus on real-world skills that are useful in today's jobs." },
  { icon: Layers, title: "All Services in One Place", description: "Training, IT support, HR services, and career programs under one roof." },
  { icon: Settings, title: "Flexible Solutions", description: "Our services are customized to match your needs and growth plans." },
  { icon: Target, title: "Results That Matter", description: "We help people and businesses achieve clear, measurable outcomes." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
