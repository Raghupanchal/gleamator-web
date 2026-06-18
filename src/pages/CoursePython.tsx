import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  Phone
} from "lucide-react";
import Layout from "@/components/Layout";
import gicon from "@/assets/gicon.png";
import classroomActionImg from "@/assets/Classroom action.jpg";
import campusVisitImg from "@/assets/Campus visit.jpeg";
import certificateDayImg from "@/assets/Certificate day.jpeg";
import workshopDayImg from "@/assets/Workshop day.jpeg";

// --- Utility Components ---

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ColorfulTechOrbit = () => {
  return (
    <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
      {/* Center Core */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
        className="absolute z-30 w-24 h-24 bg-white rounded-full shadow-[0_0_50px_rgba(99,102,241,0.25)] flex items-center justify-center border border-indigo-100"
      >
        <img src={gicon} alt="Gleamator Logo" className="w-16 h-16 object-contain" />
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[60%] h-[60%] border border-slate-200 border-dashed rounded-full"
      >
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border border-slate-100 shadow-lg rounded-full flex items-center justify-center text-indigo-500">
          <TerminalSquare size={18} />
        </div>
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border border-slate-100 shadow-lg rounded-full flex items-center justify-center text-rose-500">
          <LayoutTemplate size={18} />
        </div>
      </motion.div>

      {/* Outer Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[100%] h-[100%] border border-slate-100 rounded-full"
      >
        <div className="absolute top-1/4 -left-5 w-12 h-12 bg-white border border-slate-100 shadow-lg rounded-full flex items-center justify-center text-cyan-500">
          <Database size={20} />
        </div>
        <div className="absolute top-1/4 -right-5 w-12 h-12 bg-white border border-slate-100 shadow-lg rounded-full flex items-center justify-center text-violet-500">
          <Cloud size={20} />
        </div>
        <div className="absolute -bottom-2 left-1/4 w-12 h-12 bg-white border border-slate-100 shadow-lg rounded-full flex items-center justify-center text-amber-500">
          <Code2 size={20} />
        </div>
      </motion.div>
    </div>
  );
};

// --- Custom Visualizer Components ---

const EcommerceVisualizer = () => (
  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
    <div className="relative w-48 h-32">
      {/* Background Layer */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-4 right-4 h-full bg-white/50 border border-slate-200/50 rounded-xl shadow-sm backdrop-blur-sm"
      />
      {/* Middle Layer */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-4 left-2 right-2 h-full bg-white/80 border border-slate-200 rounded-xl shadow-md backdrop-blur-md"
      />
      {/* Foreground Layer */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-8 left-0 right-0 h-full bg-white border border-slate-200 rounded-xl shadow-xl flex flex-col p-3 gap-2 overflow-hidden"
      >
        <div className="w-full flex justify-between items-center border-b border-slate-100 pb-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
          <div className="w-12 h-2 bg-indigo-50 rounded-full" />
        </div>
        <div className="flex gap-2 h-full pt-1">
          <div className="w-1/3 h-full bg-slate-50 rounded border border-slate-100" />
          <div className="w-2/3 flex flex-col gap-2">
            <div className="w-full h-4 bg-indigo-50 rounded border border-indigo-100/50" />
            <div className="w-3/4 h-4 bg-rose-50 rounded border border-rose-100/50" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const RAGVisualizer = () => (
  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Center Brain Node */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
        className="absolute z-20 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-200"
      >
        <img src={gicon} alt="Gleamator Logo" className="w-9 h-9 object-contain" />
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 160 160">
        <motion.path
          d="M30,30 L80,80 M130,30 L80,80 M30,130 L80,80 M130,130 L80,80"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="text-slate-300"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data Nodes */}
      {[
        { top: '10%', left: '10%', icon: <Database size={12} className="text-indigo-500" /> },
        { top: '10%', right: '10%', icon: <LayoutTemplate size={12} className="text-rose-500" /> },
        { bottom: '10%', left: '10%', icon: <Code2 size={12} className="text-amber-500" /> },
        { bottom: '10%', right: '10%', icon: <Sparkles size={12} className="text-cyan-500" /> },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          className="absolute z-30 w-8 h-8 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center"
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
  const [activeTab, setActiveTab] = React.useState("projects");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile && formData.qualification) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", qualification: "" });
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
      title: "Placement Drives & Interviews",
      subtitle: "Weekly interview scheduling and direct placement referrals to 100+ hiring partners.",
      image: campusVisitImg,
      tag: "Placement Assistance",
      stats: { primary: "100+", label: "HIRING PARTNERS", rating: "92% Rate", access: "Direct Referrals" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Certification Ceremonies",
      subtitle: "Industry-recognized credentials presented by academic & corporate partners.",
      image: certificateDayImg,
      tag: "Verification Program",
      stats: { primary: "Verifiable", label: "PDF & LINKEDIN", rating: "Gleamator QA", access: "ISO Certified" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Advanced Tech Workshops",
      subtitle: "Collaborative building days focusing on database scaling, system design, and AI integration.",
      image: workshopDayImg,
      tag: "Hackathons",
      stats: { primary: "500+", label: "PROJECTS BUILT", rating: "Expert Review", access: "Git Verified" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    }
  ];

  const data = {
    title: "Python Fullstack",
    highlightTitle: "Engineering",
    subtitle: "From fundamentals to production-grade architecture. Master interfaces, scalable backends, and modern AI pipelines through hands-on project execution.",
    stats: [
      {
        label: "Engineers Graduated",
        value: "1.2k+",
        description: "Successfully transitioned into technical roles.",
        icon: <Users size={24} className="text-white" />,
        gradient: "from-slate-800 to-slate-900"
      },
      {
        label: "Placement Rate",
        value: "92%",
        description: "Hired within 6 months of graduation.",
        icon: <Target size={24} className="text-white" />,
        gradient: "from-indigo-500 to-violet-600"
      },
      {
        label: "Intensive Duration",
        value: "4.5 Mo",
        description: "Project-driven, hands-on daily execution.",
        icon: <Clock size={24} className="text-white" />,
        gradient: "from-rose-400 to-orange-500"
      },
    ],
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
          "Semantic layout structures and advanced Tailwind CSS grids.",
          "Modern JavaScript (ES6+), async data fetching, and DOM logic.",
          "React.js ecosystem: custom hooks, context, and state management."
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
          "Python deep dive: OOP, decorators, and memory management.",
          "Django & Flask RESTful API design and middleware routing.",
          "Secure authentication utilizing JWT and OAuth2.0 standards."
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
          "PostgreSQL schema design and complex relational queries.",
          "Docker containerization for consistent development environments.",
          "Automated CI/CD implementation via GitHub Actions."
        ],
      },
      {
        title: "AI Integration",
        duration: "Phase 4 • Week 17-18",
        color: "text-amber-500",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-50",
        icon: <BrainCircuit size={20} />,
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
        description: "Production-ready, multi-tenant storefront with secure payments, resilient cart state, and real-time inventory pipelines—built for scale.",
        tags: ["React", "Django", "PostgreSQL"],
      },
      {
        title: "RAG-Powered Assistant",
        description: "A retrieval-augmented assistant that ingests product docs, performs semantic search, and serves context-aware answers in production.",
        tags: ["Python", "LangChain", "Vector DB"],
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
      <div className="bg-[#FCFCFD] font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden text-slate-900">

        {/* HERO SECTION */}
        <section className="relative flex items-center pt-32 pb-24 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-50/50 blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-rose-50/50 blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

              <FadeUp className="flex flex-col gap-6 relative z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full w-max">
                  <Award size={16} className="text-indigo-500" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                    Official Cohort — 4.5 months
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  {data.title} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">
                    {data.highlightTitle}
                  </span>
                </h1>

                <p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                  {data.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    onClick={() => navigate('/enroll', { state: { course: data.title } })}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-800"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl transition-all shadow-sm hover:bg-slate-50"
                  >
                    View Curriculum
                  </button>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap gap-2.5">
                  {data.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="px-4 py-1.5 bg-white border border-slate-200 shadow-sm rounded-lg text-xs font-bold text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Right Side Orbit */}
              <FadeUp delay={0.2} className="relative hidden lg:block">
                <ColorfulTechOrbit />
              </FadeUp>

            </div>
          </div>
        </section>


        {/* PROJECTS & CAREER SLIDER SECTION */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Header */}
            <FadeUp className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800/80 border border-slate-700 shadow-sm rounded-full mb-6">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                  Real-World Execution
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                Execution & Career Track
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                Build production-grade systems and unlock placement assistance with top-tier hiring partners.
              </p>
            </FadeUp>

            {/* Slider Track Container */}
            <div className="relative flex items-center justify-center min-h-[480px] md:min-h-[550px] w-full overflow-visible py-8">

              {/* Left Arrow Button */}
              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                  setIsVideoPlaying(false);
                }}
                className="absolute left-4 md:left-12 z-30 w-12 h-12 rounded-full border border-white/20 bg-slate-800/80 hover:bg-slate-700/80 text-white flex items-center justify-center transition-all shadow-lg hover:scale-105"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Slider Track Layout */}
              <div className="relative flex items-center justify-center w-full max-w-4xl h-[400px] md:h-[480px] px-8">
                {mediaSlides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  const isPrev = index === (currentSlide === 0 ? mediaSlides.length - 1 : currentSlide - 1);
                  const isNext = index === (currentSlide === mediaSlides.length - 1 ? 0 : currentSlide + 1);

                  if (!isActive && !isPrev && !isNext) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 0.82,
                        x: isActive ? 0 : isPrev ? "-102%" : "102%",
                        opacity: isActive ? 1 : 0.35,
                        zIndex: isActive ? 20 : 10,
                        filter: isActive ? "blur(0px)" : "blur(4px)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="absolute w-full max-w-[280px] sm:max-w-[420px] md:max-w-[620px] h-full rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden bg-slate-950 flex flex-col"
                    >
                      {/* Badge / Tag at top-left */}
                      {isActive && (
                        <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-4 py-1.5 bg-sky-500/90 text-white font-black text-xs tracking-wider uppercase rounded-full shadow-md backdrop-blur-sm">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          {slide.tag}
                        </div>
                      )}

                      {/* Main media container */}
                      <div className="relative flex-grow w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                        {isActive && isVideoPlaying ? (
                          <video
                            src={slide.videoUrl}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            controls
                            muted
                            loop
                          />
                        ) : (
                          <>
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Play Overlay Button for Active Slide */}
                            {isActive && (
                              <button
                                onClick={() => setIsVideoPlaying(true)}
                                className="absolute z-20 w-16 h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                              >
                                <Play size={24} className="ml-1" />
                              </button>
                            )}
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                      </div>

                      {/* Slide Information & Stats Overlay at Bottom */}
                      <div className="relative z-10 bg-slate-950/95 border-t border-white/5 p-5 md:p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 tracking-tight">
                            {slide.title}
                          </h3>
                          <p className="text-slate-400 text-xs md:text-sm font-medium mb-4 leading-relaxed">
                            {slide.subtitle}
                          </p>
                        </div>

                        {/* Three Metric Columns */}
                        <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-center">
                          <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-black text-sky-400">
                              {slide.stats.primary}
                            </span>
                            <span className="text-[9px] font-black text-slate-500 tracking-wider">
                              {slide.stats.label}
                            </span>
                          </div>
                          <div className="flex flex-col border-x border-white/5">
                            <span className="text-lg md:text-xl font-black text-indigo-400">
                              {slide.stats.rating}
                            </span>
                            <span className="text-[9px] font-black text-slate-500 tracking-wider">
                              RATING
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-black text-emerald-400">
                              {slide.stats.access}
                            </span>
                            <span className="text-[9px] font-black text-slate-500 tracking-wider">
                              SUPPORT
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === mediaSlides.length - 1 ? 0 : prev + 1));
                  setIsVideoPlaying(false);
                }}
                className="absolute right-4 md:right-12 z-30 w-12 h-12 rounded-full border border-white/20 bg-slate-800/80 hover:bg-slate-700/80 text-white flex items-center justify-center transition-all shadow-lg hover:scale-105"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {mediaSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSlide(i);
                    setIsVideoPlaying(false);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-indigo-500" : "w-2.5 bg-slate-700"
                    }`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* HIGH-END ALTERNATING ROADMAP */}
        <section id="roadmap" className="py-32 bg-white relative overflow-hidden border-b border-slate-100">
          <style>{`
            @keyframes roadFlowAnimation {
              to {
                stroke-dashoffset: -28;
              }
            }
            .animate-road-flow {
              animation: roadFlowAnimation 1.2s linear infinite;
            }
          `}</style>
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-55/50 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">

            {/* Section Header */}
            <FadeUp className="text-center max-w-2xl mx-auto mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 shadow-sm rounded-full mb-6">
                <Target size={14} className="text-rose-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Curriculum Architecture
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Structured Progression
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                A carefully designed blueprint. We build your capability week over week, transitioning from foundational architecture to advanced AI integration.
              </p>
            </FadeUp>

            {/* DESKTOP WINDING ROAD TIMELINE */}
            <div className="relative w-[800px] h-[980px] mx-auto hidden md:block">
              {/* SVG Winding Road Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 980" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Winding Road Base Shadow */}
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#f1f5f9" strokeWidth="82" strokeLinecap="round" />
                {/* Winding Road Asphalt Base */}
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#1e293b" strokeWidth="72" strokeLinecap="round" />
                {/* Dashed Road Lanes */}
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#ffffff" strokeWidth="3" strokeDasharray="14 14" strokeLinecap="round" opacity="0.9" className="animate-road-flow" />

                {/* Connecting Lines and Glow Circles */}
                {/* Phase 1 Indicator */}
                <line x1="160" y1="200" x2="420" y2="200" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="200" r="8" fill="#f43f5e" className="animate-pulse" />
                <circle cx="420" cy="200" r="4" fill="#f43f5e" />

                {/* Phase 2 Indicator */}
                <line x1="640" y1="420" x2="380" y2="420" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="420" r="8" fill="#6366f1" className="animate-pulse" />
                <circle cx="380" cy="420" r="4" fill="#6366f1" />

                {/* Phase 3 Indicator */}
                <line x1="160" y1="640" x2="420" y2="640" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="640" r="8" fill="#0891b2" className="animate-pulse" />
                <circle cx="420" cy="640" r="4" fill="#0891b2" />

                {/* Phase 4 Indicator */}
                <line x1="640" y1="860" x2="380" y2="860" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="860" r="8" fill="#f59e0b" className="animate-pulse" />
                <circle cx="380" cy="860" r="4" fill="#f59e0b" />
              </svg>

              {/* Cards Absolutely Layered Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {data.syllabus.map((step, index) => {
                  const isEven = index % 2 === 0;
                  const phaseNumber = `0${index + 1}`;
                  // Alternating coordinates matching the SVG peaks
                  const positions = [
                    { left: "420px", top: "110px", width: "350px" }, // Phase 1
                    { left: "30px", top: "330px", width: "350px" },  // Phase 2
                    { left: "420px", top: "550px", width: "350px" }, // Phase 3
                    { left: "30px", top: "770px", width: "350px" }   // Phase 4
                  ];

                  return (
                    <div
                      key={index}
                      style={{
                        position: "absolute",
                        left: positions[index].left,
                        top: positions[index].top,
                        width: positions[index].width
                      }}
                      className="pointer-events-auto"
                    >
                      <FadeUp delay={0.05}>
                        <div className="relative bg-white/95 border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                          {/* Top Border Accent */}
                          <div className={`absolute top-0 inset-x-0 h-1 bg-current`} style={{ color: step.iconColor.replace('text-', '') }} />

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-white/50 shadow-sm ${step.iconBg} ${step.iconColor}`}>
                                {step.icon}
                              </div>
                              <span className={`text-[10px] font-black tracking-widest uppercase ${step.color}`}>
                                {step.duration}
                              </span>
                            </div>
                            <span className="text-xl font-black text-slate-200 select-none">
                              {phaseNumber}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                            {step.title}
                          </h3>

                          {/* Syllabus items */}
                          <div className="space-y-2">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-indigo-300 group-hover/item:bg-indigo-50 transition-colors">
                                  <CheckCircle2 size={10} className="text-slate-400 group-hover/item:text-indigo-600 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-[12px] font-medium leading-relaxed">
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

            {/* MOBILE COMPACT VERTICAL ROADMAP */}
            <div className="block md:hidden relative pl-20 pb-8">
              {/* Left winding road SVG */}
              <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Winding Road Base Shadow */}
                  <path d="M 40,0 C 40,90 16,90 16,200 C 16,310 64,310 64,420 C 64,530 16,530 16,640 C 16,750 64,750 64,860 C 64,920 50,930 40,1000" stroke="#f1f5f9" strokeWidth="34" strokeLinecap="round" />
                  {/* Winding Road Asphalt Base */}
                  <path d="M 40,0 C 40,90 16,90 16,200 C 16,310 64,310 64,420 C 64,530 16,530 16,640 C 16,750 64,750 64,860 C 64,920 50,930 40,1000" stroke="#1e293b" strokeWidth="28" strokeLinecap="round" />
                  {/* Dashed Road Lanes */}
                  <path d="M 40,0 C 40,90 16,90 16,200 C 16,310 64,310 64,420 C 64,530 16,530 16,640 C 16,750 64,750 64,860 C 64,920 50,930 40,1000" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" opacity="0.9" className="animate-road-flow" />
                </svg>
              </div>

              <div className="space-y-12 relative z-10">
                {data.syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  return (
                    <FadeUp key={index} delay={0.05} className="relative flex items-center min-h-[160px]">
                      {/* Left Side Dot sitting on the winding road peaks */}
                      <div
                        className="absolute z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                        style={{
                          left: index % 2 === 0 ? '0px' : '48px',
                          top: '50%',
                          transform: 'translateY(-50%)'
                        }}
                      >
                        <span className="text-[10px] font-black text-white">{phaseNumber}</span>
                        {/* Glow ring */}
                        <span className="absolute -inset-1.5 rounded-full border border-slate-900/30 animate-pulse bg-slate-900/5 -z-10" />
                      </div>

                      {/* Card block */}
                      <div className="flex-grow pl-4">
                        <div className="relative bg-white/95 border border-slate-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                          {/* Top Border Accent */}
                          <div className={`absolute top-0 inset-x-0 h-1 bg-current`} style={{ color: step.iconColor.replace('text-', '') }} />

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-white/50 shadow-sm ${step.iconBg} ${step.iconColor}`}>
                                {step.icon}
                              </div>
                              <span className={`text-[10px] font-black tracking-widest uppercase ${step.color}`}>
                                {step.duration}
                              </span>
                            </div>
                            <span className="text-xl font-black text-slate-200 select-none">
                              {phaseNumber}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                            {step.title}
                          </h3>

                          {/* Syllabus items */}
                          <div className="space-y-2">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-indigo-300 group-hover/item:bg-indigo-50 transition-colors">
                                  <CheckCircle2 size={10} className="text-slate-400 group-hover/item:text-indigo-600 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-[12px] font-medium leading-relaxed">
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

        {/* ENROLLMENT INQUIRY FORM */}
        <section className="bg-[#FCFCFD] py-24 relative z-20 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 shadow-sm rounded-full mb-6">
                <Target size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Secure Your Seat
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Admission & Inquiry Form
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium">
                Submit your details below to schedule your qualification review and interview session.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid lg:grid-cols-5 gap-8 items-stretch">

                {/* Left Column (Info Panel) */}
                <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-10 bg-slate-950 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-800">
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-tr from-indigo-500/20 to-rose-500/20 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-6">
                      <Sparkles size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Admission Process</span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Journey</span>
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-8">
                      Submit your application to align with the upcoming admission review cycle. Our review panel evaluates background and entry criteria.
                    </p>

                    {/* Step Indicators */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm group-hover:scale-110 transition-transform">1</div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-indigo-400 transition-colors">Review Profile</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Admissions evaluates qualification details.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-sm group-hover:scale-110 transition-transform">2</div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-rose-400 transition-colors">Assessment Call</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Schedule a 15-minute diagnostic callback.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm group-hover:scale-110 transition-transform">3</div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">Cohort Onboarding</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Initialize repository access and workspace setup.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-white/10 mt-8 flex items-center gap-3">
                    <img src={gicon} alt="Gleamator Logo" className="w-8 h-8 object-contain" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">Admissions Desk</span>
                      <span className="text-[10px] text-slate-400">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right Column (Form Box) */}
                <div className="lg:col-span-3 bg-white border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:border-indigo-200 transition-all duration-300 flex flex-col justify-center">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm mb-6 animate-bounce">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                      <p className="text-slate-500 max-w-md font-medium text-sm md:text-base leading-relaxed">
                        Thank you for your interest. A Gleamator admissions counselor will contact you shortly to review your qualification.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">

                        {/* Name input */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 transition-colors" />
                            <input
                              type="text"
                              id="name"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/30 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-medium transition-all duration-300 shadow-sm"
                            />
                          </div>
                        </div>

                        {/* Email input */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="email"
                              id="email"
                              required
                              placeholder="johndoe@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/30 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-medium transition-all duration-300 shadow-sm"
                            />
                          </div>
                        </div>

                        {/* Mobile input */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="mobile" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Mobile Number <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative group/input">
                            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="tel"
                              id="mobile"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.mobile}
                              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100/50 outline-none rounded-xl text-sm md:text-base text-slate-900 font-medium transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Qualification input */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="qualification" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Highest Qualification <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              id="qualification"
                              required
                              placeholder="B.E. Computer Science, MCA, etc."
                              value={formData.qualification}
                              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100/50 outline-none rounded-xl text-sm md:text-base text-slate-900 font-medium transition-all duration-300"
                            />
                          </div>
                        </div>

                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95 duration-300 w-full"
                        >
                          <span>Submit Inquiry</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
        <section className="py-24 bg-[#FCFCFD] relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Alumni Experience
                </h2>
                <p className="text-slate-500 text-lg font-medium">
                  Discover how our intensive curriculum transformed careers and helped students land roles at top companies.
                </p>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.successStories.map((story, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="bg-white border border-slate-100 shadow-sm hover:shadow-xl p-6 rounded-3xl flex flex-col justify-between h-full transition-all duration-300">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={12} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <Quote size={20} className="text-slate-200" />
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6 italic text-sm">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${story.bg} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        {story.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-sm">{story.name}</span>
                        <span className="text-xs text-slate-500">{story.role}</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>


      </div>
    </Layout>
  );
};

export default CoursePython;