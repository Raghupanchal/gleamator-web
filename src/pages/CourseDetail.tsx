import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  TerminalSquare, 
  Database, 
  BrainCircuit, 
  Rocket,
  ArrowRight
} from "lucide-react";

const syllabusData = [
  {
    phase: 1,
    title: "Frontend Architecture",
    duration: "Week 1 - 6",
    icon: <Layers size={24} className="text-[#0F2757]" />,
    items: [
      "Semantic layout structures and advanced CSS grids.",
      "Modern JavaScript (ES6+), async data fetching, and DOM logic.",
      "React ecosystem: custom hooks, context, and state management."
    ],
  },
  {
    phase: 2,
    title: "Backend Systems",
    duration: "Week 7 - 14",
    icon: <TerminalSquare size={24} className="text-[#0F2757]" />,
    items: [
      "Python deep dive: OOP, decorators, and memory management.",
      "Django & Flask RESTful API design and middleware routing.",
      "Secure authentication utilizing JWT and OAuth2.0 standards."
    ],
  },
  {
    phase: 3,
    title: "Database & Cloud",
    duration: "Week 15 - 16",
    icon: <Database size={24} className="text-[#0F2757]" />,
    items: [
      "PostgreSQL schema design and complex relational queries.",
      "Docker containerization for consistent environments.",
      "Automated CI/CD implementation via GitHub Actions."
    ],
  },
  {
    phase: 4,
    title: "AI Integration",
    duration: "Week 17 - 18",
    icon: <BrainCircuit size={24} className="text-[#0F2757]" />,
    items: [
      "Vector databases and intelligent search mechanisms.",
      "Building context-aware agents using LangChain.",
      "Integrating LLM APIs into live application endpoints."
    ],
  },
  {
    phase: 5,
    title: "Production Deployment",
    duration: "Week 19 - 20",
    icon: <Rocket size={24} className="text-[#0F2757]" />,
    items: [
      "Load balancing and horizontal scaling strategies.",
      "Performance monitoring and logging architectures.",
      "Final capstone presentation to hiring partners."
    ],
  },
];

const CourseRoadmap = () => {
  return (
    <section className="min-h-screen bg-[#F1F5F9] font-sans selection:bg-[#F97015]/20 selection:text-[#0F2757] flex flex-col lg:flex-row overflow-hidden">
      
      {/* LEFT COLUMN: Sticky Hero Context (Dark Theme) */}
      <div className="lg:w-5/12 relative bg-[#0C1831] lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8 md:p-16 z-20 shadow-2xl">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -right-[20%] w-[500px] h-[500px] rounded-full bg-[#0F2757] blur-[120px]" 
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#203560]/40 border border-[#203560] backdrop-blur-md rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#F97015] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#F1F5F9]">
                Execution Roadmap
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFFFFF] leading-[1.1] tracking-tight mb-6">
              Python Fullstack <span className="text-[#F97015]">Engineering</span>
            </h1>

            <p className="text-xl text-[#E2E8F5] leading-relaxed font-medium mb-10">
              From fundamentals to production-grade architecture. Master interfaces, scalable backends, and modern AI pipelines through hands-on project execution.
            </p>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="group flex items-center gap-3 px-8 py-4 bg-[#F97015] hover:bg-[#E05D06] text-[#FFFFFF] rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(249,112,21,0.3)] transition-all hover:-translate-y-1 w-max"
            >
              Begin the Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Winding Road Timeline (Light Theme) */}
      <div className="lg:w-7/12 relative py-20 px-4 md:px-12 bg-[#F3F5F7]">
        <div className="max-w-3xl mx-auto relative">
          
          {/* THE ROAD (Thick dark line with dashed center) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-12 md:w-16 bg-[#29303D] transform md:-translate-x-1/2 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex justify-center overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-1 border-l-4 border-dashed border-[#FFFFFF]/40 h-full origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-32 relative pt-10 pb-20">
            {syllabusData.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                  
                  {/* MAP PIN (Droplet shape from the reference image) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="absolute left-14 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Droplet Shape */}
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F97015] shadow-xl border-4 border-[#FFFFFF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E05D06]"
                           style={{ 
                             borderRadius: '50% 50% 50% 0', 
                             transform: 'rotate(-45deg)' 
                           }}>
                        {/* Un-rotate the number inside */}
                        <span className="text-xl md:text-2xl font-black text-[#FFFFFF]" style={{ transform: 'rotate(45deg)' }}>
                          {step.phase}
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
                    <div className="bg-[#FFFFFF] p-8 rounded-3xl shadow-[0_10px_30px_rgb(41,48,61,0.06)] border border-[#E2E8F5] hover:border-[#F97015]/40 hover:shadow-[0_20px_40px_rgb(249,112,21,0.1)] transition-all duration-300 relative">
                      
                      {/* Connection branch to the road (Visible on Desktop) */}
                      <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#29303D] ${isEven ? '-right-8' : '-left-8'}`} />

                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl ${isEven ? 'md:order-2 bg-[#F1F5F9]' : 'bg-[#F1F5F9]'}`}>
                          {step.icon}
                        </div>
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'}`}>
                          <span className="text-xs font-bold tracking-widest text-[#F97015] uppercase bg-[#F97015]/10 px-3 py-1 rounded-full mb-2 w-max">
                            {step.duration}
                          </span>
                          <h3 className="text-2xl font-bold text-[#29303D] leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        {step.items.map((item, i) => (
                          <div key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                            <div className="mt-1 flex-shrink-0">
                              <ArrowRight size={16} className={`text-[#737B8C] ${isEven ? 'transform rotate-180 md:rotate-0' : ''}`} />
                            </div>
                            <span className="text-[#737B8C] font-medium leading-relaxed text-sm md:text-base">
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

          {/* Road ending gradient fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F3F5F7] to-transparent z-10 pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

export default CourseRoadmap;