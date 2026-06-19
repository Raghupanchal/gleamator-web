import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  TerminalSquare,
  Database,
  BrainCircuit,
  ArrowRight,
  Layers,
  Award,
  Code2,
  CheckCircle2,
  Star,
  Quote,
  Briefcase,
  GraduationCap,
  User,
  Mail,
  Phone,
  Server,
  MonitorPlay,
  Building2,
  Trophy,
  Rocket,
  Cloud,
  Cpu,
  Play,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Activity,
  Workflow,
  TrendingUp
} from "lucide-react";
import Layout from "@/components/Layout";

// Image assets
import gicon from "@/assets/gicon.png";
import classroomActionImg from "@/assets/Classroom action.jpg";
import it2Img from "@/assets/it2.jpeg";
import gleamatorClassImg from "@/assets/gleamatorclass.png";

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

// --- Custom High-End Visualizers ---

const JavaIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

// 1. Cloud & DevOps Tech Orbit (Hero visualizer)
const CloudDevOpsOrbit = () => {
  return (
    <div className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] mx-auto flex items-center justify-center scale-90 md:scale-100">
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 rounded-full bg-red-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-amber-500/5 blur-[60px] pointer-events-none" />

      {/* Pulsing Core Aura */}
      <div className="absolute z-20 w-28 h-28 bg-red-500/5 rounded-full animate-ping pointer-events-none" />
      <div className="absolute z-20 w-32 h-32 bg-red-500/5 rounded-full animate-pulse pointer-events-none" />

      {/* Center Core - Constant (No rotation or scaling animations) */}
      <div className="absolute z-30 w-24 h-24 bg-gradient-to-br from-white via-red-50/50 to-orange-50 rounded-full shadow-[0_8px_30px_rgba(239,68,68,0.12)] flex flex-col items-center justify-center border border-red-500/20">
        <img src={gicon} alt="Gleamator Logo" className="w-10 h-10 object-contain drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)] mb-1" />
        <span className="text-[10px] font-black tracking-wider text-red-600">JAVA</span>
      </div>

      {/* Decorative Outer Ring */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.02, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute z-0 w-[80%] h-[80%] border border-dashed border-red-500/20 rounded-full"
      />

      {/* Inner Orbit (Java & Spring Boot Core) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[64%] h-[64%] border border-red-500/20 border-dashed rounded-full"
      >
        {/* Java Icon - Top */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border border-red-200/80 shadow-md rounded-2xl flex items-center justify-center text-red-500 hover:scale-110 transition-transform cursor-pointer group"
        >
          <JavaIcon className="w-5 h-5 text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]" />
          <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap">Java SE</span>
        </motion.div>

        {/* Spring Boot - Bottom Right */}
        <motion.div
          animate={{ x: [0, 2, 0], y: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1 -right-2 w-9 h-9 bg-white border border-green-200/80 shadow-md rounded-xl flex items-center justify-center text-green-600"
        >
          <Code2 size={18} />
        </motion.div>

        {/* AWS Cloud - Bottom Left */}
        <motion.div
          animate={{ x: [0, -2, 0], y: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1 -left-2 w-9 h-9 bg-white border border-amber-200/80 shadow-md rounded-xl flex items-center justify-center text-amber-600"
        >
          <Cloud size={18} />
        </motion.div>
      </motion.div>

      {/* Outer Orbit (DevOps & Databases) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[96%] h-[96%] border border-slate-200 rounded-full"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-5 w-11 h-11 bg-white border border-blue-200/80 shadow-md rounded-2xl flex items-center justify-center text-blue-600 hover:scale-110 transition-transform cursor-pointer group"
        >
          <Database size={20} />
          <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap">PostgreSQL</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-1/4 -right-5 w-11 h-11 bg-white border border-orange-200/80 shadow-md rounded-2xl flex items-center justify-center text-orange-650 hover:scale-110 transition-transform cursor-pointer group"
        >
          <Layers size={20} />
          <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap">Docker</span>
        </motion.div>

        <motion.div
          animate={{ x: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -bottom-2 left-1/4 w-11 h-11 bg-white border border-sky-200/80 shadow-md rounded-2xl flex items-center justify-center text-sky-600 hover:scale-110 transition-transform cursor-pointer group"
        >
          <Cpu size={20} />
          <span className="absolute -bottom-8 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap">Kubernetes</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

// 2. Microservices Engine Visualizer
const MicroservicesEngineVisualizer = () => {
  const [activeRoute, setActiveRoute] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerSimulation = (route) => {
    if (isSimulating) return;
    setActiveRoute(route);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveRoute(null);
    }, 2500);
  };

  return (
    <div className="relative w-full h-full min-h-[220px] bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
          <Activity size={12} className="text-red-500 animate-pulse" />
          Microservices Topology
        </span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
      </div>

      <div className="relative flex-grow flex items-center justify-between py-4">
        {/* Client Request Node */}
        <div className="flex flex-col items-center z-10">
          <button
            onClick={() => triggerSimulation("order")}
            disabled={isSimulating}
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${isSimulating ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
          >
            <User size={18} />
          </button>
          <span className="text-[10px] font-bold text-slate-400 mt-1">Client API</span>
        </div>

        {/* SVG Path Connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
          {/* Path to Gateway */}
          <path d="M 40,75 L 100,75" stroke="#334155" strokeWidth="2" />
          {/* Path Gateway to Auth */}
          <path d="M 140,75 C 170,75 170,40 200,40" stroke={activeRoute === "order" ? "#ef4444" : "#334155"} strokeWidth="2" strokeDasharray={activeRoute === "order" ? "5 5" : "none"} />
          {/* Path Gateway to Order */}
          <path d="M 140,75 C 170,75 170,110 200,110" stroke={activeRoute === "order" ? "#f59e0b" : "#334155"} strokeWidth="2" strokeDasharray={activeRoute === "order" ? "5 5" : "none"} />

          {/* Animated data packet indicator */}
          {isSimulating && (
            <motion.circle
              r="4"
              fill={activeRoute === "order" ? "#ef4444" : "#f59e0b"}
              animate={{
                cx: [40, 100, 140, 170, 200],
                cy: [75, 75, 75, 50, 40]
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </svg>

        {/* API Gateway */}
        <div className="flex flex-col items-center z-10">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 shadow-lg">
            <Cpu size={22} className="text-red-400" />
          </div>
          <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Gateway</span>
        </div>

        {/* Target Services */}
        <div className="flex flex-col gap-6 z-10">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-slate-900 border flex items-center justify-center transition-colors ${activeRoute === "order" ? "border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "border-slate-800 text-slate-400"}`}>
              <Server size={16} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-white leading-none">Auth Service</span>
              <span className="text-[8px] text-slate-500 font-semibold">Port 8081</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-slate-900 border flex items-center justify-center transition-colors ${activeRoute === "order" ? "border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]" : "border-slate-800 text-slate-400"}`}>
              <Database size={16} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-white leading-none">Order Engine</span>
              <span className="text-[8px] text-slate-500 font-semibold">Port 8082</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => triggerSimulation("order")}
        className="w-full py-2 bg-slate-900 hover:bg-red-950/40 text-slate-300 hover:text-white border border-slate-800 hover:border-red-500/30 rounded-xl text-xs font-bold transition-all"
      >
        {isSimulating ? "Routing Packets..." : "Test Gateway Routing"}
      </button>
    </div>
  );
};

// 3. Cloud DevOps CI/CD Pipeline Visualizer
const CloudDevOpsPipelineVisualizer = () => {
  const [pipelineState, setPipelineState] = useState("idle"); // idle, git, build, package, deploy, success
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  const runPipeline = () => {
    if (pipelineState !== "idle") return;
    setLogs([]);
    setPipelineState("git");
    addLog("Git Commit detected: 'feat: add resilient retry policy in spring boot'", 200);

    setTimeout(() => {
      setPipelineState("build");
      addLog("Maven lifecycle started. Compiling src/main/java...", 500);
      addLog("Running JUnit 5 integration test suite...", 900);
      addLog("Test report: 28 tests run. 0 failures.", 1200);
    }, 1500);

    setTimeout(() => {
      setPipelineState("package");
      addLog("Building Docker multi-stage image. Base: Eclipse Temurin JDK 21", 1700);
      addLog("Pushing image to AWS ECR: app-service:latest", 2400);
    }, 3200);

    setTimeout(() => {
      setPipelineState("deploy");
      addLog("Updating AWS Kubernetes deployments config...", 3600);
      addLog("Rolling update deployed to EKS cluster node-1.", 4100);
    }, 4800);

    setTimeout(() => {
      setPipelineState("success");
      addLog("Deployment pipeline completed. Healthcheck: OK.", 4500);
    }, 6000);
  };

  const addLog = (msg, delay) => {
    setTimeout(() => {
      setLogs((prev) => [...prev, `[pipeline] ${msg}`]);
    }, delay);
  };

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="relative w-full h-full min-h-[220px] bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3">
        <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
          <GitBranch size={12} className="text-amber-500 animate-pulse" />
          DevOps Pipeline Status
        </span>
        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${pipelineState === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
            pipelineState !== "idle" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse" :
              "bg-slate-800 text-slate-500"
          }`}>
          {pipelineState}
        </span>
      </div>

      {/* Interactive Stages Progress */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { key: "git", label: "Source" },
          { key: "build", label: "Test/Build" },
          { key: "package", label: "Dockerize" },
          { key: "deploy", label: "AWS Deploy" }
        ].map((stage, i) => {
          const isDone = ["build", "package", "deploy", "success"].slice(i).includes(pipelineState) || pipelineState === "success";
          const isCurrent = pipelineState === stage.key;
          return (
            <div key={stage.key} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border text-[10px] font-black transition-all duration-300 ${isDone ? "bg-green-500/20 border-green-500 text-green-400" :
                  isCurrent ? "bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)] animate-pulse" :
                    "bg-slate-900 border-slate-800 text-slate-600"
                }`}>
                {i + 1}
              </div>
              <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-wider">{stage.label}</span>
            </div>
          );
        })}
      </div>

      {/* Terminal log panel */}
      <div className="bg-slate-900/80 rounded-xl p-3 h-20 overflow-y-auto font-mono text-[9px] text-slate-400 space-y-1 border border-slate-800">
        {logs.length === 0 ? (
          <span className="text-slate-600 italic">Click Run Pipeline to view build outputs...</span>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="leading-tight break-all">
              <span className="text-amber-500">▶</span> {log}
            </div>
          ))
        )}
        <div ref={logsEndRef} />
      </div>

      <button
        onClick={() => {
          if (pipelineState === "success") {
            setPipelineState("idle");
            setLogs([]);
          } else {
            runPipeline();
          }
        }}
        className="w-full mt-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-bold transition-all"
      >
        {pipelineState === "success" ? "Reset Pipeline" : pipelineState !== "idle" ? "Building..." : "Run Deploy Pipeline"}
      </button>
    </div>
  );
};

const CourseJava = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", qualification: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBgPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 35,
        y: (e.clientY / window.innerHeight - 0.5) * 35,
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
    { image: classroomActionImg },
    { image: it2Img },
    { image: gleamatorClassImg }
  ];

  const syllabus = [
    {
      phase: "Phase 1",
      title: "Java Foundations & DSA",
      duration: "Weeks 1-8",
      color: "text-red-500",
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
      icon: <Code2 size={18} />,
      items: [
        "Core Java 21: Threads, virtual threads, and memory optimization.",
        "Deep DSA: Advanced arrays, custom collections framework, and key sorting."
      ]
    },
    {
      phase: "Phase 2",
      title: "Enterprise Backend with Spring",
      duration: "Weeks 9-16",
      color: "text-amber-500",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
      icon: <Server size={18} />,
      items: [
        "Spring Boot 3: Deep dive MVC structure, bean configs, and properties.",
        "Secure APIs: JPA/Hibernate configurations, Security filters, and JWT."
      ]
    },
    {
      phase: "Phase 3",
      title: "Cloud & DevOps Architecture",
      duration: "Weeks 17-24",
      color: "text-blue-500",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
      icon: <Cloud size={18} />,
      items: [
        "Containers: Multi-stage Docker optimization for deployment.",
        "Cloud Setup: AWS systems, EC2 networking, RDS deployment, and VPC configs."
      ]
    },
    {
      phase: "Phase 4",
      title: "Microservices & CI/CD",
      duration: "Weeks 25-32",
      color: "text-green-500",
      iconColor: "text-green-500",
      iconBg: "bg-green-50",
      icon: <TerminalSquare size={18} />,
      items: [
        "CI/CD: DevOps automation via GitHub Actions runners.",
        "Messaging: High-availability message queues using Kafka."
      ]
    }
  ];

  const toolsData = [
    { name: "Java 21", desc: "Virtual Threads & Core OOP", icon: <Code2 />, color: "text-red-500", bg: "bg-red-50", hoverBorder: "hover:border-red-300 hover:shadow-red-500/10 hover:bg-red-50/10" },
    { name: "Spring Boot", desc: "Enterprise MVC & Security", icon: <Layers />, color: "text-green-600", bg: "bg-green-50", hoverBorder: "hover:border-green-300 hover:shadow-green-500/10 hover:bg-green-50/10" },
    { name: "Microservices", desc: "Saga Pattern & API Gateways", icon: <Server />, color: "text-indigo-500", bg: "bg-indigo-50", hoverBorder: "hover:border-indigo-300 hover:shadow-indigo-500/10 hover:bg-indigo-50/10" },
    { name: "React.js", desc: "Dynamic State & Modern SPA UI", icon: <MonitorPlay />, color: "text-cyan-500", bg: "bg-cyan-50", hoverBorder: "hover:border-cyan-300 hover:shadow-cyan-500/10 hover:bg-cyan-50/10" },
    { name: "PostgreSQL", desc: "Relational Queries & Indexing", icon: <Database />, color: "text-blue-500", bg: "bg-blue-50", hoverBorder: "hover:border-blue-300 hover:shadow-blue-500/10 hover:bg-blue-50/10" },
    { name: "Docker & AWS", desc: "Cloud Networks & CI/CD Pipelines", icon: <TerminalSquare />, color: "text-orange-500", bg: "bg-orange-50", hoverBorder: "hover:border-orange-300 hover:shadow-orange-500/10 hover:bg-orange-50/10" },
  ];

  return (
    <Layout>
      <div className="bg-[#FAF9F5] font-sans selection:bg-red-500/20 selection:text-red-900 overflow-x-hidden text-slate-900">

        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden border-b border-white">
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <motion.div
              animate={{ x: bgPosition.x, y: bgPosition.y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-red-400/20 blur-[100px] md:blur-[140px]"
            />
            <motion.div
              animate={{ x: -bgPosition.x, y: -bgPosition.y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-amber-400/20 blur-[100px] md:blur-[140px]"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

              <div className="flex flex-col gap-6 relative z-20 order-2 lg:order-1">


                <FadeUp delay={0.2}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    Java Full Stack <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-500">
                      with Cloud & DevOps
                    </span>
                  </h1>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                    Transform from a programmer to an enterprise software architect. Master microservices, Docker clusters, AWS cloud networks, and automated CI/CD pipelines.
                  </p>
                </FadeUp>

                <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-red-650 w-full sm:w-auto"
                  >
                    <span>Apply for Next Cohort</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-2xl transition-all shadow-sm hover:bg-white w-full sm:w-auto"
                  >
                    View Curriculum
                  </button>
                </FadeUp>

                {/* Status features */}
                <FadeUp delay={0.5} className="mt-8 flex items-center gap-6 text-slate-500 font-semibold text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 100% Placement Support</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Cloud Labs Included</div>
                </FadeUp>
              </div>

              {/* Right Side Orbit Visualizer */}
              <FadeUp delay={0.2} className="relative w-full flex justify-center mt-12 lg:mt-0 order-1 lg:order-2">
                <CloudDevOpsOrbit />
              </FadeUp>

            </div>
          </div>
        </section>

        {/* INDUSTRY TOOLS GRID */}
        <section className="py-20 bg-gradient-to-b from-white to-[#FAF9F5] border-b border-slate-100 relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .animate-marquee-infinite:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <FadeUp className="text-center mb-12">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Production-Ready Stack
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Master the Exact Tools Used by Top Tech Companies
              </h2>
            </FadeUp>
          </div>

          {/* Marquee Wrapper with fade effects on edges */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-40 after:bg-gradient-to-l after:from-[#FAF9F5] after:to-transparent py-4">
            <div className="animate-marquee-infinite gap-6 px-4">
              {/* Render twice for seamless looping */}
              {[...toolsData, ...toolsData].map((tool, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 ${tool.hoverBorder} shadow-sm hover:shadow-xl cursor-default group w-[280px] flex-shrink-0 hover:scale-105 transform`}
                >
                  <div className={`w-12 h-12 rounded-xl ${tool.bg} ${tool.color} flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-300`}>
                    {React.cloneElement(tool.icon, { size: 24 })}
                  </div>
                  <div className="text-left">
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-slate-950 transition-colors leading-tight mb-0.5">{tool.name}</h3>
                    <p className="text-[10px] font-semibold text-slate-500 leading-snug">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIGH-END TIMELINE ROADMAP */}
        <section id="curriculum" className="py-24 md:py-32 bg-[#FAF9F5] relative overflow-hidden border-b border-slate-250">
          <style>{`
            @keyframes pipelineFlowAnimation {
              to { stroke-dashoffset: -32; }
            }
            .animate-pipeline-flow {
              animation: pipelineFlowAnimation 1.2s linear infinite;
            }
          `}</style>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-400/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full mb-6">
                <Activity size={14} className="text-red-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Course Timeline Path
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Student Learning Journey
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Watch the student icon navigate through advanced microservice clusters and Cloud deployment stages.
              </p>
            </FadeUp>

            {/* DESKTOP PIPELINE ROADMAP (Expanded spacing to prevent card overlap) */}
            <div className="relative w-[800px] h-[1150px] mx-auto hidden md:block">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 1150" fill="none">
                <path d="M 400,0 C 400,100 160,100 160,220 C 160,340 640,340 640,470 C 640,590 160,590 160,720 C 160,840 640,840 640,970 C 640,1030 500,1040 400,1100" stroke="#f1f5f9" strokeWidth="82" strokeLinecap="round" />
                <path id="timeline-path" d="M 400,0 C 400,100 160,100 160,220 C 160,340 640,340 640,470 C 640,590 160,590 160,720 C 160,840 640,840 640,970 C 640,1030 500,1040 400,1100" stroke="#1e293b" strokeWidth="72" strokeLinecap="round" />
                <path d="M 400,0 C 400,100 160,100 160,220 C 160,340 640,340 640,470 C 640,590 160,590 160,720 C 160,840 640,840 640,970 C 640,1030 500,1040 400,1100" stroke="#ffffff" strokeWidth="3" strokeDasharray="14 14" strokeLinecap="round" opacity="0.9" className="animate-pipeline-flow" />

                {/* Connectors */}
                <line x1="160" y1="220" x2="420" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="220" r="8" fill="#ef4444" className="animate-pulse" />
                <circle cx="420" cy="220" r="4" fill="#ef4444" />

                <line x1="640" y1="470" x2="380" y2="470" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="470" r="8" fill="#f59e0b" className="animate-pulse" />
                <circle cx="380" cy="470" r="4" fill="#f59e0b" />

                <line x1="160" y1="720" x2="420" y2="720" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="160" cy="720" r="8" fill="#3b82f6" className="animate-pulse" />
                <circle cx="420" cy="720" r="4" fill="#3b82f6" />

                <line x1="640" y1="970" x2="380" y2="970" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="640" cy="970" r="8" fill="#10b981" className="animate-pulse" />
                <circle cx="380" cy="970" r="4" fill="#10b981" />

                {/* Animated Destination Flag (Trophy) */}
                <foreignObject x="384" y="1050" width="32" height="32">
                  <div className="text-amber-500 animate-bounce">
                    <Trophy size={28} />
                  </div>
                </foreignObject>

                {/* Animated Student/AI Node Running Along Path */}
                <g>
                  <foreignObject width="32" height="32" x="-16" y="-16">
                    <div className="bg-red-500 text-white rounded-full p-1.5 shadow-lg border-2 border-white flex items-center justify-center animate-pulse">
                      <GraduationCap size={16} />
                    </div>
                  </foreignObject>
                  <animateMotion
                    dur="10s"
                    repeatCount="indefinite"
                  >
                    <mpath href="#timeline-path" />
                  </animateMotion>
                </g>
              </svg>

              <div className="absolute inset-0 z-10 pointer-events-none">
                {syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  // Dynamic height spacing
                  const positions = [
                    { left: "420px", top: "130px", width: "340px" },
                    { left: "30px", top: "380px", width: "340px" },
                    { left: "420px", top: "630px", width: "340px" },
                    { left: "30px", top: "880px", width: "340px" }
                  ];

                  return (
                    <div key={index} style={{ position: "absolute", left: positions[index].left, top: positions[index].top, width: positions[index].width }} className="pointer-events-auto">
                      <FadeUp delay={0.1}>
                        <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-red-500 to-amber-500" : "from-amber-500 to-red-500"}`} />
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center border border-white/55 shadow-sm ${step.iconBg} ${step.iconColor}`}>
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
                          <h3 className="text-base font-bold text-slate-900 leading-tight mb-3 group-hover:text-red-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="space-y-2">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-2.5 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-red-400 group-hover/item:bg-red-50 transition-colors">
                                  <CheckCircle2 size={10} className="text-slate-400 group-hover/item:text-red-655 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-xs leading-relaxed font-medium">
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

            {/* MOBILE WAVY VERTICAL ROADMAP (Fully responsive, no overlaps) */}
            <div className="block md:hidden relative pl-14 sm:pl-20 pb-8 min-h-[900px]">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 1000">
                  <path d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#f1f5f9" strokeWidth="34" strokeLinecap="round" />
                  <path id="timeline-path-mobile" d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#1e293b" strokeWidth="28" strokeLinecap="round" />
                  <path d="M 40,0 C 80,100 0,200 40,300 C 80,400 0,500 40,600 C 80,700 0,800 40,900 C 80,1000 40,1000 40,1000" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" opacity="0.9" className="animate-pipeline-flow" />

                  {/* Destination Trophy */}
                  <foreignObject x="25" y="970" width="30" height="30">
                    <div className="text-amber-500 animate-bounce">
                      <Trophy size={20} />
                    </div>
                  </foreignObject>

                  {/* Animated Student/AI Node */}
                  <g>
                    <foreignObject width="24" height="24" x="-12" y="-12">
                      <div className="bg-red-500 text-white rounded-full p-1 shadow-lg border border-white flex items-center justify-center animate-pulse">
                        <GraduationCap size={12} />
                      </div>
                    </foreignObject>
                    <animateMotion
                      dur="10s"
                      repeatCount="indefinite"
                    >
                      <mpath href="#timeline-path-mobile" />
                    </animateMotion>
                  </g>
                </svg>
              </div>

              <div className="flex flex-col justify-between h-full space-y-10 relative z-10 py-8">
                {syllabus.map((step, index) => {
                  const phaseNumber = `0${index + 1}`;
                  const dotLeft = index % 2 === 0 ? '-8px' : '24px';

                  return (
                    <FadeUp key={index} delay={0.1} className="relative flex items-center min-h-[160px]">
                      <div
                        className="absolute z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-lg"
                        style={{ left: dotLeft, top: '50%', transform: 'translateY(-50%)' }}
                      >
                        <span className="text-[10px] font-black text-white">{phaseNumber}</span>
                      </div>

                      <div className="w-full pl-6">
                        <div className="relative bg-white/95 backdrop-blur-md border border-slate-200 p-5 rounded-[1.25rem] shadow-md overflow-hidden group">
                          <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-red-500 to-amber-500" : "from-amber-500 to-red-500"}`} />
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center border border-white/55 shadow-sm ${step.iconBg} ${step.iconColor}`}>
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
                          <h3 className="text-sm font-bold text-slate-900 leading-tight mb-2.5 group-hover:text-red-650 transition-colors">
                            {step.title}
                          </h3>
                          <div className="space-y-2">
                            {step.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-2.5 group/item">
                                <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover/item:border-red-400 group-hover/item:bg-red-50 transition-colors">
                                  <CheckCircle2 size={9} className="text-slate-400 group-hover/item:text-red-650 transition-colors" />
                                </div>
                                <span className="text-slate-600 text-xs leading-relaxed font-medium">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-red-200/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
                Active Sandbox & Campus Labs
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                Explore our state-of-the-art interactive lab environments configured for enterprise development.
              </p>
            </FadeUp>

            {/* Slider Container */}
            <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[480px] w-full overflow-hidden py-4">
              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === 0 ? mediaSlides.length - 1 : prev - 1));
                }}
                className="absolute left-2 md:left-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-xl hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[260px] md:h-[380px]">
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
                          filter: isActive ? "blur(0px)" : "blur(4px)"
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        className="absolute w-[85vw] max-w-[320px] md:max-w-[640px] h-full rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-250/80 shadow-2xl overflow-hidden bg-white cursor-grab active:cursor-grabbing group"
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
                        <img src={slide.image} alt="Interactive Labs" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <button
                onClick={() => {
                  setCurrentSlide((prev) => (prev === mediaSlides.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 md:right-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-xl hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-4 md:mt-6">
              {mediaSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); }}
                  className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 md:w-10 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" : "w-2 md:w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>

            {/* Info Button below the photo slider */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group overflow-hidden flex items-center justify-between gap-6 px-8 py-4.5 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(255,107,0,0.2)] hover:shadow-[0_15px_35px_rgba(255,107,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 border border-[#FF8533]/20"
              >
                <div className="text-left relative z-10">
                  <h4 className="font-extrabold text-sm tracking-wide text-white">Enroll to Upcoming Batch</h4>
                  <p className="text-orange-50 text-[11px] mt-0.5 font-semibold">Secure your seat in our next capped cohort review</p>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300 ml-2 relative z-10">
                  <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E05E00] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </section>
        {/* COURSE INCLUSIONS / BENEFITS SECTION */}
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mb-16 mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 border border-red-100 rounded-full mb-4">
                <Award size={14} className="text-red-600 animate-pulse" />
                <span className="text-xs font-black tracking-wider uppercase text-red-700">Course Perks</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                What You Get In This Course
              </h2>
              <p className="text-base md:text-lg text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
                Everything you need to successfully transition into a high-scale enterprise software architect role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Verifiable Certifications",
                  desc: "Earn industry-recognized, shareable credentials. Secure your Java Full Stack Architect certificate alongside verified digital badges ready for LinkedIn & resumes.",
                  icon: <Award size={24} />,
                  color: "text-red-500",
                  bg: "bg-red-50",
                  border: "border-red-100",
                  points: ["Verifiable Certificate IDs", "Credly Digital Badges", "ISO Compliant Accreditation"]
                },
                {
                  title: "Top-Tier Placement Support",
                  desc: "Get referred directly to 120+ hiring partner companies. Excel in coding rounds with simulated mock interviews led by MAANG architects.",
                  icon: <Trophy size={24} />,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                  points: ["100% Referral Support", "MAANG Mock Interviews", "Portfolio & Resume Building"]
                },
                {
                  title: "24/7 Labs & Mentor Support",
                  desc: "Learn by doing with direct cloud sandbox access. Overcome blockers quickly with dedicated code reviews and chat guidance from senior mentors.",
                  icon: <TerminalSquare size={24} />,
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                  border: "border-blue-100",
                  points: ["Cloud Sandbox Access", "Detailed Code Reviews", "24/7 Dedicated Support"]
                }
              ].map((perk, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${perk.bg} ${perk.color} flex items-center justify-center mb-6 shadow-sm border ${perk.border} group-hover:scale-105 transition-transform duration-300`}>
                      {perk.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                      {perk.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-6">
                      {perk.desc}
                    </p>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-slate-100 mt-auto">
                    {perk.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENROLLMENT INQUIRY FORM */}
        <section id="enroll" className="bg-white py-24 md:py-32 relative z-20 border-b border-slate-100">
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
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tr from-red-500/30 to-amber-500/30 blur-[100px] rounded-full" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">Journey</span>
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-10">
                      Submit your application to align with the upcoming admission review cycle. Our review panel evaluates background and entry criteria.
                    </p>

                    <div className="space-y-6">
                      {[
                        { num: 1, title: "Review Profile", desc: "Admissions evaluates qualification details.", color: "red" },
                        { num: 2, title: "Assessment Call", desc: "Schedule a 15-minute diagnostic callback.", color: "orange" },
                        { num: 3, title: "Cohort Onboarding", desc: "Initialize repository and workspace setup.", color: "emerald" }
                      ].map((step) => (
                        <div key={step.num} className="flex items-start gap-4 group cursor-default">
                          <div className={`w-10 h-10 rounded-none bg-${step.color === "orange" ? "amber" : step.color}-500/20 border border-${step.color === "orange" ? "amber" : step.color}-500/30 flex items-center justify-center text-${step.color === "orange" ? "amber" : step.color}-400 font-bold text-sm group-hover:scale-110 transition-transform`}>
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
                    <img src={gicon} alt="Gleamator Logo" className="w-10 h-10 object-contain drop-shadow-md brightness-0 invert" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">Admissions Desk</span>
                      <span className="text-xs font-medium text-slate-400 mt-0.5">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right Column (Form Box) */}
                <div className="lg:col-span-3 bg-white border border-slate-200 p-8 md:p-12 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.05)] transition-all duration-500 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/30 rounded-full blur-[80px] -z-10" />

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
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-red-500 transition-colors" />
                            <input
                              type="text" id="name" required placeholder="John Doe"
                              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-red-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-red-500 transition-colors" />
                            <input
                              type="email" id="email" required placeholder="john@example.com"
                              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-red-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-red-500 transition-colors" />
                            <input
                              type="tel" id="mobile" required placeholder="+91 98765 43210"
                              value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-red-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
                            />
                            {formData.mobile.trim().length >= 10 && (
                              <CheckCircle2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                            )}
                          </div>
                        </div>

                        {/* Qualification */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="qualification" className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                            Highest Qualification *
                          </label>
                          <div className="relative group/input">
                            <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-red-500 transition-colors" />
                            <input
                              type="text" id="qualification" required placeholder="e.g., B.E. Computer Science 2023"
                              value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                              className="w-full pl-12 pr-10 py-4 bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-red-500 focus:ring-0 outline-none rounded-none text-sm md:text-base text-slate-900 font-semibold transition-all duration-300 shadow-sm"
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
                          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 hover:bg-red-650 text-white font-bold rounded-none shadow-xl shadow-slate-900/10 hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300 w-full overflow-hidden"
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

      </div>
    </Layout>
  );
};

export default CourseJava;