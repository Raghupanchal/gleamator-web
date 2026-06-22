import React, { useEffect, useRef } from "react";
import { ArrowRight, Users, School, Briefcase, Award, Lightbulb, BookOpen, Rocket, Shield } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import landingImage from "@/assets/landing.png";
import mobLandingImage from "@/assets/mob_landing.png";

const stats = [
  { value: "15,000+", label: "Youth Skilled Across India", icon: Users, delay: 0.1, gradient: "from-[#FF6B00] to-amber-500", shadow: "shadow-orange-500/20 text-white" },
  { value: "100+", label: "Training Centers Pan India", icon: School, delay: 0.2, gradient: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20 text-white" },
  { value: "50+", label: "Hiring Companies Partnered", icon: Briefcase, delay: 0.3, gradient: "from-purple-500 to-indigo-500", shadow: "shadow-purple-500/20 text-white" },
];

const AnimatedCounter = ({ valueText, delay }) => {
  const numericPart = parseInt(valueText.replace(/,/g, "").replace(/\+/g, "").replace(/%/g, ""));
  const hasPlus = valueText.includes("+");
  const hasPercent = valueText.includes("%");
  const isThousands = valueText.includes(",");

  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const displayValue = useTransform(count, (latest) => {
    let currentNum = Math.round(latest);
    let formattedNum = isThousands ? currentNum.toLocaleString() : currentNum;
    return `${formattedNum}${hasPercent ? "%" : ""}${hasPlus ? "+" : ""}`;
  });

  useEffect(() => {
    if (isInView) {
      const animationControls = animate(count, numericPart, {
        duration: 2.0,
        delay: delay,
        ease: "easeOut",
      });
      return animationControls.stop;
    }
  }, [numericPart, delay, count, isInView]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const HeroSection = () => {
  return (
    <>
      {/* DESKTOP VIEW */}
      <section className="hidden lg:flex relative h-[calc(100vh-4rem)] lg:min-h-0 lg:max-h-[calc(100vh-4rem)] bg-slate-50 overflow-hidden flex-col justify-between pt-6 pb-2">
        {/* Widescreen Background Graphic Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={landingImage}
            alt="Hero Background Graphic"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Decorative Brush Stroke Waves */}
        <div className="absolute bottom-[18%] left-[-5%] w-[110%] h-[140px] pointer-events-none select-none opacity-[0.15] z-0">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 1000 100" fill="currentColor" preserveAspectRatio="none">
            <path d="M 0 60 C 200 20, 400 20, 600 60 C 800 100, 900 60, 1000 40 C 950 80, 800 120, 600 80 C 400 40, 200 80, 0 60 Z" />
          </svg>
        </div>


        {/* Layered Premium Mesh Gradients */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/10 via-blue-500/5 to-transparent blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 25, -25, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#FF6B00]/10 via-amber-500/5 to-transparent blur-[100px] rounded-full pointer-events-none"
        />

        {/* Main Content Grid */}
        <div className="relative z-10 container mx-auto px-4 py-0 flex-grow flex items-center">
          <div className="grid grid-cols-12 gap-12 items-center w-full">
            {/* Left Text Column */}
            <div className="col-span-7 flex flex-col justify-center items-start text-left">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                className="font-display text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.2] mb-1.5 sm:mb-2 text-left"
              >
                Building <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">Careers</span> <br className="hidden sm:inline" />
                Through <span className="bg-gradient-to-r from-[#FF6B00] via-pink-500 to-indigo-600 bg-clip-text text-transparent">Practical</span> <br />
                <span className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-0.5">
                  Learning
                  <svg className="absolute -bottom-2 left-0 w-full h-3.5 text-[#FF6B00] opacity-85" viewBox="0 0 160 13" fill="currentColor" preserveAspectRatio="none">
                    <path d="M1 10 C 20 8, 40 2, 80 2 C 120 2, 140 8, 160 10 C 140 12, 100 13, 80 13 C 60 13, 20 12, 1 10 Z" />
                  </svg>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="font-display text-slate-600 text-sm sm:text-base lg:text-base mb-3 max-w-md leading-relaxed font-medium text-left"
              >
                We offer hands-on internships that turn learning into real-world skills and career readiness.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="flex flex-wrap gap-3 sm:gap-4 justify-start"
              >
                <button
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-6 sm:px-8 py-3 rounded font-bold text-sm hover:bg-[#E05E00] transition-all shadow-lg shadow-[#FF6B00]/25 hover:scale-[1.02]"
                >
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Row 1: Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="grid grid-cols-3 gap-4 mt-5 w-full max-w-xl"
              >
                {/* Stat 1 */}
                <div className="flex items-center gap-3 py-0.5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-none">
                      <AnimatedCounter valueText="15,000+" delay={0.1} />
                    </span>
                    <span className="font-display text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">
                      Youth Skilled Across India
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 py-0.5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#FF6B00]">
                    <School className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-none">
                      <AnimatedCounter valueText="100+" delay={0.2} />
                    </span>
                    <span className="font-display text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">
                      Training Centers
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 py-0.5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-purple-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-none">
                      <AnimatedCounter valueText="50+" delay={0.3} />
                    </span>
                    <span className="font-display text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">
                      Hiring Companies
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column is kept empty to let the background graphic shine through */}
            <div className="col-span-5 hidden lg:block pointer-events-none" />
          </div>
        </div>

        {/* Footer / Stats Section of Hero */}
        <div className="relative z-10 container mx-auto px-4 pb-2.5 w-full mt-auto">
          {/* Row 2: Features / Benefits */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100/80 shadow-sm p-3 grid grid-cols-4 divide-x divide-slate-100">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 px-3 py-0.5">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-extrabold text-blue-600 leading-snug">
                  Practical Learning
                </span>
                <span className="font-display text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                  Learn by doing real industry projects
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 px-3 py-0.5">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 shadow-sm text-[#FF6B00]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-extrabold text-[#FF6B00] leading-snug">
                  Expert Mentorship
                </span>
                <span className="font-display text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                  Personal guidance from industry experts
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 px-3 py-0.5">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0 shadow-sm text-purple-600">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-extrabold text-purple-600 leading-snug">
                  Career Growth
                </span>
                <span className="font-display text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                  Placements, internships & global opportunities
                </span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3 px-3 py-0.5">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 shadow-sm text-green-600">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-extrabold text-green-600 leading-snug">
                  Future Ready Skills
                </span>
                <span className="font-display text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                  Industry-focused training for tomorrow's jobs
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE & TABLET VIEW */}
      <section className="flex lg:hidden relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#EBF2FC] via-white to-white flex-col justify-start pt-0 pb-16 overflow-hidden">
        {/* Wave-cut Top Image Section */}
        <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[450px] md:h-[500px] overflow-hidden">
          <img
            src={mobLandingImage}
            alt="Students collaborating"
            className="w-full h-full object-cover object-top"
          />
          {/* Double curve overlay effect for glowing edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10">
            <svg className="w-full h-full text-white fill-current" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,48 C240,96 480,108 720,96 C960,84 1200,48 1440,24 L1440,120 L0,120 Z" />
            </svg>
          </div>
          <div className="absolute bottom-1.5 left-0 right-0 h-12 pointer-events-none z-0 opacity-40">
            <svg className="w-full h-full text-blue-400 fill-current" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,40 C240,88 480,100 720,88 C960,76 1200,40 1440,16 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex-grow flex flex-col justify-start px-4 pt-6">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-100/50 shadow-sm mx-auto mb-5 text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider">
            <School className="w-3.5 h-3.5 text-blue-500" />
            <span>Learn</span>
            <span className="text-blue-300">•</span>
            <span>Build</span>
            <span className="text-blue-300">•</span>
            <span>Grow</span>
          </div>

          {/* Heading Title */}
          <h1 className="font-display text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight text-center leading-[1.2] mb-3 max-w-md mx-auto">
            Building Careers <br />
            Through <span className="bg-gradient-to-r from-[#FF6B00] via-pink-500 to-indigo-600 bg-clip-text text-transparent">Practical</span> <br />
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-0.5">
              Learning
              <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#FF6B00] opacity-90" viewBox="0 0 160 13" fill="currentColor" preserveAspectRatio="none">
                <path d="M1 10 C 20 8, 40 2, 80 2 C 120 2, 140 8, 160 10 C 140 12, 100 13, 80 13 C 60 13, 20 12, 1 10 Z" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="font-display text-slate-500 text-xs sm:text-sm max-w-sm mx-auto text-center font-medium leading-relaxed mb-6">
            We offer hands-on internships that turn learning into real-world skills and career readiness.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8500] text-white px-8 py-3 rounded-xl font-bold text-sm hover:from-[#E05E00] hover:to-[#FF6B00] transition-all shadow-lg shadow-[#FF6B00]/30 active:scale-95 w-full max-w-xs"
            >
              Explore Programs <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Segment (Centered Panel, 3-column row, side by side with dividers) */}
          <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl border border-blue-50/50 shadow-md p-4 sm:p-5 mt-6 mb-2">
            <div className="grid grid-cols-3 divide-x divide-slate-100">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center px-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1.5 shadow-sm">
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
                <p className="font-display text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                  <AnimatedCounter valueText="15,000+" delay={0.1} />
                </p>
                <p className="font-display text-slate-500 text-[8px] sm:text-[9px] font-semibold tracking-normal mt-1 leading-tight">
                  Youth Skilled Across India
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center px-1">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mb-1.5 shadow-sm">
                  <School className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <p className="font-display text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                  <AnimatedCounter valueText="100+" delay={0.2} />
                </p>
                <p className="font-display text-slate-500 text-[8px] sm:text-[9px] font-semibold tracking-normal mt-1 leading-tight">
                  Training Centers
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center px-1">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-1.5 shadow-sm">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                </div>
                <p className="font-display text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                  <AnimatedCounter valueText="50+" delay={0.3} />
                </p>
                <p className="font-display text-slate-500 text-[8px] sm:text-[9px] font-semibold tracking-normal mt-1 leading-tight">
                  Hiring Companies
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 Features (2x2 grid on mobile, 4 columns in a row on tablet) */}
          <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl border border-blue-50/50 shadow-md p-4 mb-4 mt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y-0 sm:divide-x divide-slate-100/50">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1.5 shadow-sm text-blue-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <p className="font-display text-xs font-bold text-blue-600 leading-snug">
                  Practical Learning
                </p>
                <p className="font-display text-[9px] text-slate-500 font-medium leading-tight mt-0.5 px-1">
                  Learn by doing real industry projects
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center sm:pl-2">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mb-1.5 shadow-sm text-[#FF6B00]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <p className="font-display text-xs font-bold text-[#FF6B00] leading-snug">
                  Expert Mentorship
                </p>
                <p className="font-display text-[9px] text-slate-500 font-medium leading-tight mt-0.5 px-1">
                  Personal guidance from industry experts
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center sm:pl-2">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-1.5 shadow-sm text-purple-600">
                  <Rocket className="w-4 h-4" />
                </div>
                <p className="font-display text-xs font-bold text-purple-600 leading-snug">
                  Career Growth
                </p>
                <p className="font-display text-[9px] text-slate-500 font-medium leading-tight mt-0.5 px-1">
                  Placements, internships & opportunities
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center sm:pl-2">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mb-1.5 shadow-sm text-green-600">
                  <Shield className="w-4 h-4" />
                </div>
                <p className="font-display text-xs font-bold text-green-600 leading-snug">
                  Future Ready Skills
                </p>
                <p className="font-display text-[9px] text-slate-500 font-medium leading-tight mt-0.5 px-1">
                  Industry-focused training for tomorrow's jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;