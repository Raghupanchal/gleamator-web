import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  LayoutTemplate,
  CheckCircle2,
  Star,
  Quote,
  Briefcase,
  Calendar,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  Mail,
  Phone,
  Server
} from "lucide-react";
import Layout from "@/components/Layout";
import gicon from "@/assets/gicon.png";
import classroomActionImg from "@/assets/Classroom action.jpg";
import it2Img from "@/assets/it2.jpeg";
import gleamatorClassImg from "@/assets/gleamatorclass.png";
const videoProject3 = "https://www.w3schools.com/html/mov_bbb.mp4";

// --- Utility Components ---

const FadeUp = ({ children, delay = 0, className = "", duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 80, damping: 20, delay, duration }}
    className={className}
  >
    {children}
  </motion.div>
);

const PythonIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.898 0C5.394 0 5.617 2.825 5.617 2.825l.006 2.925h5.811V6.9h-8.15S0 7.234 0 13.067c0 5.836 2.956 5.616 2.956 5.616l2.637-.006v-3.714s-.073-4.42 4.364-4.42h4.526s4.116-.01 4.116-4.047V3.535S18.596 0 11.898 0z" fill="#306998" />
    <path d="M12.102 24c6.504 0 6.281-2.825 6.281-2.825l-.007-2.925h-5.81V17.1h8.15s3.284-.334 3.284-6.167c0-5.836-2.956-5.616-2.956-5.616l-2.637.006v3.714s.073 4.42-4.364 4.42H9.516s-4.116.01-4.116 4.047v2.928S5.404 24 12.102 24z" fill="#FFE873" />
    <path d="M8.384 1.706a.82.82 0 1 1 0 1.638.82.82 0 0 1 0-1.638z" fill="#FFF" />
    <path d="M15.616 22.294a.82.82 0 1 1 0-1.638.82.82 0 0 1 0 1.638z" fill="#FFF" />
  </svg>
);

const ColorfulTechOrbit = () => {
  return (
    <div className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] mx-auto flex items-center justify-center scale-90 md:scale-100">
      {/* Center Core - Constant (No rotation or scaling animations) */}
      <div className="absolute z-30 w-20 h-20 md:w-24 md:h-24 bg-white backdrop-blur-md rounded-full shadow-[0_0_60px_rgba(99,102,241,0.4)] flex items-center justify-center border border-slate-200">
        <img src={gicon} alt="Gleamator Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md" />
      </div>

      {/* Inner Orbit (Faster Rotation) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[60%] h-[60%] border border-indigo-300/40 border-dashed rounded-full"
      >
        {/* Python Logo - Top */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-white border border-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.2)] rounded-full flex items-center justify-center p-2 hover:scale-110 transition-transform">
          <PythonIcon className="w-6 h-6" />
        </div>

        {/* Code Icon - Bottom Right */}
        <div className="absolute bottom-2 -right-2 w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 border border-indigo-400 shadow-lg rounded-full flex items-center justify-center text-white">
          <Code2 size={16} />
        </div>

        {/* Database Icon - Bottom Left */}
        <div className="absolute bottom-2 -left-2 w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-600 border border-cyan-400 shadow-lg rounded-full flex items-center justify-center text-white">
          <Database size={16} />
        </div>
      </motion.div>

      {/* Outer Orbit (Slower Counter-Rotation) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[95%] h-[95%] border border-slate-300/50 rounded-full"
      >
        {/* Terminal/Django - Left */}
        <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 bg-slate-900 border border-slate-700 shadow-xl rounded-full flex items-center justify-center text-emerald-400">
          <TerminalSquare size={18} />
        </div>

        {/* Cloud - Right */}
        <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 border border-violet-400 shadow-xl rounded-full flex items-center justify-center text-white">
          <Cloud size={18} />
        </div>

        {/* Brain/AI - Bottom */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 border border-amber-400 shadow-xl rounded-full flex items-center justify-center text-white">
          <BrainCircuit size={18} />
        </div>
      </motion.div>
    </div>
  );
};

// --- Custom Visualizer Components ---

