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
  CheckCircle2,
  TrendingUp,
  Building2,
  Network,
  Workflow,
  Activity,
  Play,
  Sliders,
  Sparkle,
  Zap,
  Globe,
  Gauge,
  User,
  Mail,
  Phone,
  GraduationCap
} from "lucide-react";
import Layout from "@/components/Layout";
import gicon from "@/assets/gicon.png";

// --- Global Styles & Brand Accent Themes ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
  .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
  
  .glass-card-premium { 
    background: rgba(255, 255, 255, 0.75); 
    backdrop-filter: blur(20px); 
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.7); 
    box-shadow: 0 10px 40px -10px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
  }

  .text-brand-gradient { 
    background: linear-gradient(135deg, #f97316 0%, #4f46e5 60%, #06b6d4 100%);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
  }

  .bg-brand-gradient {
    background: linear-gradient(135deg, #f97316 0%, #4f46e5 60%, #06b6d4 100%);
  }

  .logo-shadow {
    filter: drop-shadow(0 4px 12px rgba(249, 115, 22, 0.25));
  }

  @keyframes flow {
    to {
      stroke-dashoffset: -20;
    }
  }

  .animate-flow-synapse {
    stroke-dasharray: 6, 6;
    animation: flow 1.2s linear infinite;
  }

  @keyframes pulseGlow {
    0%, 100% { opacity: 0.35; transform: scale(1) translate(-50%, -50%); }
    50% { opacity: 0.65; transform: scale(1.08) translate(-50%, -50%); }
  }

  .animate-pulse-glow {
    animation: pulseGlow 4s ease-in-out infinite;
  }
`;

// --- Utility Components ---
const FadeUp = ({ children, delay = 0, className = "", duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ type: "spring", stiffness: 60, damping: 18, delay, duration }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 1. Sleek Neural Orbit Visualizer (With Brand Colors & Logo Core) ---
const SleekNeuralCoreLight = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { name: "PyTorch", icon: <BrainCircuit size={16} />, color: "text-orange-500", border: "border-orange-200", bg: "bg-orange-50/80", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { name: "Python", icon: <Code2 size={16} />, color: "text-indigo-600", border: "border-indigo-200", bg: "bg-indigo-50/80", pos: "bottom-4 right-4" },
    { name: "FastAPI", icon: <Layers size={16} />, color: "text-cyan-500", border: "border-cyan-200", bg: "bg-cyan-50/80", pos: "bottom-4 left-4" }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center">
      {/* Dynamic Brand Ambient Glows */}
      <div className="absolute w-[110%] h-[110%] rounded-full bg-orange-100/40 blur-[90px] pointer-events-none" />
      <div className="absolute w-[90%] h-[90%] rounded-full bg-indigo-100/40 blur-[80px] pointer-events-none" />

      {/* Center Core: Brand Logo */}
      <motion.div
        animate={{ scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-30 w-32 h-32 rounded-[2.5rem] flex flex-col items-center justify-center bg-white shadow-[0_15px_45px_rgba(249,115,22,0.15)] border border-orange-100/80 cursor-pointer"
        whileHover={{ scale: 1.08, rotate: [0, 5, -5, 0] }}
      >
        <img src={gicon} alt="Gleamator Logo" className="w-14 h-14 object-contain logo-shadow mb-1" />
        <span className="text-[10px] font-extrabold tracking-widest text-slate-800 uppercase bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100 shadow-inner">
          AIML Core
        </span>
      </motion.div>

      {/* Outer Orbit (Dashed) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute z-10 w-[72%] h-[72%] border border-slate-200/80 border-dashed rounded-full"
      >
        {/* Orbiting Tech Chips */}
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.pos}`}
            style={{ transform: `rotate(${-i * 120}deg)` }} // keep icons upright
          >
            <motion.div
              className={`w-10 h-10 rounded-xl bg-white border ${node.border} shadow-lg flex items-center justify-center ${node.color} cursor-pointer`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setActiveNode(node.name)}
              onHoverEnd={() => setActiveNode(null)}
            >
              {node.icon}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Inner Synapse Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute z-20 w-[95%] h-[95%] border border-indigo-100/40 rounded-full"
      >
        {/* Pulsing signal nodes */}
        <div className="absolute top-1/4 left-0 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_12px_#4f46e5] animate-ping" />
        <div className="absolute bottom-1/3 right-0 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_12px_#f97316] animate-pulse" />
      </motion.div>

      {/* Hover Info Label */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg tracking-wide z-40 border border-slate-800"
          >
            Active Pipeline: {activeNode}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// --- 2. Interactive AI Project Visualizers (Premium Light Theme) ---
const RAGPipelineVisualizer = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { title: "Docs", icon: <Database size={14} />, pos: "left-4 top-1/2 -translate-y-1/2" },
    { title: "Embed", icon: <Layers size={14} />, pos: "left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2" },
    { title: "Store", icon: <Network size={14} />, pos: "right-1/3 top-1/2 -translate-y-1/2 translate-x-1/2" },
    { title: "LLM", icon: <BrainCircuit size={14} />, pos: "right-4 top-1/2 -translate-y-1/2" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/80 relative shadow-inner min-h-[160px]">
      <div className="relative flex-grow min-h-[80px]">
        {/* Animated Connection Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
          <path d="M 20,40 L 95,40 L 195,40 L 270,40" stroke="#e2e8f0" strokeWidth="3" fill="none" />
          <motion.path
            d="M 20,40 L 95,40 L 195,40 L 270,40"
            stroke="url(#rag-flow-grad)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="30 150"
            animate={{ strokeDashoffset: [180, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="rag-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.pos} z-10 flex flex-col items-center gap-1.5`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                i === activeNode
                  ? "bg-white border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.3)] text-[#7C3AED] scale-110"
                  : "bg-white border-slate-200 text-slate-400"
              }`}
            >
              {node.icon}
            </div>
            <span className={`text-[9px] font-black uppercase tracking-wider ${
              i === activeNode ? "text-[#7C3AED]" : "text-slate-400"
            }`}>{node.title}</span>
          </div>
        ))}
      </div>
      
      {/* Live processing status indicator */}
      <div className="flex items-center gap-2 px-1 text-[10px] font-semibold text-slate-500 border-t border-slate-100 pt-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span>Node {activeNode + 1} processing pipeline metrics...</span>
      </div>
    </div>
  );
};

const NeuralNetworkVisualizer = () => {
  const [loss, setLoss] = useState<number[]>([]);
  const [epochs, setEpochs] = useState(1024);
  const [valLoss, setValLoss] = useState(0.065);
  
  useEffect(() => {
    setLoss([0.85, 0.72, 0.65, 0.58, 0.51, 0.44, 0.39, 0.35, 0.31, 0.28, 0.25]);
    
    const interval = setInterval(() => {
      setLoss((prev) => {
        const nextLoss = prev.length === 0 ? 0.85 : Math.max(0.05, prev[prev.length - 1] - Math.random() * 0.02 + 0.004);
        if (prev.length > 15) {
          return [...prev.slice(1), nextLoss];
        }
        return [...prev, nextLoss];
      });
      setEpochs((prev) => prev + 1);
      setValLoss((prev) => Math.max(0.045, prev - Math.random() * 0.002));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const inputs = [25, 50, 75];
  const hiddens = [15, 38, 62, 85];
  const outputs = [35, 65];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/80 relative group/nn shadow-inner min-h-[160px]">
      {/* Floating live parameters */}
      <div className="flex justify-between items-center text-[8px] font-black tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-1.5 mb-1 z-10">
        <span>Epoch: <span className="text-indigo-600 font-mono">{epochs}</span></span>
        <span>Val Loss: <span className="text-cyan-600 font-mono">{valLoss.toFixed(4)}</span></span>
      </div>

      {/* Network Animation */}
      <div className="relative flex-grow flex items-center justify-between px-8 py-1.5 min-h-[80px]">
        {/* Layer 1: Input */}
        <div className="flex flex-col gap-4 relative z-10">
          {inputs.map((yVal, idx) => (
            <div key={idx} className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-pulse" style={{ animationDelay: `${idx * 0.25}s` }} />
          ))}
        </div>
        
        {/* Dynamic Curved Synapses (Dashed flow lines) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="synapse-grad-nn" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Input to Hidden */}
            {inputs.map((yIn) => 
              hiddens.map((yHid, idx) => (
                <path
                  key={`in-hid-${yIn}-${yHid}`}
                  d={`M 10,${yIn} C 30,${yIn} 30,${yHid} 50,${yHid}`}
                  stroke="url(#synapse-grad-nn)"
                  strokeWidth="1.0"
                  fill="none"
                  className="animate-flow-synapse opacity-20"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                />
              ))
            )}
            {/* Hidden to Output */}
            {hiddens.map((yHid) => 
              outputs.map((yOut, idx) => (
                <path
                  key={`hid-out-${yHid}-${yOut}`}
                  d={`M 50,${yHid} C 70,${yHid} 70,${yOut} 90,${yOut}`}
                  stroke="url(#synapse-grad-nn)"
                  strokeWidth="1.0"
                  fill="none"
                  className="animate-flow-synapse opacity-30"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                />
              ))
            )}
          </svg>
        </div>

        {/* Layer 2: Hidden */}
        <div className="flex flex-col gap-3 relative z-10">
          {hiddens.map((yVal, idx) => (
            <div key={idx} className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(124,58,237,0.5)] animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }} />
          ))}
        </div>

        {/* Layer 3: Output */}
        <div className="flex flex-col gap-6 relative z-10">
          {outputs.map((yVal, idx) => (
            <div key={idx} className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse" style={{ animationDelay: `${idx * 0.35}s` }} />
          ))}
        </div>
      </div>

      {/* Loss Curve Chart */}
      <div className="h-14 border-t border-slate-100 pt-1 flex flex-col justify-end">
        <div className="flex justify-between items-center text-[8px] text-slate-400 font-extrabold uppercase tracking-wider mb-0.5 px-1">
          <span>Gradient loss</span>
          <span className="text-orange-600 font-mono">{(loss[loss.length - 1] || 0.85).toFixed(4)}</span>
        </div>
        <div className="w-full h-6 flex items-end gap-1 px-1">
          {loss.map((l, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${l * 100}%` }}
              className="flex-grow bg-gradient-to-t from-orange-500 via-indigo-500 to-cyan-500 rounded-t-sm"
              style={{ minWidth: '3px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



// --- Main Page Component ---
const CourseAIML = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", qualification: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 10, y: (e.clientY / window.innerHeight - 0.5) * 10 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", qualification: "" });
      }, 4000);
    }
  };

  const syllabus = [
    { phase: "01", title: "Data & Statistical Inference", duration: "Weeks 1-6", items: ["Data Engineering pipelines with Pandas & Scipy.", "Matrix calculus, algorithms, and probability inference."], color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
    { phase: "02", title: "Applied ML & Evaluation", duration: "Weeks 7-14", items: ["Regularized regression, SVM bounds & classification forests.", "Optimization learning curves and drift detection protocols."], color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
    { phase: "03", title: "Deep Learning Architectures", duration: "Weeks 15-20", items: ["Custom layers in PyTorch, backpropagation engines.", "Fine-tuning transformer heads and LLM parameter sweeps."], color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
    { phase: "04", title: "MLOps Infrastructure", duration: "Weeks 21-24", items: ["Low-latency micro-endpoints using FastAPI & Uvicorn.", "Model registry parameters tracked via Docker & MLflow."], color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200" }
  ];

  const toolsData = [
    { name: "PyTorch", icon: <BrainCircuit />, color: "text-[#EE4C2C]", bg: "bg-[#EE4C2C]/5", border: "border-[#EE4C2C]/20" },
    { name: "FastAPI", icon: <Layers />, color: "text-[#059669]", bg: "bg-[#059669]/5", border: "border-[#059669]/20" },
    { name: "MLflow", icon: <Activity />, color: "text-[#0194E2]", bg: "bg-[#0194E2]/5", border: "border-[#0194E2]/20" },
    { name: "Python", icon: <Code2 />, color: "text-[#3776AB]", bg: "bg-[#3776AB]/5", border: "border-[#3776AB]/20" },
    { name: "PostgreSQL", icon: <Database />, color: "text-[#336791]", bg: "bg-[#336791]/5", border: "border-[#336791]/20" },
    { name: "Docker", icon: <TerminalSquare />, color: "text-[#2496ED]", bg: "bg-[#2496ED]/5", border: "border-[#2496ED]/20" },
    { name: "Hugging Face", icon: <Sparkles />, color: "text-[#FFD21E]", bg: "bg-[#FFD21E]/5", border: "border-[#FFD21E]/20" },
    { name: "TensorFlow", icon: <Cpu />, color: "text-[#FF6F00]", bg: "bg-[#FF6F00]/5", border: "border-[#FF6F00]/20" },
    { name: "NumPy", icon: <Sliders />, color: "text-[#013243]", bg: "bg-[#013243]/5", border: "border-[#013243]/20" },
    { name: "Scikit-Learn", icon: <Gauge />, color: "text-[#F7931E]", bg: "bg-[#F7931E]/5", border: "border-[#F7931E]/20" },
    { name: "Kubernetes", icon: <Network />, color: "text-[#326CE5]", bg: "bg-[#326CE5]/5", border: "border-[#326CE5]/20" },
    { name: "AWS Cloud", icon: <Globe />, color: "text-[#FF9900]", bg: "bg-[#FF9900]/5", border: "border-[#FF9900]/20" }
  ];

  const placementsData = [
    { name: "Aditya Varma", company: "NeuralTech", role: "ML Engineer", package: "14 LPA", prev: "Data Analyst", hike: "+120%", grad: "from-cyan-500 to-blue-500" },
    { name: "Priya Nair", company: "InsightAnalytics", role: "Data Scientist", package: "11.5 LPA", prev: "Fresher", hike: "New", grad: "from-orange-500 to-rose-500" },
    { name: "Arjun Das", company: "AI Solutions", role: "Applied Scientist", package: "13 LPA", prev: "Backend Dev", hike: "+180%", grad: "from-emerald-400 to-teal-500" },
    { name: "Tanvi Shah", company: "AutoScale", role: "MLOps Specialist", package: "12 LPA", prev: "System Eng", hike: "+140%", grad: "from-indigo-500 to-purple-500" }
  ];

  return (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div className="font-jakarta bg-[#FAFAFC] text-slate-900 selection:bg-orange-500/20 selection:text-orange-950 overflow-hidden">

        {/* --- 1. PREMIUM HERO SECTION --- */}
        <section className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-white">
          {/* Subtle grid background with custom brand coloring */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Text Side */}
              <div className="lg:col-span-7 flex flex-col gap-8 relative z-20">


                <FadeUp delay={0.2}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
                    Artificial Intelligence & <br />
                    <span className="text-brand-gradient">
                      Machine Learning.
                    </span>
                  </h1>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="text-lg md:text-xl text-slate-500 font-normal max-w-xl leading-relaxed">
                    Transition from theoretical statistical models to production-ready scalable machine learning architecture. Master PyTorch, HuggingFace, LLMs, and real-time MLOps.
                  </p>
                </FadeUp>

                <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 active:translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                  >
                    Apply for Next Cohort
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 active:translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-sm"
                  >
                    View Curriculum
                  </button>
                </FadeUp>
              </div>

              {/* Visualization Side */}
              <FadeUp delay={0.3} className="lg:col-span-5 relative w-full flex justify-center mt-12 lg:mt-0">
                <motion.div
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  transition={{ type: "spring", stiffness: 45, damping: 25 }}
                  className="relative w-full max-w-[420px]"
                >
                  <SleekNeuralCoreLight />
                </motion.div>
              </FadeUp>

            </div>
          </div>
        </section>

        {/* --- 2. LOGO STRIP (Infinite Scrolling Ticker with brand-specific colors) --- */}
        <section className="py-10 border-y border-slate-100 bg-[#FAFAFD] overflow-hidden relative w-full">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFD] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFD] to-transparent z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 mb-6">
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
              Powered by industry-standard engineering stacks
            </p>
          </div>

          <div className="flex w-max relative">
            <div className="flex gap-8 px-4 animate-scroll hover:[animation-play-state:paused] cursor-pointer">
              {[...toolsData, ...toolsData].map((tool, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-5 py-3.5 bg-white border ${tool.border} ${tool.bg} rounded-2xl ${tool.color} shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:border-orange-300 hover:scale-105 transition-all duration-300 group cursor-default`}
                >
                  <div className="transition-transform duration-300 group-hover:rotate-12">
                    {tool.icon}
                  </div>
                  <span className="font-extrabold tracking-wide text-xs text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. CORE SYLLABUS ROADMAP SECTION --- */}
        <section id="curriculum" className="py-32 relative bg-white">
          <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-orange-200/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-indigo-200/20 rounded-full blur-[130px] pointer-events-none" />

          <div className="container mx-auto px-6 max-w-7xl relative z-10">

            {/* Intro Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-none">Feed-Forward Path.</h2>
              <p className="text-lg text-slate-500 font-normal leading-relaxed">
                Watch the activation synapse flow through MLOps output layers from week one straight to live production. Follow the modular stages below.
              </p>
            </div>

            {/* --- Unified Serpentine Wavy Path (Scrollable on Mobile, Grid on Desktop) --- */}
            <div className="w-full overflow-x-auto scrollbar-none pb-8">
              <div className="relative py-16 min-w-[980px] lg:min-w-0 lg:w-full">

                {/* Dynamic Curved Connection Lines */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
                    {/* Arrow 1 -> 2 */}
                    <path
                      d="M 220 280 C 270 320, 310 320, 360 200"
                      stroke="#f97316"
                      strokeWidth="3"
                      className="animate-flow-synapse"
                    />
                    {/* Arrow 2 -> 3 */}
                    <path
                      d="M 520 180 C 560 60, 600 60, 660 240"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      className="animate-flow-synapse"
                    />
                    {/* Arrow 3 -> 4 */}
                    <path
                      d="M 820 280 C 870 320, 910 320, 960 200"
                      stroke="#06b6d4"
                      strokeWidth="3"
                      className="animate-flow-synapse"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-4 gap-6 items-start relative z-10">
                  {/* Step 1: Card top, Ring bottom */}
                  <div className="flex flex-col items-center justify-between h-full min-h-[360px] relative">
                    <FadeUp delay={0.1} className="w-full">
                      <div className="glass-card-premium rounded-3xl p-6 hover:border-orange-200 hover:shadow-[0_15px_30px_rgba(249,115,22,0.06)] hover:-translate-y-1 transition-all duration-300">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-orange-50 text-orange-500 border border-orange-200 mb-3 uppercase">Weeks 1-6</span>
                        <h4 className="font-extrabold text-base text-slate-800 mb-2">Data & Statistical Inference</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">Pandas/Scipy pipelines, matrix calculus, probability distributions.</p>
                      </div>
                    </FadeUp>
                    <div className="w-20 h-20 rounded-full border-[6px] border-orange-500 bg-white shadow-xl flex items-center justify-center font-black text-orange-500 text-lg hover:scale-110 transition-transform">
                      01
                    </div>
                  </div>

                  {/* Step 2: Ring top, Card bottom */}
                  <div className="flex flex-col-reverse items-center justify-between h-full min-h-[360px] relative">
                    <FadeUp delay={0.2} className="w-full">
                      <div className="glass-card-premium rounded-3xl p-6 hover:border-indigo-200 hover:shadow-[0_15px_30px_rgba(79,70,229,0.06)] hover:-translate-y-1 transition-all duration-300">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-200 mb-3 uppercase">Weeks 7-14</span>
                        <h4 className="font-extrabold text-base text-slate-800 mb-2">Applied ML & Evaluation</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">SVM bounds, forests, learning curves, and model drift protocols.</p>
                      </div>
                    </FadeUp>
                    <div className="w-20 h-20 rounded-full border-[6px] border-indigo-600 bg-white shadow-xl flex items-center justify-center font-black text-indigo-600 text-lg hover:scale-110 transition-transform">
                      02
                    </div>
                  </div>

                  {/* Step 3: Card top, Ring bottom */}
                  <div className="flex flex-col items-center justify-between h-full min-h-[360px] relative">
                    <FadeUp delay={0.3} className="w-full">
                      <div className="glass-card-premium rounded-3xl p-6 hover:border-purple-200 hover:shadow-[0_15px_30px_rgba(147,51,234,0.06)] hover:-translate-y-1 transition-all duration-300">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-purple-50 text-purple-600 border border-purple-200 mb-3 uppercase">Weeks 15-20</span>
                        <h4 className="font-extrabold text-base text-slate-800 mb-2">Deep Learning</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">PyTorch custom layers, backprop engines, LLM fine-tuning sweeps.</p>
                      </div>
                    </FadeUp>
                    <div className="w-20 h-20 rounded-full border-[6px] border-purple-600 bg-white shadow-xl flex items-center justify-center font-black text-purple-600 text-lg hover:scale-110 transition-transform">
                      03
                    </div>
                  </div>

                  {/* Step 4: Ring top, Card bottom */}
                  <div className="flex flex-col-reverse items-center justify-between h-full min-h-[360px] relative">
                    <FadeUp delay={0.4} className="w-full">
                      <div className="glass-card-premium rounded-3xl p-6 hover:border-cyan-200 hover:shadow-[0_15px_30px_rgba(6,182,212,0.06)] hover:-translate-y-1 transition-all duration-300">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-cyan-50 text-cyan-600 border border-cyan-200 mb-3 uppercase">Weeks 21-24</span>
                        <h4 className="font-extrabold text-base text-slate-800 mb-2">MLOps Infrastructure</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">FastAPI micro-endpoints, Docker registry config, MLflow parameters.</p>
                      </div>
                    </FadeUp>
                    <div className="w-20 h-20 rounded-full border-[6px] border-cyan-600 bg-white shadow-xl flex items-center justify-center font-black text-cyan-600 text-lg hover:scale-110 transition-transform">
                      04
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* --- Live AI Production Projects Showcase (SaaS Light Theme Redesign) --- */}
        <section className="py-24 md:py-32 bg-[#FAFBFF] relative overflow-hidden border-y border-slate-100">
          {/* Light Grid Pattern Overlay (3% opacity) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.4] pointer-events-none z-0" />
          
          {/* Floating Violet, Blue, & Cyan Blur Orbs */}
          <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#7C3AED]/8 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-1/2 right-20 w-[400px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
          <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-[#06B6D4]/8 rounded-full blur-[110px] pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Hero Section Header */}
            <FadeUp className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 border border-violet-100 shadow-sm rounded-full mb-6 text-xs font-black tracking-wide text-violet-700">
                ⚡ Interactive AI Systems
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-none">
                Live AI <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Production Engines</span>
              </h2>
              <p className="text-[#64748B] text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Interact with simulation environments showing agentic pipelines and neural network training convergence.
              </p>
            </FadeUp>

            {/* Showcase Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Real-time Agentic RAG Search Engine",
                  description: "Enterprise assistant orchestrating deep semantic searches over private document corpora using PyTorch models, vector indexing, and custom LLM inference.",
                  tags: ["LangChain", "Vector DB", "FastAPI"],
                  status: (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-cyan-50 text-[#06B6D4] border border-cyan-100 rounded-full text-[10px] font-black tracking-wider uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#06B6D4]"></span>
                      </span>
                      Processing
                    </div>
                  ),
                  metrics: [
                    { label: "Docs Indexed", value: "1.2M", color: "text-[#7C3AED]" },
                    { label: "Query Latency", value: "35ms", color: "text-[#2563EB]" },
                    { label: "Accuracy", value: "99.8%", color: "text-emerald-600" }
                  ],
                  visualizer: <RAGPipelineVisualizer />
                },
                {
                  title: "Distributed Neural Training Pipeline",
                  description: "High-performance training engine tracking loss gradients and hyperparameter tuning sweeps across multi-node GPU clusters.",
                  tags: ["PyTorch", "MLflow", "Docker"],
                  status: (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-[#7C3AED] border border-violet-100 rounded-full text-[10px] font-black tracking-wider uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7C3AED]"></span>
                      </span>
                      Training
                    </div>
                  ),
                  metrics: [
                    { label: "Cluster GPUs", value: "256", color: "text-[#7C3AED]" },
                    { label: "Parameters", value: "2.4B", color: "text-[#2563EB]" },
                    { label: "Loss Target", value: "0.050", color: "text-orange-600" }
                  ],
                  visualizer: <NeuralNetworkVisualizer />
                }
              ].map((project, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="bg-white/80 border border-white/60 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(124,58,237,0.1)] hover:border-[#7C3AED]/30 transition-all duration-500 p-8 flex flex-col justify-between h-full group hover:-translate-y-2">
                    <div>
                      {/* Top Row: Status badge */}
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#7C3AED] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        {project.status}
                      </div>
                      <p className="text-[#64748B] text-sm font-medium leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6 w-full h-[220px]">
                      {project.visualizer}
                    </div>

                    {/* Live Metrics Widget Section */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-100/80 pt-5 mt-2 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 leading-none">{metric.label}</span>
                          <span className={`font-black text-base md:text-lg ${metric.color} leading-none`}>{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 text-[#64748B] font-bold text-xs rounded-xl hover:border-[#7C3AED]/30 hover:text-[#7C3AED] transition-colors shadow-sm cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Bottom Premium CTA Banner */}
            <FadeUp delay={0.2} className="max-w-4xl mx-auto mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-violet-500/5 via-blue-500/5 to-cyan-500/5 border border-white/60 shadow-lg backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-left">
                <h4 className="font-extrabold text-slate-900 text-lg md:text-xl leading-none">Explore More Production AI Systems</h4>
                <p className="text-[#64748B] text-xs md:text-sm font-semibold mt-2.5">Discover active pipelines, automated evaluations, and benchmark deployments.</p>
              </div>
              <button
                onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-extrabold text-xs tracking-wider uppercase rounded-xl hover:shadow-lg hover:shadow-violet-500/20 active:translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                Initialize Pipeline Sandbox
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeUp>
          </div>
        </section>

        {/* --- 4. PLACEMENTS SUCCESS WALL (Premium SaaS Redesign) --- */}
        <section className="py-24 bg-[#FAFBFF] relative overflow-hidden border-y border-slate-100">
          {/* Subtle Color Splash Backdrops */}
          <div className="absolute top-12 left-1/4 w-[350px] h-[350px] bg-gradient-to-tr from-violet-500/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeUp className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 border border-violet-100 rounded-full mb-4 shadow-sm">
                  <Award size={14} className="text-[#7C3AED] animate-pulse" />
                  <span className="text-[10px] font-black tracking-wider uppercase text-[#7C3AED]">Student Success Wall</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Career Transformations.</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Our graduates transition to key engineering units globally.</p>
              </div>
              <div className="bg-white border border-slate-200/80 shadow-sm px-6 py-3 rounded-full flex items-center gap-3">
                <TrendingUp size={18} className="text-emerald-500" />
                <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">Avg. Hike 120%</span>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {placementsData.map((alumni, idx) => {
                return (
                  <FadeUp key={idx} delay={idx * 0.1}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.04, 
                        y: -8,
                        zIndex: 20
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="bg-white/90 border border-slate-200/60 rounded-[2rem] p-6 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.06)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group cursor-pointer"
                    >
                      {/* Premium Top Accent Gradient Border */}
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]" />

                      {/* Header Row */}
                      <div className="flex justify-between items-start mb-6 pt-2">
                        {/* Avatar Initials Wrapper */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${alumni.grad} flex items-center justify-center text-white font-extrabold text-base shadow-sm border border-white/50 group-hover:scale-105 transition-transform duration-300`}>
                          {alumni.name.charAt(0)}
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
                      <div className="mb-4 text-left">
                        <h4 className="font-extrabold text-lg text-slate-900 tracking-tight group-hover:text-[#7C3AED] transition-colors duration-300">{alumni.name}</h4>
                        
                        {/* Company Info with Check Icon */}
                        <div className="flex items-center gap-1.5 mt-1.5 text-sm font-bold text-slate-600">
                          <Building2 size={14} className="text-[#2563EB]" />
                          <span className="text-slate-800">{alumni.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1" />
                          <span className="text-[9px] text-green-600 font-bold uppercase tracking-wider">Verified</span>
                        </div>
                      </div>

                      {/* Transformation Path Widget */}
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-2 flex items-center justify-between text-xs relative z-10 shadow-inner">
                        <div className="flex flex-col text-left">
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Previous</span>
                          <span className="font-bold text-slate-650 truncate max-w-[85px] leading-none">{alumni.prev}</span>
                        </div>
                        <ArrowRight size={14} className="text-[#7C3AED] mx-2 animate-pulse" />
                        <div className="flex flex-col text-right">
                          <span className="text-[8px] font-black text-slate-[#7C3AED] uppercase tracking-widest leading-none mb-1">Placed As</span>
                          <span className="font-extrabold text-slate-900 truncate max-w-[90px] leading-none">{alumni.role}</span>
                        </div>
                      </div>

                      {/* Salary Hike Flag */}
                      <div className="absolute top-20 right-0 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500 z-10">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-[9px] px-3 py-1 rounded-l-full shadow-md uppercase tracking-wider">
                          {alumni.hike} Hike
                        </div>
                      </div>
                    </motion.div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- 5. ENROLLMENT CALLBACK FORM --- */}
        <section id="enroll" className="py-32 relative bg-white">
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <FadeUp className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">

              {/* Left Side Info */}
              <div className="w-full lg:w-1/2 p-12 md:p-16 relative overflow-hidden bg-slate-50 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 relative z-10 leading-none">Secure Your Seat.</h3>
                <p className="text-slate-500 mb-10 text-base md:text-lg font-normal leading-relaxed relative z-10">
                  Our cohorts are strictly capped to maintain dedicated compute instance allocation. Register details below for an engineer evaluation callback.
                </p>

                <div className="space-y-6 relative z-10 border-t border-slate-200/80 pt-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">Compute Cluster Access</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">Dedicated sandbox instances with active GPU nodes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Workflow size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">Engineering Referrals</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">Direct pipeline referrals to core AI development units.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Form (Contact Form Style) */}
              <div className="w-full lg:w-1/2 p-12 md:p-16 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
                {formSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-100">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Ping Successful.</h3>
                    <p className="text-slate-500 text-sm">An academic engineer will establish connection shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-focus-within:text-orange-500 transition-colors pl-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-950 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none font-semibold text-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="Enter your name..."
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-focus-within:text-orange-500 transition-colors pl-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-950 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none font-semibold text-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="Enter your email..."
                        />
                      </div>
                    </div>

                    {/* Mobile Input */}
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-focus-within:text-orange-500 transition-colors pl-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-950 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none font-semibold text-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="Enter your mobile number..."
                        />
                      </div>
                    </div>

                    {/* Qualification Input */}
                    <div className="flex flex-col gap-1.5 group">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 group-focus-within:text-orange-500 transition-colors pl-1">
                        Highest Qualification *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                          <GraduationCap size={18} />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-950 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none font-semibold text-sm transition-all placeholder:text-slate-400 placeholder:font-normal"
                          placeholder="Enter your highest qualification..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                    >
                      Initialize Application <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>

            </FadeUp>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CourseAIML;