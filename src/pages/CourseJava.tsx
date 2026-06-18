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

// --- Custom High-End Visualizers ---

// 1. Cloud & DevOps Tech Orbit (Hero visualizer)
const CloudDevOpsOrbit = () => {
  return (
    <div className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] mx-auto flex items-center justify-center scale-90 md:scale-100">
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 rounded-full bg-red-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-amber-500/10 blur-[60px] pointer-events-none" />

      {/* Center Core */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: [0, -360] }}
        transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 35, repeat: Infinity, ease: "linear" } }}
        className="absolute z-30 w-24 h-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-full shadow-[0_0_50px_rgba(239,68,68,0.35)] flex flex-col items-center justify-center border border-red-500/30"
      >
        <img src={gicon} alt="Gleamator Logo" className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)] mb-1" />
        <span className="text-[10px] font-black tracking-wider text-red-400">JAVA 21</span>
      </motion.div>

      {/* Inner Orbit (Spring Boot & Cloud Core) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[64%] h-[64%] border border-red-500/20 border-dashed rounded-full"
      >
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border border-red-500/30 shadow-xl rounded-2xl flex items-center justify-center text-red-500 hover:scale-110 transition-transform cursor-pointer group">
          <Code2 size={20} />
          <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-red-500/20 whitespace-nowrap">Spring Boot</span>
        </div>
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border border-amber-500/30 shadow-xl rounded-2xl flex items-center justify-center text-amber-500 hover:scale-110 transition-transform cursor-pointer group">
          <Cloud size={20} />
          <span className="absolute -bottom-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-amber-500/20 whitespace-nowrap">AWS Cloud</span>
        </div>
      </motion.div>

      {/* Outer Orbit (DevOps & Databases) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[96%] h-[96%] border border-slate-700/40 rounded-full"
      >
        <div className="absolute top-1/4 -left-5 w-11 h-11 bg-slate-900 border border-blue-500/30 shadow-xl rounded-2xl flex items-center justify-center text-blue-400 hover:scale-110 transition-transform cursor-pointer group">
          <Database size={20} />
          <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-blue-500/20 whitespace-nowrap">PostgreSQL</span>
        </div>
        <div className="absolute top-1/4 -right-5 w-11 h-11 bg-slate-900 border border-orange-500/30 shadow-xl rounded-2xl flex items-center justify-center text-orange-500 hover:scale-110 transition-transform cursor-pointer group">
          <Layers size={20} />
          <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-orange-500/20 whitespace-nowrap">Docker</span>
        </div>
        <div className="absolute -bottom-2 left-1/4 w-11 h-11 bg-slate-900 border border-green-500/30 shadow-xl rounded-2xl flex items-center justify-center text-green-400 hover:scale-110 transition-transform cursor-pointer group">
          <Cpu size={20} />
          <span className="absolute -bottom-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-green-500/20 whitespace-nowrap">Kubernetes</span>
        </div>
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
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
              isSimulating ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white"
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
        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
          pipelineState === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
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
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border text-[10px] font-black transition-all duration-300 ${
                isDone ? "bg-green-500/20 border-green-500 text-green-400" :
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
    {
      title: "Interactive Backend Labs",
      subtitle: "Hands-on microservices container architecture sandbox.",
      image: classroomActionImg,
      tag: "Live Architecture",
      stats: { primary: "80,000+", label: "STUDENTS", rating: "4.9/5", access: "Enterprise Prep" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "DevOps & Deployment Drives",
      subtitle: "Deploy live projects into staging environments using AWS Kubernetes cluster.",
      image: campusVisitImg,
      tag: "Infrastructure",
      stats: { primary: "120+", label: "PARTNERS", rating: "94% Rate", access: "Cloud Deploy" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Industry Certification",
      subtitle: "Earn verified credentials mapping directly to cloud backend engineer profiles.",
      image: certificateDayImg,
      tag: "Credentials",
      stats: { primary: "Verifiable", label: "CREDLY", rating: "ISO Compliant", access: "Resume Ready" },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Full Stack Hackathons",
      subtitle: "Collaborative weekends building highly scaling Java databases and API frameworks.",
      image: workshopDayImg,
      tag: "Live Hackathons",
      stats: { primary: "650+", label: "PIPELINES", rating: "Reviewed", access: "GitHub Verified" },
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    }
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
    { name: "Java 21", icon: <Code2 />, color: "text-red-500", bg: "bg-red-50" },
    { name: "Spring Boot", icon: <Layers />, color: "text-green-600", bg: "bg-green-50" },
    { name: "Microservices", icon: <Server />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "React.js", icon: <MonitorPlay />, color: "text-cyan-500", bg: "bg-cyan-50" },
    { name: "PostgreSQL", icon: <Database />, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Docker & AWS", icon: <TerminalSquare />, color: "text-orange-500", bg: "bg-orange-50" },
  ];

  const projectsData = [
    {
      title: "E-Commerce Microservices Engine",
      description: "Enterprise multi-service retail backend handling distributed transaction boundaries (Saga Pattern), discovery nodes, and gateway authorization.",
      tags: ["Spring Boot", "Kafka", "PostgreSQL"],
      visualizer: <MicroservicesEngineVisualizer />
    },
    {
      title: "Cloud DevOps CI/CD Pipeline",
      description: "Automated GitOps pipeline deploying Spring Boot services into AWS Elastic Kubernetes Service (EKS) via GitHub Actions.",
      tags: ["Docker", "Kubernetes", "AWS EKS"],
      visualizer: <CloudDevOpsPipelineVisualizer />
    }
  ];

  const placementsData = [
    { name: "Rajesh K.", company: "Amazon", role: "SDE-1", package: "24 LPA", prev: "Service Based", ctcHike: "150%", initials: "RK", bg: "from-red-500 to-amber-500" },
    { name: "Neha S.", company: "Goldman Sachs", role: "Analyst", package: "18 LPA", prev: "Fresher", ctcHike: "New", initials: "NS", bg: "from-amber-500 to-orange-500" },
    { name: "Kevin P.", company: "Walmart", role: "Software Engineer", package: "21 LPA", prev: "Tier-3 College", ctcHike: "300%", initials: "KP", bg: "from-red-650 to-orange-500" },
    { name: "Swati S.", company: "Paytm", role: "Backend Developer", package: "15 LPA", prev: "Non-CS Branch", ctcHike: "200%", initials: "SS", bg: "from-orange-500 to-red-500" }
  ];

  return (
    <Layout>
      <div className="bg-[#FAF9F5] font-sans selection:bg-red-500/20 selection:text-red-900 overflow-x-hidden text-slate-900">

        {/* HERO SECTION */}
        <section className="relative flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white">
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

              <div className="flex flex-col gap-6 relative z-20">
                <FadeUp delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-full w-max">
                    <Trophy size={16} className="text-red-500" />
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                      Highest Placement: 24 LPA
                    </span>
                  </div>
                </FadeUp>

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
              <FadeUp delay={0.2} className="relative w-full flex justify-center mt-12 lg:mt-0">
                <CloudDevOpsOrbit />
              </FadeUp>

            </div>
          </div>
        </section>

        {/* INDUSTRY TOOLS GRID */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              Master the exact tools used by top tech companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {toolsData.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-md hover:border-slate-300 transition-all cursor-default">
                  <div className={`w-14 h-14 rounded-xl ${tool.bg} ${tool.color} flex items-center justify-center mb-3 shadow-sm`}>
                    {React.cloneElement(tool.icon, { size: 28 })}
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS & INTERACTIVE VISUALIZER */}
        <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-red-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 shadow-sm rounded-full mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-red-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                  Real-World Execution
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                Live Production Engines
              </h2>
              <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed">
                Interact with simulation environments showing microservice routes and continuous cloud pipeline builds.
              </p>
            </FadeUp>

            {/* Showcase Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projectsData.map((project, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl hover:border-red-500/30 transition-colors duration-500 p-6 flex flex-col justify-between h-full group">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6 w-full h-[220px]">
                      {project.visualizer}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-red-950/40 border border-red-500/20 text-red-400 font-bold text-xs rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
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
        <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-red-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeUp className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 shadow-sm rounded-full mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-red-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                  Real-World Execution
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                Interactive Labs & Handoffs
              </h2>
              <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed">
                Work through production setups and gain deployment exposure.
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
                          <div className="absolute top-4 left-4 md:top-5 md:left-5 z-30 flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 bg-red-500/90 text-white font-black text-[10px] md:text-xs tracking-wider uppercase rounded-full shadow-lg backdrop-blur-md">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse" />
                            {slide.tag}
                          </div>
                        )}

                        <div className="relative flex-grow w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                          {isActive && isVideoPlaying ? (
                            <video src={slide.videoUrl} className="absolute inset-0 w-full h-full object-cover" autoPlay controls muted loop />
                          ) : (
                            <>
                              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                              {isActive && (
                                <button
                                  onClick={() => setIsVideoPlaying(true)}
                                  className="absolute z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-red-650 hover:border-transparent text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110"
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
                            <p className="text-slate-400 text-xs md:text-sm font-medium mb-4 leading-relaxed line-clamp-2">
                              {slide.subtitle}
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-3 md:pt-4 border-t border-white/5 text-center">
                            <div className="flex flex-col">
                              <span className="text-base md:text-xl font-black text-red-400">{slide.stats.primary}</span>
                              <span className="text-[8px] md:text-[9px] font-black text-slate-500 tracking-wider">{slide.stats.label}</span>
                            </div>
                            <div className="flex flex-col border-x border-white/5">
                              <span className="text-base md:text-xl font-black text-amber-400">{slide.stats.rating}</span>
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
                  className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 md:w-10 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" : "w-2 md:w-2.5 bg-slate-700 hover:bg-slate-500"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PLACEMENT SUCCESS WALL (Redesigned: High-End Alumni Wall of Fame Dashboard) */}
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mb-16 mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 border border-red-100 rounded-full mb-4">
                <Trophy size={14} className="text-red-600 animate-bounce" />
                <span className="text-xs font-black tracking-wider uppercase text-red-700">Placement dashboard</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Placement Success Wall
              </h2>
              <p className="text-base md:text-lg text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
                Our graduates are deploying enterprise backend systems in tier-1 product organizations globally.
              </p>
            </div>

            {/* Premium Interactive Wall Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementsData.map((alumni, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white border border-slate-200/80 rounded-[2rem] p-6 shadow-sm hover:shadow-[0_20px_40px_rgba(239,68,68,0.06)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute -right-10 -top-10 w-28 h-28 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />

                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Avatar Initials Wrapper */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${alumni.bg} flex items-center justify-center text-white font-extrabold text-base shadow-sm border border-white/50 group-hover:scale-105 transition-transform duration-300`}>
                      {alumni.initials}
                    </div>

                    {/* Salary Package Badge */}
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Package</span>
                      <span className="mt-1 bg-emerald-50 text-emerald-600 font-black text-xs md:text-sm px-2.5 py-1 rounded-xl border border-emerald-100 flex items-center gap-1">
                        <TrendingUp size={12} />
                        {alumni.package}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mb-6">
                    <h4 className="font-extrabold text-lg text-slate-900 tracking-tight group-hover:text-red-600 transition-colors duration-300">{alumni.name}</h4>
                    
                    {/* Company Info with Check Icon */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-sm font-bold text-slate-600">
                      <Building2 size={14} className="text-red-500" />
                      <span>{alumni.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1" />
                      <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Verified</span>
                    </div>
                  </div>

                  {/* Footer Stats Grid */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Role</span>
                      <span className="font-bold text-slate-700">{alumni.role}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Background</span>
                      <span className="font-bold text-slate-700 truncate block">{alumni.prev}</span>
                    </div>
                  </div>

                  {/* Salary Hike Flag */}
                  <div className="absolute top-24 right-0 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <div className="bg-red-500 text-white font-black text-[9px] px-3 py-1 rounded-l-full shadow-md uppercase tracking-wider">
                      +{alumni.ctcHike} Hike
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-500 font-semibold inline-flex items-center gap-2">
                And 500+ more successful transitions. <a href="#enroll" className="text-red-650 font-bold hover:underline">Start your path today.</a>
              </p>
            </div>
          </div>
        </section>

        {/* ENROLLMENT / ADMISSION FORM (Revamped Premium Split Design) */}
        <section id="enroll" className="py-24 bg-slate-950 relative overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col lg:flex-row">

              {/* Left Column (Information Showcase) */}
              <div className="w-full lg:w-[45%] bg-gradient-to-br from-red-600/90 via-red-700/80 to-amber-900/90 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full mb-6">
                    <Sparkles size={12} className="text-amber-300 animate-pulse" />
                    <span className="text-[10px] font-black tracking-widest uppercase text-amber-100">Admission Process</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">
                    Secure Your Seat
                  </h3>
                  <p className="text-red-100/90 mb-10 leading-relaxed text-sm font-medium">
                    Our Java Full Stack & DevOps cohorts are capped to maintain interactive class focus. Register below for a diagnostic counseling call with our instructors.
                  </p>

                  {/* Feature Cards Grid */}
                  <div className="space-y-4">
                    {[
                      {
                        title: "Cloud Lab Setup Credentials",
                        desc: "Get sandbox access tokens to deploy container networks in staging systems.",
                        icon: <Cloud size={16} />,
                        color: "from-amber-400 to-orange-500"
                      },
                      {
                        title: "Mock Interview Assessment",
                        desc: "1:1 mock technical grilling with core enterprise architects.",
                        icon: <Award size={16} />,
                        color: "from-red-400 to-rose-500"
                      },
                      {
                        title: "Corporate Placement Handoff",
                        desc: "Direct referrals to hiring partners once pipelines are completed.",
                        icon: <Workflow size={16} />,
                        color: "from-emerald-400 to-teal-500"
                      }
                    ].map((feat, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                          {feat.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{feat.title}</h4>
                          <p className="text-red-100/70 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-4 relative z-10">
                  <img src={gicon} alt="Logo" className="w-10 h-10 object-contain brightness-0 invert drop-shadow" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="font-bold text-sm text-white">Admissions Desk Active</p>
                    </div>
                    <p className="text-xs text-red-200/80">Diagnostic callbacks scheduled same-day</p>
                  </div>
                </div>
              </div>

              {/* Right Column (Admission Form) */}
              <div className="w-full lg:w-[55%] p-8 md:p-12 bg-slate-900/30 flex flex-col justify-center">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] mb-6 animate-bounce">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Application Received!</h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you. An academic counselor is preparing your dashboard parameters and will connect with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Request Callback Session</h4>
                    <p className="text-xs text-slate-400 font-medium mb-6">Fields marked with <span className="text-red-500">*</span> are mandatory</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Full Name *</label>
                        <div className="relative group">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                          <input
                            type="text" required placeholder="John Doe"
                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/5 outline-none font-medium text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Address *</label>
                        <div className="relative group">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                          <input
                            type="email" required placeholder="john@example.com"
                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/5 outline-none font-medium text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Mobile Number *</label>
                        <div className="relative group">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                          <input
                            type="tel" required placeholder="+91 98765 43210"
                            value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/5 outline-none font-medium text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Qualification */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Highest Qualification *</label>
                        <div className="relative group">
                          <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                          <input
                            type="text" required placeholder="e.g., B.E. Computer Science 2023"
                            value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/5 outline-none font-medium text-sm transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-6 py-4 bg-slate-955 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-550 hover:to-orange-550 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/10 hover:shadow-red-650/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      <span>Submit Admission Application</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CourseJava;