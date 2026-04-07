import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "10,000", label: "Youth Skilled Across India" },
  { value: "50+", label: "Training Centers" },
  { value: "150+", label: "Hiring Companies" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Technology background" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero leading-tight mb-6"
          >
            Building Careers Through Practical Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-hero/80 text-lg mb-8 max-w-lg"
          >
            We offer hands-on internships that turn learning into real-world skills and career readiness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/internships"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="flex gap-10 mt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: "easeOut" }}
              >
                <p className="text-3xl md:text-4xl font-bold text-hero">{stat.value}</p>
                <p className="text-hero/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
