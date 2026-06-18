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
import campusVisitImg from "@/assets/Campus visit.jpeg";
import certificateDayImg from "@/assets/Certificate day.jpeg";
import workshopDayImg from "@/assets/Workshop day.jpeg";

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

const ColorfulTechOrbit = () => {
  return (
    <div className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] mx-auto flex items-center justify-center scale-90 md:scale-100">
      {/* Center Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
        className="absolute z-30 w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_60px_rgba(99,102,241,0.3)] flex items-center justify-center border border-white"
      >
        <img src={gicon} alt="Gleamator Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md" />
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[60%] h-[60%] border border-indigo-200/50 border-dashed rounded-full"
      >
        <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm border border-white shadow-xl rounded-full flex items-center justify-center text-indigo-500">
          <BrainCircuit size={18} />
        </div>
        <div className="absolute -bottom-4 md:-bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm border border-white shadow-xl rounded-full flex items-center justify-center text-rose-500">
          <Cpu size={18} />
        </div>
      </motion.div>

      {/* Outer Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[100%] h-[100%] border border-slate-200/60 rounded-full"
      >
        <div className="absolute top-1/4 -left-4 md:-left-5 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-white shadow-xl rounded-full flex items-center justify-center text-cyan-500">
          <Database size={20} />
        </div>
        <div className="absolute top-1/4 -right-4 md:-right-5 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-white shadow-xl rounded-full flex items-center justify-center text-violet-500">
          <Cloud size={20} />
        </div>
        <div className="absolute -bottom-2 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-white shadow-xl rounded-full flex items-center justify-center text-amber-500">
          <Code2 size={20} />
        </div>
      </motion.div>
    </div>
  );
};

// --- Custom Visualizer Components ---

const ModelTrainingVisualizer = () => (
  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
    <div className="relative w-48 h-32 flex items-center justify-center gap-6">
      {/* Node Layers */}
      <div className="flex flex-col gap-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-4 h-4 rounded-full bg-indigo-500 border border-white shadow"
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 + 0.2 }}
            className="w-4 h-4 rounded-full bg-rose-500 border border-white shadow"
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          className="w-4 h-4 rounded-full bg-emerald-500 border border-white shadow"
        />
      </div>

      {/* Connection Paths SVG */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 192 128">
        <motion.path
          d="M48,36 L96,48 M48,64 L96,48 M48,92 L96,48 M96,48 L144,64"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  </div>
);

