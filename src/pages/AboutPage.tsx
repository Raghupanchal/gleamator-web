import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOffice from "@/assets/about-office.jpg";
import leader1 from "@/assets/leader-1.webp";
import leader2 from "@/assets/leader-2.webp";
import leader3 from "@/assets/leader-3.png";
import director1 from "@/assets/director-1.png";
import director2 from "@/assets/director-2.webp";
import director3 from "@/assets/director-3.png";
import director4 from "@/assets/raghavendra.jpeg";
import teamPhoto from "@/assets/team-photo.jpg";
import collaborativeLearning from "@/assets/collaborative_learning.png";
import awardTrophy from "@/assets/award-trophy.jpg";
import awardCertificate from "@/assets/awards-certificate.jpg";
import { Eye, Target, Layers, Globe, Settings, Users, Lightbulb, Heart, Linkedin, Mail } from "lucide-react";

const values = [
  { icon: Layers, title: "Comprehensive Service Offerings", description: "We offer a wide range of services, including IT solutions, skill development, corporate training, and HR services. With everything under one roof, we simplify your organizational needs and eliminate the need for multiple service providers." },
  { icon: Globe, title: "Pan-India Presence", description: "With a strong partner network and infrastructure across India, we efficiently manage projects anywhere in the country. This ensures local support and scalable solutions for our clients." },
  { icon: Settings, title: "Customized Solutions", description: "We design customized solutions to fit each client's unique requirements. Our personalized approach ensures effective results that align with your specific goals and challenges." },
  { icon: Users, title: "Expert Team", description: "Backed by over 20 years of experience, our skilled team brings expertise across IT solutions, training, and HR services. We are committed to delivering high-quality results that meet your needs." },
  { icon: Lightbulb, title: "Focus On Innovation", description: "Innovation drives us to adopt the latest technologies and methods, enabling us to deliver advanced and impactful solutions that keep you ahead." },
  { icon: Heart, title: "Client-Centric Approach", description: "We build strong relationships by understanding our clients needs. This ensures our solutions are not only robust but also practical and sustainable for long-term success." },
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
    email: "mailto:contact@gleamator.com"
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
    email: "mailto:contact@gleamator.com"
  },
  {
    image: leader3,
    name: "Jayanth V",
    role: "COO",
    description: `“Our focus spans across IT services, Staffing, Skill Development, Internship Programs, and Talent Enablement — with one unified purpose- to bridge the gap between industry expectations and real-world talent readiness.

What sets us apart is our dedication to delivering value.
As we continue to grow, our vision remains unwavering: to become a global leader in technology services and talent transformation, empowering organizations and individuals to thrive in a digital-first world.
Together, let’s build, innovate, and achieve more.”`,
    linkedin: "#",
    email: "mailto:contact@gleamator.com"
  },
];

