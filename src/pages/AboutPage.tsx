import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOffice from "@/assets/about-office.jpg";
import leader1 from "@/assets/leader-1.webp";
import leader2 from "@/assets/leader-2.webp";
import leader3 from "@/assets/leader-3.png";
import director1 from "@/assets/director-1.png";
import director2 from "@/assets/director-2.png";
import director3 from "@/assets/director-3.png";
import director4 from "@/assets/raghavendra.jpeg";
import teamPhoto from "@/assets/team-photo.jpg";
import collaborativeLearning from "@/assets/collaborative_learning.png";
import awardTrophy from "@/assets/award-trophy.png";
import awardCertificate from "@/assets/awards-certificate.jpg";
import bgpngtrophyy from "@/assets/bgpngtrophyy.png";
import { Eye, Target, Layers, Globe, Settings, Users, Lightbulb, Heart, Linkedin, Mail, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  { icon: Layers, title: "Comprehensive Service Offerings", description: "We offer a wide range of services, including IT solutions, skill development, corporate training, and HR services. With everything under one roof, we simplify your organizational needs and eliminate the need for multiple service providers." },
  { icon: Globe, title: "Pan-India Presence", description: "With a strong partner network and infrastructure across India, we efficiently manage projects anywhere in the country. This ensures local support and scalable solutions for our clients." },
  { icon: Settings, title: "Customized Solutions", description: "We design customized solutions to fit each client's unique requirements. Our personalized approach ensures effective results that align with your specific goals and challenges." },
  { icon: Users, title: "Expert Team", description: "Our team of experienced professionals brings industry expertise and innovative thinking to deliver exceptional results with dedication and precision." },
];

// Updated leadership list with bio description text
const leadership = [
  {
    image: leader1,
    name: "Vikram J",
    role: "Managing Director",
    description: `“At Gleamator, we believe every individual deserves the opportunity to learn, grow, and succeed. Our mission is to create meaningful pathways where skills meet opportunities and talent finds the right direction.

We are committed to building a future where industry-relevant training, technology, and employment opportunities come together to transform lives and strengthen organizations. Every initiative we undertake is driven by a simple purpose — to empower people with confidence, capability, and career growth.

Together with our partners, clients, and learners, we continue to move forward with passion and responsibility, shaping a skilled workforce that will lead tomorrow’s progress.”`,
    linkedin: "#",
    email: "mailto:Vikram@gleamtor.in"
  },
  {
    image: leader2,
    name: "Bhaskar N",
    role: "CEO",
    description: `“Our focus spans across IT services, Staffing, Skill Development, Internship Programs, and Talent Enablement — with one unified purpose- to bridge the gap between industry expectations and real-world talent readiness.

What sets us apart is our dedication to delivering value.
As we continue to grow, our vision remains unwavering: to become a global leader in technology services and talent transformation, empowering organizations and individuals to thrive in a digital-first world.
Together, let’s build, innovate, and achieve more.”`,
    linkedin: "#",
    email: "mailto:ceo@gleamtor.in"
  },
  {
    image: leader3,
    name: "Jayanth V",
    role: "COO",
    description: `“Our focus spans across IT services, Staffing, Skill Development, Internship Programs, and Talent Enablement — with one unified purpose- to bridge the gap between industry expectations and real-world talent readiness.

What sets us apart is our dedication to delivering value.
As we continue to grow, vision remains unwavering: to become a global leader in technology services and talent transformation, empowering organizations and individuals to thrive in a digital-first world.
Together, let’s build, innovate, and achieve more.”`,
    linkedin: "#",
    email: "mailto:Jayanth@gleamtor.in"
  },
];