const MLOpsPipelineVisualizer = () => (
  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Central Registry Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-24 h-24 border border-dashed border-indigo-300 rounded-full flex items-center justify-center"
      >
        <div className="absolute top-0 w-6 h-6 bg-white shadow border rounded-full flex items-center justify-center">
          <Database size={10} className="text-indigo-500" />
        </div>
        <div className="absolute bottom-0 w-6 h-6 bg-white shadow border rounded-full flex items-center justify-center">
          <Server size={10} className="text-rose-500" />
        </div>
      </motion.div>

      {/* Center Brain Node */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl shadow-lg flex items-center justify-center z-10"
      >
        <BrainCircuit size={20} className="text-slate-700 animate-pulse" />
      </motion.div>
    </div>
  </div>
);

// --- Main Page Component ---

const CourseAIML = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mouse parallax background effect
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
      subtitle: "Hands-on coding labs led by experienced machine learning researchers.",
      image: classroomActionImg,
      tag: "Learning Mode",
      stats: { primary: "75,000+", label: "STUDENTS", rating: "4.9/5", access: "24/7 Access" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Placement Drives & Interviews",
      subtitle: "Weekly interview scheduling and direct placement referrals with AI engineering labs.",
      image: campusVisitImg,
      tag: "Placement",
      stats: { primary: "100+", label: "PARTNERS", rating: "92% Rate", access: "Referrals" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Certification Ceremonies",
      subtitle: "Industry-recognized credentials co-signed by leading data science academies.",
      image: certificateDayImg,
      tag: "Verification",
      stats: { primary: "Verifiable", label: "LINKEDIN", rating: "QA Valid", access: "ISO Cert" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Advanced Tech Workshops",
      subtitle: "Collaborative building days focusing on Large Language Models and MLOps deployment.",
      image: workshopDayImg,
      tag: "Hackathons",
      stats: { primary: "500+", label: "PROJECTS", rating: "Reviewed", access: "Git Verified" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    }
  ];

  const data = {
    title: "Applied AI & ML",
    highlightTitle: "Engineering",
    subtitle: "From dataset engineering to live model deployment. Master neural networks, deep learning systems, and production MLOps workflows.",
    techStack: [
      "Python", "PyTorch", "FastAPI", "Docker",
      "MLflow", "Pandas", "Scikit-Learn", "Hugging Face", "MLOps"
    ],
    syllabus: [
      {
        title: "Data & Math Foundations",
        duration: "Phase 1 • Week 1-6",
        color: "text-rose-500",
        iconColor: "text-rose-500",
        iconBg: "bg-rose-50",
        icon: <Layers size={20} />,
        items: [
          "Python data manipulation with Pandas, NumPy, and Matplotlib.",
          "Linear Algebra, Probability, and Statistical Inference fundamentals.",
          "Exploratory Data Analysis (EDA) and data preprocessing pipelines."
        ],
      },
      {
        title: "Applied Machine Learning",
        duration: "Phase 2 • Week 7-14",
        color: "text-indigo-500",
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-50",
        icon: <TerminalSquare size={20} />,
        items: [
          "Supervised learning: Regression, Classification, and Decision Trees.",
          "Unsupervised learning: Clustering algorithms and dimensionality reduction.",
          "Model evaluation: cross-validation, precision-recall, and bias-variance."
        ],
      },
      {
        title: "Deep Learning & Neural Networks",
        duration: "Phase 3 • Week 15-20",
        color: "text-cyan-600",
        iconColor: "text-cyan-600",
        iconBg: "bg-cyan-50",
        icon: <Database size={20} />,
        items: [
          "Building and optimization of neural network layers using PyTorch.",
          "Computer Vision (CNNs) and Natural Language Processing (RNNs, Transformers).",
          "Fine-tuning foundational models and integrating Hugging Face APIs."
        ],
      },
      {
        title: "Production Systems & MLOps",
        duration: "Phase 4 • Week 21-24",
        color: "text-amber-500",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-50",
        icon: <BrainCircuit size={20} />,
        items: [
          "Creating high-performance model serving endpoints using FastAPI.",
          "Containerizing inference engines with Docker and deploy pipeline setups.",
          "Tracking training cycles and versioning registry items via MLflow."
        ],
      },
    ],
    projects: [
      {
        title: "Predictive Intelligence Engine",
        description: "An end-to-end model pipeline performing active features generation, model selection, hyperparameter sweeps, and scoring metrics visualization.",
        tags: ["Python", "Scikit-Learn", "Pandas"],
        visualizer: <ModelTrainingVisualizer />
      },
      {
        title: "MLOps Serve & Registry",
        description: "Scale-ready FastAPI interface serving model predictions containerized with Docker, tracked with MLflow, and monitored for input drift.",
        tags: ["FastAPI", "Docker", "MLflow"],
        visualizer: <MLOpsPipelineVisualizer />
      },
    ],
    successStories: [
      {
        name: "Aditya Varma", role: "ML Engineer", company: "NeuralTech", package: "14 LPA",
        quote: "Getting hands-on experience with MLOps pipelines and neural network modeling was the highlight of this program.",
        initials: "AV", bg: "from-blue-400 to-indigo-500"
      },
      {
        name: "Priya Nair", role: "Data Scientist", company: "InsightAnalytics", package: "11.5 LPA",
        quote: "I transitioned from a non-tech background to a data science role. The mathematics foundations and modeling labs were perfect.",
        initials: "PN", bg: "from-emerald-400 to-teal-500"
      },
      {
        name: "Arjun Das", role: "Applied Scientist", company: "AI Solutions", package: "13 LPA",
        quote: "The focus on deploying models to production using FastAPI and Docker set this course apart from others.",
        initials: "AD", bg: "from-rose-400 to-pink-500"
      },
      {
        name: "Tanvi Shah", role: "MLOps Specialist", company: "AutoScale", package: "12 LPA",
        quote: "MLflow tracking and containerized deployments gave me exactly the skills needed for real-world enterprise ML teams.",
        initials: "TS", bg: "from-amber-400 to-orange-500"
      }
    ]
  };

  return (
    <Layout>
      <div className="bg-[#FAFAFC] font-sans selection:bg-indigo-500/20 selection:text-indigo-900 overflow-x-hidden text-slate-900">

        {/* HERO SECTION */}
        <section className="relative flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white">
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

              <div className="flex flex-col gap-6 relative z-20">
                <FadeUp delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-full w-max">
                    <Award size={16} className="text-indigo-500" />
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                      Official Cohort — 6-12 months (Hybrid)
                    </span>
                  </div>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    {data.title} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500">
                      {data.highlightTitle}
                    </span>
                  </h1>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                    {data.subtitle}
                  </p>
                </FadeUp>

                <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    onClick={() => navigate('/enroll', { state: { course: data.title } })}
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

              {/* Right Side Orbit */}
              <FadeUp delay={0.2} className="relative w-full flex justify-center mt-12 lg:mt-0">
                <ColorfulTechOrbit />
              </FadeUp>

            </div>
          </div>
        </section>

        {/* PROJECTS & CAREER SLIDER SECTION */}
        <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-indigo-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 shadow-sm rounded-full mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                  Real-World Execution
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                Execution & Career Track
              </h2>
              <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed">
                Build production-grade models and unlock direct placement tracks in advanced data science teams.
              </p>
            </FadeUp>

            {/* Slider Container */}
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[550px] w-full overflow-hidden py-4 md:py-8">

              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                  setIsVideoPlaying(false);
                }}
                className="absolute left-2 md:left-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[360px] md:h-[480px]">
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
                        className="absolute w-[85vw] max-w-[320px] md:max-w-[640px] h-full rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-slate-900 flex flex-col cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = offset.x;
                          if (swipe < -50) {
                            setCurrentSlide((prev) => (prev === mediaSlides.length - 1 ? 0 : prev + 1));
                            setIsVideoPlaying(false);
                          } else if (swipe > 50) {
                            setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                            setIsVideoPlaying(false);
                          }
                        }}
                      >
                        {isActive && (
                          <div className="absolute top-4 left-4 md:top-5 md:left-5 z-30 flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 bg-sky-500/90 text-white font-black text-[10px] md:text-xs tracking-wider uppercase rounded-full shadow-lg backdrop-blur-md">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse" />
                            {slide.tag}
                          </div>
                        )}

                        <div className="relative flex-grow w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                          {isActive && isVideoPlaying ? (
                            <video src={slide.videoUrl} className="absolute inset-0 w-full h-full object-cover" autoPlay controls muted loop />
                          ) : (
                            <>
                              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              {isActive && (
                                <button
                                  onClick={() => setIsVideoPlaying(true)}
                                  className="absolute z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-indigo-600/90 hover:border-transparent text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110"
                                >
                                  <Play size={24} className="ml-1" />
                                </button>
                              )}
                            </>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                        </div>

                        <div className="relative z-10 bg-slate-950/95 border-t border-white/10 p-5 md:p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-1 md:mb-2 tracking-tight">
                              {slide.title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm font-medium mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                              {slide.subtitle}
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-3 md:pt-4 border-t border-white/5 text-center">
                            <div className="flex flex-col">
                              <span className="text-base md:text-xl font-black text-sky-400">{slide.stats.primary}</span>
                              <span className="text-[8px] md:text-[9px] font-black text-slate-500 tracking-wider">{slide.stats.label}</span>
                            </div>
                            <div className="flex flex-col border-x border-white/5">
                              <span className="text-base md:text-xl font-black text-indigo-400">{slide.stats.rating}</span>
                              <span className="text-[8px] md:text-[9px] font-black text-slate-500 tracking-wider">RATING</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-base md:text-xl font-black text-emerald-400">{slide.stats.access}</span>
                              <span className="text-[8px] md:text-[9px] font-black text-slate-500 tracking-wider">SUPPORT</span>
                            </div>
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
                  setIsVideoPlaying(false);
                }}
                className="absolute right-2 md:right-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
              {mediaSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); setIsVideoPlaying(false); }}
                  className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 md:w-10 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "w-2 md:w-2.5 bg-slate-700 hover:bg-slate-500"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HIGH-END ALTERNATING ROADMAP */}
        <section id="roadmap" className="py-24 md:py-32 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200">
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
                A curriculum structured for mathematical and algorithmic rigor. Learn to process data, optimize models, and manage ML infrastructure.
              </p>
            </FadeUp>

            {/* DESKTOP WINDING ROAD TIMELINE */}
            <div className="relative w-[800px] h-[980px] mx-auto hidden md:block">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 980" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#f8fafc" strokeWidth="82" strokeLinecap="round" />
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#0f172a" strokeWidth="72" strokeLinecap="round" />
                <path d="M 400,0 C 400,90 160,90 160,200 C 160,310 640,310 640,420 C 640,530 160,530 160,640 C 160,750 640,750 640,860 C 640,920 500,930 400,980" stroke="#ffffff" strokeWidth="3" strokeDasharray="14 14" strokeLinecap="round" opacity="0.9" className="animate-road-flow" />

                <line x1="160" y1="200" x2="420" y2="200" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="200" r="8" fill="#f43f5e" className="animate-pulse" />
                <circle cx="420" cy="200" r="4" fill="#f43f5e" />

                <line x1="640" y1="420" x2="380" y2="420" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="420" r="8" fill="#6366f1" className="animate-pulse" />
                <circle cx="380" cy="420" r="4" fill="#6366f1" />

                <line x1="160" y1="640" x2="420" y2="640" stroke="#0891b2" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="640" r="8" fill="#0891b2" className="animate-pulse" />
                <circle cx="420" cy="640" r="4" fill="#0891b2" />

                <line x1="640" y1="860" x2="380" y2="860" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="860" r="8" fill="#f59e0b" className="animate-pulse" />
                <circle cx="380" cy="860" r="4" fill="#f59e0b" />
              </svg>

              <div className="absolute inset-0 z-10 pointer-events-none">
                {data.syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  const positions = [
                    { left: "420px", top: "110px", width: "350px" },
                    { left: "30px", top: "330px", width: "350px" },
                    { left: "420px", top: "550px", width: "350px" },
                    { left: "30px", top: "770px", width: "350px" }
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
                  const dotLeft = index % 2 === 0 ? '-8px' : '24px';

                  return (
                    <FadeUp key={index} delay={0.1} className="relative flex items-center min-h-[180px]">
                      <div
                        className="absolute z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                        style={{ left: dotLeft, top: '50%', transform: 'translateY(-50%)' }}
                      >
                        <span className="text-[10px] font-black text-white">{phaseNumber}</span>
                        <span className="absolute -inset-2 rounded-full border border-slate-900/20 animate-pulse bg-slate-900/5 -z-10" />
                      </div>

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

        {/* ENROLLMENT INQUIRY FORM */}
        <section className="bg-white py-24 md:py-32 relative z-20 border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 shadow-sm rounded-full mb-6">
                <Target size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Secure Your Seat
                </span>
              </div>
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
                <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-12 bg-slate-950 text-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-slate-800">
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tr from-indigo-500/30 to-rose-500/30 blur-[100px] rounded-full" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 backdrop-blur-md rounded-full mb-8">
                      <Sparkles size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Admission Process</span>
                    </div>
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
                          <div className={`w-10 h-10 rounded-xl bg-${step.color}-500/20 border border-${step.color}-500/30 flex items-center justify-center text-${step.color}-400 font-bold text-sm group-hover:scale-110 transition-transform`}>
                            {step.num}
                          </div>
                          <div className="mt-1">
                            <h4 className={`font-bold text-sm text-white group-hover:text-${step.color}-400 transition-colors`}>{step.title}</h4>
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
                <div className="lg:col-span-3 bg-white border border-slate-100 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.05)] transition-all duration-500 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-[80px] -z-10" />

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-lg mb-6 animate-bounce">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Application Received!</h3>
                      <p className="text-slate-500 max-w-md font-medium text-base leading-relaxed">
                        Thank you for your interest. A Gleamator admissions counselor will review your application and contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8 relative z-10">
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
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 outline-none rounded-2xl text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300 w-full overflow-hidden"
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
                  Alumni Experience
                </h2>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                  Discover how our intensive curriculum transformed careers and helped engineers land roles at top-tier companies.
                </p>
              </FadeUp>
            </div>

            {/* Horizontal Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden py-4 select-none">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />

              <div className="flex gap-6 animate-marquee-loop">
                {[...data.successStories, ...data.successStories].map((story, i) => (
                  <div
                    key={i}
                    className="w-[280px] md:w-[320px] flex-shrink-0 bg-white border border-slate-200 shadow-sm hover:shadow-2xl p-7 md:p-8 rounded-[2rem] flex flex-col justify-between h-[280px] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
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

export default CourseAIML;