const directors = [
  { image: director1, name: "Vishal", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director2, name: "Raghunath S", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director3, name: "Ramesh", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director4, name: "Raghavendra", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
];

const AboutPage = () => {
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
                  Gleamator is a startup founded in 2024, backed by a team with over 20 years of experience in IT services, skill development, and workforce solutions. We help businesses build stronger systems and stronger teams by combining technology, training, and talent in a way that's practical and effective.
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
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Delivering excellence through innovation, expertise, and a commitment to your success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="group relative bg-card/80 backdrop-blur-md border border-border/40 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out h-full overflow-hidden cursor-default">

                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Inner Content */}
                  <div className="flex flex-col h-full relative z-10">
                    {/* Icon Container with subtle inner shadow and hover scale */}
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500 ease-out shadow-sm">
                      <v.icon className="w-8 h-8 text-accent drop-shadow-sm transition-transform duration-500" />
                    </div>

                    <h3 className="font-bold text-xl text-foreground mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                      {v.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {v.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-[#4aa5d9] mb-4 tracking-tight">
                Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-4">
                Guided by experience and driven by innovation, meet the key leaders steering our vision.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

                    <p className="text-slate-500 text-[12.5px] leading-relaxed whitespace-pre-line text-left italic font-normal px-1 text-slate-500/90">
                      {person.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Directors (Updated UI with reference design image_0.png) */}
      <section className="pt-28 pb-40 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/90 relative overflow-hidden">
        {/* Floating Glowing Accent Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Title and Details */}
            <div className="max-w-xl">
              <AnimatedSection direction="left">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-600 mb-3.5 block">
                  BOARD OF GOVERNANCE
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                  Guiding Our Long-Term Vision
                </h2>
                <p className="text-slate-600 text-base md:text-[17px] leading-relaxed mb-6 font-medium">
                  Our Board of Directors brings together seasoned leadership, diverse industry experience, and strong governance to guide Gleamator Technologies toward sustainable growth and innovation.
                </p>
                <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-[#0066cc] rounded-full my-6"></div>
                <p className="text-slate-500 text-sm font-semibold mb-10">
                  Leveraging decades of corporate stewardship to empower our executive teams.
                </p>
                <a href="#" className="inline-flex items-center px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#183059] border-2 border-[#183059]/20 rounded-full hover:bg-[#183059] hover:text-white hover:border-[#183059] transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10">
                  LEARN MORE
                </a>
              </AnimatedSection>
            </div>

            {/* Right Column: Staggered Stacking Profile Cards */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pb-12 sm:pb-0">
                {directors.map((person, i) => (
                  <AnimatedSection
                    key={person.name}
                    delay={i * 0.1}
                    className={i % 2 === 0 ? "sm:translate-y-24" : ""}
                  >
                    <div className="group relative bg-gradient-to-b from-[#1c355e] to-[#0f203b] border border-white/10 rounded-[2.2rem] p-8 text-center shadow-[0_12px_45px_rgba(15,32,59,0.08)] hover:shadow-[0_30px_70px_rgba(15,32,59,0.28)] hover:border-blue-400/30 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center h-full overflow-hidden">
                      
                      {/* Decorative soft glowing light source */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-bl-[100px] pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110" />

                      <div className="relative z-10 w-full flex flex-col items-center flex-grow">
                        {/* Premium Circular Portrait Container with double glow ring */}
                        <div className="relative w-40 h-40 md:w-44 md:h-44 bg-gradient-to-tr from-slate-200 via-blue-50 to-white rounded-full border-4 border-white/10 ring-4 ring-white/5 group-hover:ring-blue-400/30 group-hover:border-white/20 shadow-inner z-10 mb-6 overflow-hidden transition-all duration-500">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                            loading="lazy"
                            width={256}
                            height={256}
                          />
                        </div>

                        {/* Name and Role tag */}
                        <h3 className="font-display font-extrabold text-white text-xl tracking-tight mb-2 group-hover:text-blue-100 transition-colors duration-300">
                          {person.name}
                        </h3>
                        <div className="inline-block px-3 py-1 rounded-full text-[9px] tracking-[0.15em] bg-white/5 border border-white/10 text-blue-200 uppercase font-extrabold mb-6">
                          {person.role}
                        </div>
                      </div>

                      {/* Social Connect Icons (subtle circular design in white) */}
                      <div className="relative z-10 flex gap-3.5 mt-auto justify-center">
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} LinkedIn`}
                          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={person.email}
                          aria-label={`Email ${person.name}`}
                          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Software Team Section (Tap Academy Inspired Redesign) */}
      <section className="py-28 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden">
        {/* Glowing Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Text Column */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                  Meet Our Software Team
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-10 font-medium">
                  Our software engineering team is composed of passionate full-stack developers, cloud architects, and machine learning practitioners. They turn complex requirements into high-performance web applications, reliable APIs, and automated systems.
                </p>

                {/* Glowing Tap Academy Style Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border-l-4 border-l-blue-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.12)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wider block mb-1">01</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Full-Stack Dev</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">React, Python, & Java Ecosystems</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-l-4 border-l-indigo-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)] hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider block mb-1">02</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Cloud Networks</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">AWS, Docker & CI/CD Pipelines</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-l-4 border-l-purple-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.12)] hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 cursor-default sm:col-span-2">
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-wider block mb-1">03</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Advanced AI & ML Systems</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">LLM Integrations, Agentic Workflows, & MLOps Pipelines</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Image Column with Floating Badges */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="group relative rounded-[2.5rem] bg-white p-4 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">

                  <div className="aspect-[16/11] overflow-hidden rounded-[2rem] relative bg-slate-100">
                    <img
                      src={collaborativeLearning}
                      alt="Gleamator software team"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section (Tap Academy Inspired Redesign) */}
      <section className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Glowing Background Blobs */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Image Column with Floating Badges */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="group relative rounded-[2.5rem] bg-white p-4 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">

                  <div className="aspect-[16/11] overflow-hidden rounded-[2rem] relative bg-slate-100">
                    <img
                      src={teamPhoto}
                      alt="Gleamator core team"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <AnimatedSection direction="right">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                  Meet Our Core Team
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-10 font-medium">
                  Our core management team steers project execution, government partnerships, corporate relations, and student onboarding. They ensure that Gleamator maintains its standards of excellence in skill development and HR solutions.
                </p>

                {/* Glowing Tap Academy Style Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-l-yellow-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(234,179,8,0.12)] hover:border-yellow-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider block mb-1">01</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Executive Board</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">Decades of collective MNC governance</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-l-teal-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(20,184,166,0.12)] hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wider block mb-1">02</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Placement Support</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">Connecting talent with leading tech giants</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-l-pink-500 border-t border-r border-b border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.12)] hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 cursor-default sm:col-span-2">
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-wider block mb-1">03</span>
                    <h4 className="text-sm font-extrabold text-slate-800 mb-1">Pan-India Operations</h4>
                    <p className="text-xs text-slate-500 leading-normal font-medium">Directing state-of-the-art training facilities and logistics across all centers</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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