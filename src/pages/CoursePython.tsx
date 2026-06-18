import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  TerminalSquare, 
  Database, 
  BrainCircuit,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Code2,
  Users,
  Target,
  Clock,
  Cloud,
  LayoutTemplate
} from "lucide-react";
import Layout from "@/components/Layout";

// Staggered smooth spring animation wrapper
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Colorful 3D-style Orbital Tech Graphic
const ColorfulTechOrbit = ({ successStories = [] }) => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Center Core with pulsing gradient aura */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-30 w-28 h-28 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full shadow-[0_0_50px_rgba(236,72,153,0.4)] flex items-center justify-center text-white"
      >
        <BrainCircuit size={48} />
      </motion.div>

      {/* Inner Orbit (Fast) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[65%] h-[65%] border-2 border-indigo-100/50 border-dashed rounded-full"
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border border-indigo-100 shadow-xl rounded-full flex items-center justify-center text-indigo-500">
          <TerminalSquare size={20} />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border border-rose-100 shadow-xl rounded-full flex items-center justify-center text-rose-500">
          <LayoutTemplate size={20} />
        </div>
      </motion.div>

      {/* Outer Orbit (Slow, reverse) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[100%] h-[100%] border border-slate-200/50 rounded-full"
      >
        <div className="absolute top-1/4 -left-6 w-16 h-16 bg-white border border-cyan-100 shadow-xl rounded-full flex items-center justify-center text-cyan-500">
          <Database size={24} />
        </div>
        <div className="absolute top-1/4 -right-6 w-16 h-16 bg-white border border-violet-100 shadow-xl rounded-full flex items-center justify-center text-violet-500">
          <Cloud size={24} />
        </div>
        <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-white border border-amber-100 shadow-xl rounded-full flex items-center justify-center text-amber-500">
          <Code2 size={24} />
        </div>
      </motion.div>
    </div>
  );
};

const CoursePython = () => {
  const navigate = useNavigate();

  const data = {
    title: "Python Fullstack",
    highlightTitle: "Engineering",
    subtitle: "From fundamentals to production-grade architecture. Master interfaces, scalable backends, and modern AI pipelines through hands-on project execution.",
    stats: [
      { 
        label: "Engineers Graduated", 
        value: "1.2k+", 
        description: "Successfully transitioned into technical roles.",
        icon: <Users size={28} className="text-white" />,
        gradient: "from-orange-400 to-pink-500"
      },
      { 
        label: "Placement Rate", 
        value: "92%", 
        description: "Hired within 6 months of graduation.",
        icon: <Target size={28} className="text-white" />,
        gradient: "from-violet-500 to-indigo-500"
      },
      { 
        label: "Intensive Duration", 
        value: "4.5 Mo", 
        description: "Project-driven, hands-on daily execution.",
        icon: <Clock size={28} className="text-white" />,
        gradient: "from-cyan-400 to-blue-500"
      },
    ],
    techStack: [
      "Python", "Django", "React", "TypeScript", 
      "PostgreSQL", "Docker", "AWS", "LangChain"
    ],
    syllabus: [
      {
        title: "Frontend Architecture",
        duration: "Phase 1",
        color: "text-pink-500",
        bg: "bg-pink-50",
        icon: <Layers size={24} />,
        items: [
          "Semantic layout structures and advanced Tailwind CSS grids.",
          "Modern JavaScript (ES6+), async data fetching, and DOM logic.",
          "React.js ecosystem: custom hooks, context, and state management."
        ],
      },
      {
        title: "Backend Systems",
        duration: "Phase 2",
        color: "text-violet-500",
        bg: "bg-violet-50",
        icon: <TerminalSquare size={24} />,
        items: [
          "Python deep dive: OOP, decorators, and memory management.",
          "Django & Flask RESTful API design and middleware routing.",
          "Secure authentication utilizing JWT and OAuth2.0 standards."
        ],
      },
      {
        title: "Database & Cloud",
        duration: "Phase 3",
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        icon: <Database size={24} />,
        items: [
          "PostgreSQL schema design and complex relational queries.",
          "Docker containerization for consistent development environments.",
          "Automated CI/CD implementation via GitHub Actions."
        ],
      },
      {
        title: "AI Integration",
        duration: "Phase 4",
        color: "text-orange-500",
        bg: "bg-orange-50",
        icon: <BrainCircuit size={24} />,
        items: [
          "Vector databases and intelligent search mechanisms.",
          "Building context-aware agents using LangChain.",
          "Integrating OpenAI APIs into live application endpoints."
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise E-Commerce Engine",
        description: "Production-ready, multi-tenant storefront with secure payments, resilient cart state, and real-time inventory & order pipelines—built for scale and observability.",
        tags: ["React", "Django", "PostgreSQL"],
        gradient: "from-pink-500/10 to-orange-500/10"
      },
      {
        title: "RAG-Powered Knowledge Assistant",
        description: "A retrieval-augmented assistant that ingests product and policy docs, performs semantic search over a vector store, and serves context-aware, source-backed answers in production.",
        tags: ["Python", "LangChain", "Vector DB"],
        gradient: "from-violet-500/10 to-cyan-500/10"
      },
    ],
    successStories: [
      {
        name: "Aisha Rao",
        role: "Frontend Engineer",
        company: "BrightShop",
        quote: "The hands-on projects and mentor feedback were instrumental in my transition to a senior frontend role.",
      },
      {
        name: "Rohit Menon",
        role: "Backend Developer",
        company: "InfraScale",
        quote: "Real production patterns, CI/CD practice and backend design exercises made me job-ready fast.",
      }
    ]
  };

  return (
    <Layout>
      <div className="bg-[#FAFAFB] font-sans selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
        
        {/* HERO SECTION (Colorful Ambient Light Theme) */}
        <section className="relative flex items-center pt-32 pb-24 overflow-hidden border-b border-white">
          
          {/* Vibrant Animated Background Meshes */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-300/40 to-orange-300/40 blur-[100px]" 
            />
            <motion.div 
              animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-300/40 to-cyan-300/40 blur-[120px]" 
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              <FadeUp className="flex flex-col gap-6 relative z-20">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_16px_rgba(0,0,0,0.03)] rounded-full w-max"
                >
                  <Award size={16} className="text-pink-500" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                    Official Cohort — 4.5 months
                  </span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  {data.title} <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                    {data.highlightTitle}
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                  {data.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    onClick={() => navigate('/enroll', { state: { course: data.title } })}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] hover:-translate-y-1"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md border border-slate-200 hover:bg-white text-slate-700 font-bold rounded-2xl transition-all shadow-sm"
                  >
                    View Curriculum
                  </button>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-wrap gap-3">
                  {data.techStack.map((tech, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="px-5 py-2 bg-white/80 backdrop-blur-sm border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.03)] rounded-xl text-sm font-bold text-slate-700 cursor-default transition-all hover:border-pink-300 hover:text-pink-600"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </FadeUp>

              {/* Right Side Colorful Orbit */}
              <FadeUp delay={0.2} className="relative hidden lg:block">
                <ColorfulTechOrbit successStories={data.successStories} />
              </FadeUp>

            </div>
            {/* placed students placeholder removed (moved below projects) */}
          </div>
        </section>

        {/* IMPACT METRICS SECTION (Glassmorphism & Gradients) */}
        <section className="bg-[#FAFAFB] pt-24 pb-24 relative z-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-6 tracking-tight"
              >
                Program Impact
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 text-lg md:text-xl font-medium"
              >
                Proven results from a rigorous curriculum designed to engineer elite talent.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br ${stat.gradient} transform group-hover:rotate-6 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</h3>
                  <p className="text-slate-800 font-bold text-lg mb-3 tracking-wide">{stat.label}</p>
                  <p className="text-slate-500 font-medium leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SPLIT-SCREEN COLORFUL ROADMAP */}
        <section id="roadmap" className="flex flex-col lg:flex-row w-full relative bg-white border-t border-slate-100">
          
          {/* LEFT SIDE: Sticky Colorful Context */}
          <div className="lg:w-5/12 relative bg-slate-50 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8 md:p-16 z-20 border-r border-slate-100 overflow-hidden">
            {/* Soft background gradient on the sticky side */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-pink-50/50" />

            <div className="relative z-10 w-full max-w-md">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-slate-100 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                    Execution Roadmap
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">Progression</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                  A linear sequence designed to build compounding technical capability week over week. We remove the guesswork so you can focus entirely on execution.
                </p>

                <button
                  onClick={() => navigate('/enroll', { state: { course: data.title } })}
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 w-max"
                >
                  Secure Your Seat
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </FadeUp>
            </div>
          </div>

          {/* RIGHT SIDE: The Winding Road Timeline */}
          <div className="lg:w-7/12 relative py-20 px-4 md:px-12 bg-white">
            <div className="max-w-3xl mx-auto relative">
              
              {/* THE ROAD (Gradient Line) */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-slate-100 transform md:-translate-x-1/2 rounded-full flex justify-center overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="w-full bg-gradient-to-b from-pink-500 via-violet-500 to-cyan-500 h-full origin-top rounded-full"
                />
              </div>

              <div className="space-y-16 md:space-y-24 relative pt-10 pb-20">
                {data.syllabus.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                      
                      {/* MAP PIN (Floating colorful droplet) */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="absolute left-14 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center"
                      >
                        <div className="relative flex items-center justify-center">
                          {/* Inner glowing dot on hover */}
                          <div className={`absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md ${step.bg}`} />
                          
                          <div className={`w-12 h-12 md:w-16 md:h-16 bg-white shadow-xl border-4 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative z-10 ${step.color.replace('text-', 'border-')}`}
                               style={{ borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }}>
                            <span className={`text-xl md:text-2xl font-black ${step.color}`} style={{ transform: 'rotate(45deg)' }}>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* CONTENT CARD */}
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`ml-24 md:ml-0 w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-8 md:text-right md:mr-auto' : 'md:pl-8 md:ml-auto'}`}
                      >
                        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative group-hover:-translate-y-2">
                          
                          <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-2xl border border-white shadow-sm ${step.bg} ${step.color} ${isEven ? 'md:order-2' : ''}`}>
                              {step.icon}
                            </div>
                            <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'}`}>
                              <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1 w-max ${step.color} ${step.bg}`}>
                                {step.duration}
                              </span>
                              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            {step.items.map((item, i) => (
                              <div key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                <div className="mt-1 flex-shrink-0">
                                  <ArrowRight size={16} className={`${step.color} ${isEven ? 'transform rotate-180 md:rotate-0' : ''}`} />
                                </div>
                                <span className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                        </div>
                      </motion.div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (Colorful Bento Box Style) */}
        <section className="py-24 bg-[#FAFAFB] relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <FadeUp>
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Production Artifacts</h2>
                  <p className="text-slate-600 text-lg font-medium">Build complex, scalable applications that demonstrate concrete engineering capabilities to technical recruiters.</p>
                </div>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-8">
              {data.projects.map((project, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="h-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Vibrant Gradient Background Mesh on Hover */}
                    <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-800 shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                        <Cpu size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium text-lg">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, idx) => (
                          <div key={idx} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 shadow-sm">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA (Massive Colorful Gradient) */}
        <section className="py-32 relative bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <FadeUp className="max-w-5xl mx-auto relative">
              
              <div className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(236,72,153,0.3)] overflow-hidden">
                {/* Decorative glowing orbs inside the CTA */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-[80px]" />
                  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-400/30 rounded-full blur-[80px]" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    Compile Your Future.
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                    Applications are reviewed on a rolling basis. Secure your technical infrastructure today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => navigate('/enroll', { state: { course: data.title } })}
                      className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-pink-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                      Initialize Application
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-colors"
                    >
                      Return to Top
                    </button>
                  </div>
                </div>
              </div>

            </FadeUp>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CoursePython;