const directors = [
  {
    image: director4,
    name: "Raghavendra L",
    role: "Director - Skilling",
    description: "Driving talent excellence and empowering workforces for future-ready success.",
    linkedin: "#",
    email: "mailto:contact@gleamator.com"
  },
  {
    image: director1,
    name: "M L Vishal",
    role: "Director - Placement and HR Services",
    description: "Connecting opportunities with people through strategic placement and HR solutions.",
    linkedin: "#",
    email: "mailto:contact@gleamator.com"
  },
  {
    image: director2,
    name: "Raghunath S",
    role: "Director - Operation",
    description: "Ensuring operational excellence through efficiency, quality, and innovation.",
    linkedin: "#",
    email: "mailto:contact@gleamator.com"
  },
  {
    image: director3,
    name: "Ramesh S Patil",
    role: "Director - Strategy and Business Development",
    description: "Shaping growth strategies and building partnerships for long-term impact.",
    linkedin: "#",
    email: "mailto:contact@gleamator.com"
  },
];

const AboutPage = () => {
  const [activeLeader, setActiveLeader] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-scroll effect: advances leader every 4 seconds, resets on activeLeader change to prevent abrupt changes during manual navigation.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLeader((prev) => (prev + 1) % leadership.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeLeader]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    // Minimum distance to trigger swipe (50px)
    if (diff > 50) {
      // Swiped left, show next leader
      setActiveLeader((prev) => (prev + 1) % leadership.length);
      setTouchStart(null);
    } else if (diff < -50) {
      // Swiped right, show previous leader
      setActiveLeader((prev) => (prev - 1 + leadership.length) % leadership.length);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="About Company" title="Gleamator Technologies" />

      {/* We Are Beyond */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">We Are Beyond</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gleamator is a startup founded in 2024, backed by a team with over 25 years of experience in IT services, skill development, and workforce solutions. We help businesses build stronger systems and stronger teams by combining technology, training, and talent in a way that's practical and effective.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe growth happens when people and systems are aligned. So our work always starts with understanding how your business actually operates — then improving what matters most.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <img src={aboutOffice} alt="Gleamator office" className="rounded-lg shadow-lg w-full object-cover" loading="lazy" width={800} height={600} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-br from-[#0c1524] via-[#111f38] to-[#070d17] relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Vision Card */}
            <AnimatedSection delay={0}>
              <div className="group relative bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                {/* Accent glow on hover */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 flex items-center justify-center text-blue-400 border border-blue-500/25 shadow-[0_8px_25px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500">
                      <Eye className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                      Vision
                    </h3>
                  </div>
                  <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                    To empower individuals and businesses with advanced skills, innovative IT solutions, and reliable manpower services, fostering growth and success in the digital age.
                  </p>
                </div>

                {/* Bottom Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection delay={0.15}>
              <div className="group relative bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                {/* Accent glow on hover */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/25 shadow-[0_8px_25px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-wide group-hover:text-emerald-300 transition-colors duration-300">
                      Mission
                    </h3>
                  </div>
                  <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                    Bridge skill gaps, offer innovative IT solutions, and connect businesses with the right talent to drive growth and success.
                  </p>
                </div>

                {/* Bottom Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Values (Updated UI) */}
      <section className="py-24 bg-[#FAF9F5] relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-3 tracking-tight">
                Why Choose Us
              </h2>
              {/* Custom underline */}
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />
              <p className="text-muted-foreground text-base md:text-lg">
                Delivering excellence through innovation, expertise, and a commitment to your success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side: Grid of cards (Slightly smaller size) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 md:gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-white border border-slate-105/80 rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(255,107,0,0.11)] hover:border-accent/30 transition-all duration-500 ease-out h-full overflow-hidden cursor-default"
                  >
                    {/* Animated Top Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Inner Content */}
                    <div className="flex flex-col h-full relative z-10">
                      {/* Icon Container with peach/orange background */}
                      <div className="w-10 h-10 mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-500 ease-out shadow-sm">
                        <v.icon className="w-5.5 h-5.5 text-accent drop-shadow-sm group-hover:rotate-12 transition-transform duration-500" />
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-primary mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                        {v.title}
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed flex-grow">
                        {v.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Right side: Trophy Presentation (Larger size) */}
            <div className="lg:col-span-5 flex justify-center relative mt-12 lg:mt-0">
              <AnimatedSection direction="right" delay={0.3}>
                <div className="relative flex items-center justify-center p-4">
                  {/* Outer Glowing Rings */}
                  <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] border border-accent/20 rounded-full animate-[spin_45s_linear_infinite] pointer-events-none" />
                  <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] border border-dashed border-accent/25 rounded-full animate-[spin_65s_linear_infinite_reverse] pointer-events-none" />
                  
                  {/* Subtle inner glow circle */}
                  <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Sparkles / Stars with floating animations */}
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-16 w-2.5 h-2.5 bg-accent/50 rounded-full blur-[0.5px]" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.7, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 -left-2 w-3.5 h-3.5 bg-accent/40 rounded-full blur-[0.5px]" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 -right-1 w-3 h-3 bg-accent/55 rounded-full blur-[0.5px]" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.65, 0.15] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 left-1/3 w-2 h-2 bg-accent/40 rounded-full blur-[0.5px]" 
                  />

                  {/* Trophy Image */}
                  <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10 w-[280px] sm:w-[380px] lg:w-[420px] transition-transform duration-700 hover:scale-[1.03]"
                  >
                    <img 
                      src={bgpngtrophyy} 
                      alt="Gleamator Award Trophy" 
                      className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(255,107,0,0.18)]"
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-[#4aa5d9] mb-4 tracking-tight">
                Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-4">
                Guided by experience and driven by innovation, meet the key leaders steering our vision.
              </p>
            </div>
          </AnimatedSection>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.15}>
                <div className="group relative bg-[#FAF9F5] rounded-[2.2rem] border border-slate-100/80 shadow-[0_12px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col items-center text-center p-7 h-full overflow-hidden">

                  {/* Decorative background shape in top right */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#e3eef7] rounded-bl-[100px] pointer-events-none z-0 transition-transform duration-500 group-hover:scale-105" />

                  {/* Leaf-shaped Image Container (Larger & Crisper) */}
                  <div className="relative w-40 h-40 bg-white border-[6px] border-[#3f434c] rounded-[40px_0_40px_0] p-1 flex items-center justify-center shadow-sm z-10 mb-5 transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover rounded-[32px_0_32px_0]"
                      loading="lazy"
                      width={256}
                      height={256}
                    />
                  </div>

                  {/* Divider line with dot */}
                  <div className="flex items-center gap-3 w-full justify-center mb-4 z-10">
                    <div className="h-[1px] w-10 bg-slate-200"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="h-[1px] w-10 bg-slate-200"></div>
                  </div>

                  {/* Text Details Area */}
                  <div className="flex flex-col flex-grow items-center z-10 w-full">
                    <h3 className="font-display font-bold text-[#3a3f47] text-xl tracking-tight mb-1">
                      {person.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#5d6776] font-bold mb-4">
                      {person.role}
                    </p>

                    <p className="text-slate-500 text-[12.5px] leading-relaxed whitespace-pre-line text-left italic font-normal px-1 text-slate-500/90 mb-6">
                      {person.description}
                    </p>
                  </div>

                  {/* Leadership Social Links */}
                  <div className="relative z-10 flex gap-3.5 mt-auto justify-center">
                    <a
                      href={person.email}
                      aria-label={`Email ${person.name}`}
                      className="w-9 h-9 rounded-full bg-[#183059]/5 border border-[#183059]/10 hover:bg-[#183059] hover:text-white hover:scale-110 text-[#183059] flex items-center justify-center transition-all duration-300 shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Interactive Layout (With animations and swipe support) */}
          <div className="block md:hidden max-w-sm mx-auto px-1">
            {/* Quick Avatar Tab Selector */}
            <div className="flex justify-center items-center gap-6 mb-8">
              {leadership.map((person, idx) => (
                <button
                  key={person.name}
                  onClick={() => setActiveLeader(idx)}
                  className={`relative transition-all duration-500 rounded-full p-0.5 ${activeLeader === idx
                      ? "ring-4 ring-offset-2 ring-offset-background ring-blue-400 scale-110"
                      : "opacity-60 scale-90 hover:opacity-100"
                    }`}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {activeLeader === idx && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Carousel Container with Arrows & Swipe Gestures */}
            <div className="relative flex items-center justify-center w-full">
              {/* Left Arrow */}
              <button
                onClick={() => setActiveLeader((prev) => (prev - 1 + leadership.length) % leadership.length)}
                className="absolute left-[-16px] z-20 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-md text-slate-600 hover:text-blue-500 active:scale-95 transition-transform"
                aria-label="Previous Team Member"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Card Container */}
              <div
                className="w-full min-h-[460px]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLeader}
                    initial={{ opacity: 0, x: 30, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative bg-[#FAF9F5] rounded-[2.2rem] border border-slate-100/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col items-center text-center p-6 h-full overflow-hidden"
                  >
                    {/* Decorative background shape in top right */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#e3eef7] rounded-bl-[80px] pointer-events-none z-0" />

                    {/* Leaf-shaped Image Container */}
                    <div className="relative w-32 h-32 bg-white border-[5px] border-[#3f434c] rounded-[32px_0_32px_0] p-0.5 flex items-center justify-center shadow-sm z-10 mb-4">
                      <img
                        src={leadership[activeLeader].image}
                        alt={leadership[activeLeader].name}
                        className="w-full h-full object-cover rounded-[27px_0_27px_0]"
                      />
                    </div>

                    {/* Divider line with dot */}
                    <div className="flex items-center gap-3 w-full justify-center mb-3.5 z-10">
                      <div className="h-[1px] w-8 bg-slate-200"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <div className="h-[1px] w-8 bg-slate-200"></div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col flex-grow items-center z-10 w-full mb-4">
                      <h3 className="font-display font-bold text-[#3a3f47] text-lg tracking-tight mb-0.5">
                        {leadership[activeLeader].name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#5d6776] font-bold mb-3">
                        {leadership[activeLeader].role}
                      </p>

                      <p className="text-slate-500 text-[12.5px] leading-relaxed whitespace-pre-line text-left italic font-normal px-1 text-slate-500/90">
                        {leadership[activeLeader].description}
                      </p>
                    </div>

                    {/* Socials */}
                    <div className="relative z-10 flex gap-3.5 justify-center mt-auto">
                      <a
                        href={leadership[activeLeader].email}
                        aria-label={`Email ${leadership[activeLeader].name}`}
                        className="w-9 h-9 rounded-full bg-[#183059]/5 border border-[#183059]/10 text-[#183059] flex items-center justify-center transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => setActiveLeader((prev) => (prev + 1) % leadership.length)}
                className="absolute right-[-16px] z-20 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-md text-slate-600 hover:text-blue-500 active:scale-95 transition-transform"
                aria-label="Next Team Member"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {leadership.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLeader(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeLeader === idx ? "w-6 bg-blue-500" : "w-1.5 bg-slate-300"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directors (Updated UI with reference design image_0.png) */}
      <section className="pt-28 pb-40 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/90 relative overflow-hidden">
        {/* Floating Glowing Accent Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Title and Details */}
            <div className="max-w-xl">
              <AnimatedSection direction="left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 mb-6">
                  <Users className="w-4 h-4 text-[#ff6b00]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0c1e3d]">
                    BOARD OF GOVERNANCE
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c1e3d] mb-2 tracking-tight leading-tight">
                  Guiding Our <br />Long-Term <span className="text-[#ff6b00]">Vision</span>
                </h2>
                <div className="w-12 h-[3px] bg-[#ff6b00] rounded-full mb-6" />
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  Our Board of Directors brings together seasoned leadership, diverse industry experience, and strong governance to guide Gleamator Technologies toward sustainable growth and innovation.
                </p>
                
                <div className="flex gap-4 items-center bg-white border border-slate-100 p-5 rounded-2xl mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                  <div className="w-10 h-10 rounded-full bg-[#0c1e3d] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Users className="w-4.5 h-4.5 text-[#ff6b00]" />
                  </div>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    Leveraging decades of corporate stewardship to empower our executive teams.
                  </p>
                </div>

              </AnimatedSection>
            </div>

            {/* Right Column: Staggered Stacking Profile Cards */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-12 sm:pb-0">
                {directors.map((person, i) => (
                  <AnimatedSection
                    key={person.name}
                    delay={i * 0.1}
                    className={i % 2 === 0 ? "sm:translate-y-8" : ""}
                  >
                    <div className="group relative bg-white border border-slate-100 rounded-[1.75rem] p-5 pb-7 text-center shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-slate-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center h-full overflow-hidden">
                      
                      {/* Curved dark blue background shape */}
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#0c1e3d] to-[#15305b] rounded-b-[30px] pointer-events-none z-0" />

                      <div className="relative z-10 w-full flex flex-col items-center">
                        {/* Circular Portrait Container */}
                        <div className="relative w-[8.5rem] h-[8.5rem] rounded-full border-[3px] border-white bg-white shadow-md z-10 mt-5 mb-4 overflow-hidden">
                          <img
                            src={person.image}
                            alt={person.name}
                            className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08] ${
                              person.name === "Raghunath S" ? "scale-[1.05] object-cover" : ""
                            }`}
                            loading="lazy"
                            width={256}
                            height={256}
                          />
                        </div>

                        {/* Name and Role tag */}
                        <h4 className="font-display font-extrabold text-[#0c1e3d] text-base mb-1 tracking-tight">
                          {person.name}
                        </h4>
                        
                        <p className="text-[11.5px] uppercase font-extrabold tracking-wider text-[#ff6b00] mb-1 leading-normal max-w-[90%]">
                          {person.role}
                        </p>
                      </div>

                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden">
        {/* Glowing Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-600 mb-3.5 block">
                OUR PEOPLE
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Meet Our Team
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
                A dedicated group of educators, developers, operators, and industry leaders driving growth and skill enablements nationwide.
              </p>
            </div>
          </AnimatedSection>

          {/* Team Photo Container with Premium Framed Styling */}
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="group relative bg-white border-[12px] border-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,32,59,0.08)] hover:shadow-[0_30px_70px_rgba(15,32,59,0.18)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={teamPhoto}
                    alt="Gleamator Team"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">Awards & Recognition</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <div className="group bg-white border-[10px] border-white p-3 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(255,107,0,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
                {/* Mount Frame container */}
                <div className="w-full aspect-[4/5] rounded-2xl border border-slate-100 bg-[#FAF9F5] flex items-center justify-center p-4 overflow-hidden relative shadow-inner">
                  <img
                    src={awardTrophy}
                    alt="The Great Indian Startup Awards trophy"
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Great Indian Startup Awards</p>
                <p className="mt-1 text-sm font-semibold text-slate-800 text-center">Award Trophy - GREAT INDIAN STARTUP AWARDS 2025</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="group bg-white border-[10px] border-white p-3 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(255,107,0,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
                {/* Mount Frame container */}
                <div className="w-full aspect-[4/5] rounded-2xl border border-slate-100 bg-[#FAF9F5] flex items-center justify-center p-4 overflow-hidden relative shadow-inner">
                  <img
                    src={awardCertificate}
                    alt="Certificate of Recognition"
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Gleamator Technologies Recognition</p>
                <p className="mt-1 text-sm font-semibold text-slate-800 text-center">Certificate of Excellence - ग्रेट इंडियन स्टार्टअप अवार्ड्स</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;