const EcommerceVisualizer = () => (
  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
    <div className="relative w-48 h-32">
      <motion.div
        animate={{ y: [0, -5, 0], rotateX: [10, 15, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-4 right-4 h-full bg-white/40 border border-white/50 rounded-xl shadow-sm backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, -8, 0], rotateX: [5, 10, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-4 left-2 right-2 h-full bg-white/60 border border-white/60 rounded-xl shadow-md backdrop-blur-md"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-8 left-0 right-0 h-full bg-white/90 border border-white rounded-xl shadow-2xl flex flex-col p-3 gap-2 overflow-hidden backdrop-blur-xl"
      >
        <div className="w-full flex justify-between items-center border-b border-slate-100 pb-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="w-12 h-2 bg-indigo-100 rounded-full" />
        </div>
        <div className="flex gap-2 h-full pt-1">
          <div className="w-1/3 h-full bg-slate-50/50 rounded-lg border border-slate-100" />
          <div className="w-2/3 flex flex-col gap-2">
            <div className="w-full h-4 bg-indigo-50 rounded border border-indigo-100/50" />
            <div className="w-3/4 h-4 bg-rose-50 rounded border border-rose-100/50" />
            <div className="w-1/2 h-4 bg-emerald-50 rounded border border-emerald-100/50 mt-auto" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const RAGVisualizer = () => (
  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
    <div className="relative w-40 h-40 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
        className="absolute z-20 w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center border border-white"
      >
        <BrainCircuit size={28} className="text-indigo-500" />
      </motion.div>

      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 160 160">
        <motion.path
          d="M30,30 L80,80 M130,30 L80,80 M30,130 L80,80 M130,130 L80,80"
          stroke="url(#gradientRAG)"
          strokeWidth="2"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, 24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradientRAG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>

      {[
        { top: '0%', left: '0%', icon: <Database size={14} className="text-indigo-500" /> },
        { top: '0%', right: '0%', icon: <Server size={14} className="text-rose-500" /> },
        { bottom: '0%', left: '0%', icon: <Code2 size={14} className="text-amber-500" /> },
        { bottom: '0%', right: '0%', icon: <Sparkles size={14} className="text-cyan-500" /> },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          className="absolute z-30 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white flex items-center justify-center"
          style={pos}
        >
          {pos.icon}
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---

const CoursePython = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    course: "Python Fullstack Engineering",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-slide logic for Hero backgrounds
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setBgPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-play logic for Execution & Career Track slideshow (4s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile && formData.qualification) {
      // Form payload is ready with formData.course included to differentiate Python leads
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", qualification: "", course: "Python Fullstack Engineering" });
      }, 4000);
    }
  };

  const mediaSlides = [
    {
      title: "Active Learning Classrooms",
      subtitle: "Hands-on coding labs led by experienced fullstack architects.",
      image: classroomActionImg,
      tag: "Learning Mode",
      stats: { primary: "75,000+", label: "STUDENTS", rating: "4.9/5", access: "24/7 Access" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "IT Labs & Infrastructure",
      subtitle: "State-of-the-art coding setups configured for enterprise development stacks.",
      image: it2Img,
      tag: "Infrastructure",
      stats: { primary: "100%", label: "PRACTICAL", rating: "Modern Labs", access: "High Speed" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Advanced Tech Workshops",
      subtitle: "Interactive building days and collaborative coding bootcamps focusing on project execution.",
      image: gleamatorClassImg,
      tag: "Hackathons",
      stats: { primary: "500+", label: "PROJECTS", rating: "Interactive", access: "Industry Ready" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ];

  const data = {
    title: "Python Fullstack",
    highlightTitle: "Engineering",
    subtitle: "From fundamentals to production-grade architecture. Master interfaces, scalable backends, and modern AI pipelines through hands-on project execution.",
    techStack: [
      "Python", "Django", "React", "TypeScript",
      "PostgreSQL", "Docker", "AWS", "LangChain"
    ],
    syllabus: [
      {
        title: "Frontend Architecture",
        duration: "Phase 1 • Week 1-6",
        color: "text-rose-500",
        iconColor: "text-rose-500",
        iconBg: "bg-rose-50",
        icon: <Layers size={20} />,
        items: [
          "Interactive UI development using React 18, Hooks, and TypeScript.",
          "State management setups with Redux Toolkit and Context API.",
          "Data integration with Axios, REST clients, and Tailwind CSS layouts."
        ],
      },
      {
        title: "Backend Systems",
        duration: "Phase 2 • Week 7-14",
        color: "text-indigo-500",
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-50",
        icon: <TerminalSquare size={20} />,
        items: [
          "Advanced Python: OOP, Meta-programming, and Decorators.",
          "Django REST Framework (DRF): Serializers, Viewsets, and Filters.",
          "Robust API routing, Custom Middleware, and JWT Authentication."
        ],
      },
      {
        title: "Database & Cloud",
        duration: "Phase 3 • Week 15-16",
        color: "text-cyan-600",
        iconColor: "text-cyan-600",
        iconBg: "bg-cyan-50",
        icon: <Database size={20} />,
        items: [
          "PostgreSQL Schema optimization, Indexes, and Transactions.",
          "Dockerizing Python applications and multi-container Compose setups.",
          "AWS deployment basics (EC2, S3, RDS) and CI/CD pipelines."
        ],
      },
      {
        title: "AI Integration & Queues",
        duration: "Phase 4 • Week 17-18",
        color: "text-amber-500",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-50",
        icon: <BrainCircuit size={20} />,
        items: [
          "Retrieval-Augmented Generation (RAG) using LangChain agents.",
          "Vector databases (ChromaDB, Pinecone) semantic search integration.",
          "Asynchronous task queues using Celery, Redis, and WebSockets."
        ],
      },
    ],
    projects: [
      {
        title: "Enterprise E-Commerce Engine",
        description: "Production-ready, multi-tenant storefront with secure payments, resilient cart state, and real-time inventory pipelines.",
        tags: ["React", "Django", "PostgreSQL"],
        visualizer: <EcommerceVisualizer />
      },
      {
        title: "RAG-Powered AI Assistant",
        description: "A retrieval-augmented agent that ingests enterprise docs, performs semantic search, and serves context-aware answers.",
        tags: ["Python", "LangChain", "Vector DB"],
        visualizer: <RAGVisualizer />
      },
    ],
    successStories: [
      {
        name: "Aisha Rao", role: "Frontend Engineer", company: "BrightShop", package: "8.5 LPA",
        quote: "The hands-on projects and mentor feedback were instrumental in my transition.",
        initials: "AR", bg: "from-rose-400 to-pink-500"
      },
      {
        name: "Rohit Menon", role: "Backend Developer", company: "InfraScale", package: "10 LPA",
        quote: "Real production patterns, CI/CD practice and backend design made me job-ready.",
        initials: "RM", bg: "from-indigo-400 to-violet-500"
      },
      {
        name: "Priya Patel", role: "Fullstack Developer", company: "CloudNative", package: "12 LPA",
        quote: "Loved the AI integration phase! It gave me a unique edge during interviews.",
        initials: "PP", bg: "from-cyan-500 to-blue-500"
      },
      {
        name: "Sameer Sen", role: "Software Engineer", company: "LogiTech", package: "7.8 LPA",
        quote: "The placement team was very active. The mock interviews prepared me perfectly.",
        initials: "SS", bg: "from-amber-400 to-orange-500"
      }
    ]
  };

  return (
    <Layout>
      <div className="bg-[#FAFAFC] font-sans selection:bg-indigo-500/20 selection:text-indigo-900 overflow-x-hidden text-slate-900">

        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden border-b border-white">
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <motion.div
              animate={{ x: bgPosition.x, y: bgPosition.y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-indigo-400/20 blur-[100px] md:blur-[140px]"
            />
            <motion.div
              animate={{ x: -bgPosition.x, y: -bgPosition.y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-rose-400/20 blur-[100px] md:blur-[140px]"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

              <div className="flex flex-col gap-6 relative z-20 order-2 lg:order-1">
                <FadeUp delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-full w-max">
                    <Award size={16} className="text-indigo-500" />
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                      Official Cohort — 4.5 months
                    </span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    {data.title} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#4f46e5] to-[#06b6d4]">
                      {data.highlightTitle}
                    </span>
                  </h1>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="text-lg md:text-xl text-slate-500 font-normal max-w-xl leading-relaxed">
                    {data.subtitle}
                  </p>
                </FadeUp>

                <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-600 w-full sm:w-auto"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-2xl transition-all shadow-sm hover:bg-white w-full sm:w-auto"
                  >
                    View Curriculum
                  </button>
                </FadeUp>

                {/* Tech Stack Pills */}
                <FadeUp delay={0.5} className="mt-6 pt-6 border-t border-slate-200/60 flex flex-wrap gap-2 md:gap-2.5">
                  {data.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-1.5 bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl text-xs font-bold text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </FadeUp>
              </div>

              {/* Right Side Orbit - Fixed responsive scaling */}
              <FadeUp delay={0.2} className="relative w-full flex justify-center mt-12 lg:mt-0 order-1 lg:order-2">
                <ColorfulTechOrbit />
              </FadeUp>

            </div>
          </div>
        </section>


        {/* HIGH-END ALTERNATING ROADMAP */}
        <section id="roadmap" className="pt-10 pb-20 md:pt-12 md:pb-24 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200">
          <style>{`
            @keyframes roadFlowAnimation {
              to { stroke-dashoffset: -28; }
            }
            .animate-road-flow {
              animation: roadFlowAnimation 1.5s linear infinite;
            }
          `}</style>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

            <FadeUp className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full mb-6">
                <Target size={14} className="text-rose-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Curriculum Architecture
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Structured Progression
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                A blueprint designed for mastery. Transition from foundational architecture to advanced AI integration week over week.
              </p>
            </FadeUp>

            {/* DESKTOP WINDING ROAD TIMELINE */}
            <div className="relative w-[1000px] h-[980px] mx-auto hidden md:block">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 980" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 500,0 C 500,90 180,90 180,200 C 180,310 820,310 820,420 C 820,530 180,530 180,640 C 180,750 820,750 820,860 C 820,920 620,930 500,980" stroke="#f8fafc" strokeWidth="82" strokeLinecap="round" />
                <path d="M 500,0 C 500,90 180,90 180,200 C 180,310 820,310 820,420 C 820,530 180,530 180,640 C 180,750 820,750 820,860 C 820,920 620,930 500,980" stroke="#0f172a" strokeWidth="72" strokeLinecap="round" />
                <path d="M 500,0 C 500,90 180,90 180,200 C 180,310 820,310 820,420 C 820,530 180,530 180,640 C 180,750 820,750 820,860 C 820,920 620,930 500,980" stroke="#ffffff" strokeWidth="3" strokeDasharray="14 14" strokeLinecap="round" opacity="0.9" className="animate-road-flow" />

                {/* Animated course-specific Python icon moving along the path */}
                <foreignObject width="40" height="40" className="overflow-visible">
                  <div
                    style={{ transform: 'translate(-20px, -20px)' }}
                    className="w-10 h-10 rounded-full bg-white border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.7)] flex items-center justify-center p-1.5 animate-pulse"
                  >
                    <PythonIcon className="w-full h-full" />
                  </div>
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                    path="M 500,0 C 500,90 180,90 180,200 C 180,310 820,310 820,420 C 820,530 180,530 180,640 C 180,750 820,750 820,860 C 820,920 620,930 500,980"
                  />
                </foreignObject>

                <line x1="180" y1="200" x2="640" y2="200" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                <foreignObject x="156" y="176" width="48" height="48" className="overflow-visible">
                  <div className="w-12 h-12 rounded-full bg-white border border-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center animate-bounce text-rose-500">
                    <Layers size={22} className="animate-pulse" />
                  </div>
                </foreignObject>
                <circle cx="640" cy="200" r="4" fill="#f43f5e" />

                <line x1="820" y1="420" x2="360" y2="420" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                <foreignObject x="796" y="396" width="48" height="48" className="overflow-visible">
                  <div className="w-12 h-12 rounded-full bg-white border border-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center animate-bounce p-2.5">
                    <PythonIcon className="w-full h-full" />
                  </div>
                </foreignObject>
                <circle cx="360" cy="420" r="4" fill="#6366f1" />

                <line x1="180" y1="640" x2="640" y2="640" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" />
                <foreignObject x="156" y="616" width="48" height="48" className="overflow-visible">
                  <div className="w-12 h-12 rounded-full bg-white border border-cyan-200 shadow-[0_0_20px_rgba(8,145,178,0.4)] flex items-center justify-center animate-bounce text-cyan-600">
                    <Database size={22} className="animate-pulse" />
                  </div>
                </foreignObject>
                <circle cx="640" cy="640" r="4" fill="#0891b2" />

                <line x1="820" y1="860" x2="360" y2="860" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                <foreignObject x="796" y="836" width="48" height="48" className="overflow-visible">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center animate-bounce text-amber-400">
                    <BrainCircuit size={22} className="animate-pulse" />
                  </div>
                </foreignObject>
                <circle cx="360" cy="860" r="4" fill="#f59e0b" />

                {/* Starting Gate Node */}
                <circle cx="500" cy="15" r="12" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
                <circle cx="500" cy="15" r="5" fill="#10b981" className="animate-pulse" />

                {/* Ending Placement / Graduation Node */}
                <foreignObject x="476" y="930" width="48" height="48" className="overflow-visible">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.8)] flex items-center justify-center text-white">
                    <GraduationCap size={22} className="animate-bounce" />
                  </div>
                </foreignObject>
              </svg>

              <div className="absolute inset-0 z-10 pointer-events-none">
                {data.syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  const positions = [
                    { left: "640px", top: "110px", width: "360px" },
                    { left: "0px", top: "330px", width: "360px" },
                    { left: "640px", top: "550px", width: "360px" },
                    { left: "0px", top: "770px", width: "360px" }
                  ];

                  return (
                    <div key={index} style={{ position: "absolute", left: positions[index].left, top: positions[index].top, width: positions[index].width }} className="pointer-events-auto">
                      <FadeUp delay={0.1}>
                        <div className="relative bg-white/90 backdrop-blur-xl border border-white p-7 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group">
                          <div className={`absolute top-0 inset-x-0 h-1.5 bg-current`} style={{ color: step.iconColor.replace('text-', '') }} />
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/50 shadow-sm ${step.iconBg} ${step.iconColor}`}>
                                {step.icon}
                              </div>
                              <span className={`text-[11px] font-black tracking-widest uppercase ${step.color}`}>
                                {step.duration}
                              </span>
                            </div>
                            <span className="text-2xl font-black text-slate-100 select-none drop-shadow-sm">
                              {phaseNumber}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="space-y-3">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-3 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-indigo-400 group-hover/item:bg-indigo-50 transition-colors">
                                  <CheckCircle2 size={12} className="text-slate-400 group-hover/item:text-indigo-600 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-[13px] font-medium leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeUp>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MOBILE WAVY VERTICAL ROADMAP */}
            <div className="block md:hidden relative pl-16 sm:pl-20 pb-8 min-h-[900px]">
              {/* Vertical Winding SVG for Mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#f8fafc" strokeWidth="34" strokeLinecap="round" />
                  <path d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#0f172a" strokeWidth="28" strokeLinecap="round" />
                  <path d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" opacity="0.9" className="animate-road-flow" />
                </svg>
              </div>

              <div className="flex flex-col justify-between h-full space-y-12 relative z-10 py-10">
                {data.syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  // Calculate dynamic left position to follow the curve visually
                  const dotLeft = index % 2 === 0 ? '-8px' : '24px';

                  return (
                    <FadeUp key={index} delay={0.1} className="relative flex items-center min-h-[180px]">
                      {/* Node Point */}
                      <div
                        className="absolute z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                        style={{ left: dotLeft, top: '50%', transform: 'translateY(-50%)' }}
                      >
                        <span className="text-[10px] font-black text-white">{phaseNumber}</span>
                        <span className="absolute -inset-2 rounded-full border border-slate-900/20 animate-pulse bg-slate-900/5 -z-10" />
                      </div>

                      {/* Card Content */}
                      <div className="w-full pl-6">
                        <div className="relative bg-white/95 backdrop-blur-md border border-slate-200/60 p-6 sm:p-7 rounded-[1.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-current`} style={{ color: step.iconColor.replace('text-', '') }} />
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center border border-white/50 shadow-sm ${step.iconBg} ${step.iconColor}`}>
                                {step.icon}
                              </div>
                              <span className={`text-[10px] font-black tracking-widest uppercase ${step.color}`}>
                                {step.duration}
                              </span>
                            </div>
                            <span className="text-xl font-black text-slate-100 select-none">
                              {phaseNumber}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="space-y-2.5">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-2.5 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-indigo-400 group-hover/item:bg-indigo-50 transition-colors">
                                  <CheckCircle2 size={10} className="text-slate-400 group-hover/item:text-indigo-600 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-xs font-medium leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS & CAREER SLIDER SECTION */}
        <section className="pt-16 pb-6 md:pt-20 md:pb-8 bg-[#F4F4F6] text-slate-900 relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-indigo-200/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                Execution & Career Track
              </h2>
              <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed">
                Build production-grade systems and unlock placement assistance with top-tier hiring partners.
              </p>
            </FadeUp>

            {/* Featured Video Player Showcase */}
            <div className="max-w-4xl mx-auto mb-16">
              <FadeUp delay={0.1}>
                <div className="bg-white border border-slate-200/80 rounded-none shadow-2xl overflow-hidden p-3 md:p-5 group hover:shadow-indigo-100/30 transition-all duration-500">
                  <div className="relative aspect-video rounded-none overflow-hidden bg-slate-950 shadow-inner group/video">
                    <video
                      src={videoProject3}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                      poster={classroomActionImg}
                    />
                  </div>
                  <div className="pt-5 md:pt-6 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                        Student Reviews & Feedback
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm font-medium max-w-md leading-relaxed">
                      Hear directly from our graduates and students as they share their honest feedback, learning journeys, and project experiences at Gleamator Technologies.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Slider Container - Improved for Mobile */}
            <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[460px] w-full overflow-hidden py-2 md:py-4">

              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                }}
                className="absolute left-2 md:left-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-none border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-lg hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[320px] md:h-[400px]">
                <AnimatePresence mode="popLayout">
                  {mediaSlides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    const isPrev = index === (currentSlide === 0 ? mediaSlides.length - 1 : currentSlide - 1);
                    const isNext = index === (currentSlide === mediaSlides.length - 1 ? 0 : currentSlide + 1);

                    if (!isActive && !isPrev && !isNext) return null;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          scale: isActive ? 1 : 0.85,
                          x: isActive ? 0 : isPrev ? "-90%" : "90%",
                          opacity: isActive ? 1 : 0.4,
                          zIndex: isActive ? 20 : 10,
                          filter: isActive ? "blur(0px)" : "blur(8px)"
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        className="absolute w-[85vw] max-w-[320px] md:max-w-[640px] h-full rounded-none border border-slate-200/80 shadow-2xl overflow-hidden bg-white flex flex-col cursor-grab active:cursor-grabbing group"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = offset.x;
                          if (swipe < -50) {
                            setCurrentSlide((prev) => (prev === mediaSlides.length - 1 ? 0 : prev + 1));
                          } else if (swipe > 50) {
                            setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                          }
                        }}
                      >

                        <div className="relative w-full h-full overflow-hidden bg-slate-100 flex items-center justify-center">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                          />
                          {/* Dark bottom gradient overlay for title contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />

                          {/* Floating Title / Overview at the bottom of the photo */}
                          <div className="absolute bottom-6 left-6 right-6 z-10 text-white text-left">
                            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-md">
                              {slide.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === mediaSlides.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 md:right-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-none border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-lg hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
              {mediaSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); }}
                  className={`h-2 md:h-2.5 rounded-none transition-all duration-300 ${i === currentSlide ? "w-8 md:w-10 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "w-2 md:w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ENROLLMENT INQUIRY FORM */}
        <section id="admission-form" className="bg-white py-24 md:py-32 relative z-20 border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
                Admission & Inquiry
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                Submit your details below to schedule your qualification review and interview session.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

                {/* Left Column (Info Panel) */}
                <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-12 bg-slate-950 text-white rounded-none shadow-2xl relative overflow-hidden border border-slate-800">
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tr from-indigo-500/30 to-rose-500/30 blur-[100px] rounded-full" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Journey</span>
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-10">
                      Submit your application to align with the upcoming admission review cycle. Our review panel evaluates background and entry criteria.
                    </p>

                    <div className="space-y-6">
                      {[
                        { num: 1, title: "Review Profile", desc: "Admissions evaluates qualification details.", color: "indigo" },
                        { num: 2, title: "Assessment Call", desc: "Schedule a 15-minute diagnostic callback.", color: "rose" },
                        { num: 3, title: "Cohort Onboarding", desc: "Initialize repository and workspace setup.", color: "emerald" }
                      ].map((step) => (
                        <div key={step.num} className="flex items-start gap-4 group cursor-default">
                          <div className={`w-10 h-10 rounded-none bg-${step.color}-500/20 border border-${step.color}-500/30 flex items-center justify-center text-${step.color}-400 font-bold text-sm group-hover:scale-110 transition-transform`}>
                            {step.num}
                          </div>
                          <div className="mt-1">
                            <h4 className="font-bold text-sm text-white">{step.title}</h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-white/10 mt-10 flex items-center gap-4">
                    <img src={gicon} alt="Gleamator Logo" className="w-10 h-10 object-contain drop-shadow-md" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">Admissions Desk</span>
                      <span className="text-xs font-medium text-slate-400 mt-0.5">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right Column (Form Box) */}
                <div className="lg:col-span-3 bg-white border border-slate-200 p-8 md:p-12 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.05)] transition-all duration-500 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-[80px] -z-10" />

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-none flex items-center justify-center border border-emerald-100 shadow-lg mb-6 animate-bounce">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Application Received!</h3>
                      <p className="text-slate-500 max-w-md font-medium text-base leading-relaxed">
                        Thank you for your interest. A Gleamator admissions counselor will review your application and contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8 relative z-10">
                      {/* Small Gleamator Branding Header */}
                      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-2">
                        <img src={gicon} alt="Gleamator Icon" className="w-6 h-6 object-contain" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Gleamator Admissions Center</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors" />
                            <input
                              type="text" id="name" required placeholder="John Doe"
                              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
                            />
                            {formData.name.trim().length > 2 && (
                              <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors" />
                            <input
                              type="email" id="email" required placeholder="johndoe@example.com"
                              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
                            />
                            {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                              <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                            )}
                          </div>
                        </div>

                        {/* Mobile */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="mobile" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                            Mobile Number <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors" />
                            <input
                              type="tel" id="mobile" required placeholder="+91 98765 43210"
                              value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
                            />
                            {formData.mobile.trim().length >= 10 && (
                              <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                            )}
                          </div>
                        </div>

                        {/* Qualification */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="qualification" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                            Highest Qualification <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors" />
                            <input
                              type="text" id="qualification" required placeholder="B.E. Computer Science"
                              value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
                            />
                            {formData.qualification.trim().length > 2 && (
                              <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                            )}
                          </div>
                        </div>

                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-none shadow-xl shadow-slate-900/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300 w-full overflow-hidden"
                        >
                          <span className="relative z-10">Submit Application</span>
                          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </FadeUp>
          </div>
        </section>

        {/* ALUMNI REVIEWS */}
        <section className="py-24 md:py-32 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-100">
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 12px)); }
            }
            .animate-marquee-loop {
              display: flex;
              width: max-content;
              animation: marqueeScroll 30s linear infinite;
            }
            .animate-marquee-loop:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <FadeUp>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Student Success & Reviews
                </h2>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                  Discover how our intensive curriculum transformed careers and helped engineers land roles at top-tier companies.
                </p>
              </FadeUp>
            </div>

            {/* Horizontal Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden py-4 select-none">
              {/* Fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />

              <div className="flex gap-6 animate-marquee-loop">
                {/* Double the list for infinite looping */}
                {[...data.successStories, ...data.successStories].map((story, i) => (
                  <div
                    key={i}
                    className="w-[280px] md:w-[320px] flex-shrink-0 bg-white border border-slate-200 shadow-sm hover:shadow-2xl p-7 md:p-8 rounded-none flex flex-col justify-between h-[280px] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full -z-10" />
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <Quote size={24} className="text-slate-100 group-hover:text-indigo-100 transition-colors duration-500" />
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed mb-4 italic text-sm line-clamp-4">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mt-auto">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${story.bg} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                        {story.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-base">{story.name}</span>
                        <span className="text-xs font-semibold text-slate-500 tracking-wide mt-0.5">{story.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CoursePython;