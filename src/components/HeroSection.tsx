import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import dashboardBg from "@/assets/Dashboard.jpg";

const stats = [
  { value: "10,000", label: "Youth Skilled Across India" },
  { value: "50+", label: "Training Centers" },
  { value: "150+", label: "Hiring Companies" },
];

// --- Custom Animated Counter Component ---
const AnimatedCounter = ({ valueText, delay }) => {
  // Extract numeric value and formatting details
  const numericPart = parseInt(valueText.replace(/,/g, "").replace(/\+/g, ""));
  const hasPlus = valueText.includes("+");
  const isThousands = valueText.includes(",");

  const count = useMotionValue(0);
  
  // Transform running number back into formatted text (e.g., 10000 -> "10,000+")
  const displayValue = useTransform(count, (latest) => {
    let currentNum = Math.round(latest);
    let formattedNum = isThousands ? currentNum.toLocaleString() : currentNum;
    return `${formattedNum}${hasPlus ? "+" : ""}`;
  });

  useEffect(() => {
    const animationControls = animate(count, numericPart, {
      duration: 2.5,
      delay: delay, // Syncs with the fade-in animation
      ease: "easeOut",
    });
    return animationControls.stop;
  }, [numericPart, delay, count]);

  return <motion.span>{displayValue}</motion.span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={dashboardBg} alt="Dashboard background" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-hero leading-tight mb-6"
          >
            Building Careers Through Practical Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-white text-hero/80 text-lg mb-8 max-w-lg"
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
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {/* Replaced static {stat.value} with the animated counter */}
                  <AnimatedCounter valueText={stat.value} delay={0.6 + i * 0.15} />
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;