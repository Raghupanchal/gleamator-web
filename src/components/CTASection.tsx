import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 text-left overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" width={1920} height={600} />
        <div className="absolute inset-0 bg-navy/80" />
      </div>
      <div className="relative container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-hero mb-4">
            Start Your Skill Journey Today
          </h2>
          <p className=" text-white text-hero/70 mb-8 max-w-lg">
            Take the first step toward building a future you're proud of.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
