import { CheckCircle, ChevronRight } from "lucide-react"; 
import aboutImage from "@/assets/gleamator-about1.png";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative Background Elements - Added a subtle dot pattern to make it feel less blank */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAvNjAlIi8+PC9zdmc+')] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 lg:w-96 h-64 lg:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* INJECTING CSS DIRECTLY: Premium Responsive 3D Book */}
      <style>{`
        .my-3d-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px 0;
          perspective: 2500px;
        }

        .my-3d-card {
          position: relative;
          background: #fff;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1), 20px 20px 60px rgba(0,0,0,0.05);
          cursor: pointer;
          border-radius: 6px 16px 16px 6px;
        }

        /* Desktop & Mac (1024px and up) */
        @media (min-width: 1024px) {
          .my-3d-card { width: 340px; height: 460px; } 
          .my-3d-card:hover {
            z-index: 50;
            transform: rotate(-3deg) translateX(80px) translateY(-10px);
            box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15), 30px 30px 80px rgba(0,0,0,0.08);
          }
          .card-details { padding: 40px 30px; }
        }

        /* Tablets (641px to 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .my-3d-card { width: 320px; height: 420px; }
          .my-3d-card:hover {
            z-index: 50;
            transform: rotate(-2deg) translateX(40px);
          }
          .card-details { padding: 35px 25px; }
        }

        /* Mobile Phones (up to 640px) */
        @media (max-width: 640px) {
          .my-3d-card { width: 280px; height: 380px; }
          .my-3d-card:hover {
            z-index: 50;
            transform: rotate(-2deg) translateX(25px);
          }
          .card-details { padding: 25px 20px; }
          .card-details h3 { font-size: 1.25rem !important; }
          .card-details p { font-size: 0.8rem !important; }
        }

        .my-3d-card .img-container {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          transform-origin: left;
          z-index: 2;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          
          /* The Inside Cover: Shows when the book opens */
          background: linear-gradient(135deg, #1e293b, #0f172a); 
          border: 1px solid #334155;
          border-radius: 6px 16px 16px 6px;
          box-shadow: inset 10px 0 20px rgba(0,0,0,0.5); /* Creates a deep spine feeling */
          
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        /* Hide the image, overlay, and hint from the back side so the dark cover shows through */
        .my-3d-card .img-container img, 
        .my-3d-card .img-overlay, 
        .my-3d-card .hover-hint {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .my-3d-card .img-container img {
          position: absolute; left: 0; top: 0;
          height: 100%; width: 100%;
          object-fit: cover; 
          border-radius: 6px 16px 16px 6px;
        }

        .my-3d-card .img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.1) 40%, transparent 100%);
          pointer-events: none;
          border-radius: 6px 16px 16px 6px;
        }

        .my-3d-card:hover .img-container img { transform: scale(1.05); }
        .my-3d-card:hover .img-container { transform: rotateY(-145deg); box-shadow: 20px 0 30px rgba(0,0,0,0.2); }

        .hover-hint {
          position: absolute; bottom: 20px; left: 20px;
          color: white; font-size: 0.85rem; font-weight: 500;
          display: flex; align-items: center; gap: 8px;
          letter-spacing: 0.05em;
          z-index: 10;
        }

        .my-3d-card .card-details {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          box-sizing: border-box;
          z-index: 1;
          
          /* Enhanced Page Texture */
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 6px 16px 16px 6px;
          border: 1px solid #e2e8f0;
          border-left: 6px solid #cbd5e1;
          
          /* Inner spine shadow & subtle dot grid */
          box-shadow: inset 15px 0 25px rgba(15,23,42,0.04);
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 20px 20px;
          
          display: flex; flex-direction: column;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: The Premium 3D Card */}
          <AnimatedSection direction="left">
            <div className="my-3d-card-wrapper">
              <div className="my-3d-card">
                
                {/* Book Cover */}
                <div className="img-container">
                  <img src={aboutImage} alt="Gleamator Team" />
                  <div className="img-overlay" />
                  <div className="hover-hint animate-pulse">
                    Hover to open <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Inside Page Content */}
                <div className="card-details">
                  <span className="text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">Our Mission</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 sm:mb-4 leading-tight">Shaping Futures Through Technology.</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                    We bridge the gap between human potential and technological advancement, empowering businesses to scale and individuals to thrive in the digital economy.
                  </p>
                  
                  {/* Quick Metrics inside the book */}
                  <div className="mt-auto space-y-3 sm:space-y-4 border-t border-slate-200 pt-4 sm:pt-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs sm:text-sm font-medium">Industry Experience</span>
                      <span className="text-slate-900 font-bold text-sm bg-white/50 px-2 py-1 rounded">20+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs sm:text-sm font-medium">Founded</span>
                      <span className="text-slate-900 font-bold text-sm bg-white/50 px-2 py-1 rounded">2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs sm:text-sm font-medium">Focus</span>
                      <span className="text-accent font-bold text-xs sm:text-sm bg-orange-50 px-2 py-1 rounded">IT & Skilling</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN: Professional Typography & Structure */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="text-center lg:text-left mt-4 lg:mt-0">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-6 shadow-sm border border-orange-200">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                About Gleamator
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Innovating Smarter, <br className="hidden sm:block"/> Growing Together.
              </h2>
              
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
                A dynamic startup founded in 2024, we combine deep expertise in skill training, IT services, and manpower outsourcing to deliver end-to-end solutions for modern enterprises.
              </p>

              {/* Highlighted Quote Block */}
              <div className="border-l-4 border-accent pl-5 py-4 mb-8 bg-white/80 backdrop-blur-sm rounded-r-xl text-left shadow-sm max-w-2xl mx-auto lg:mx-0">
                <p className="text-slate-700 italic font-medium text-sm lg:text-base leading-relaxed">
                  "Our team of seasoned professionals brings over 20 years of collective industry experience, committed to delivering exceptional, transformative services to our clients."
                </p>
              </div>

              {/* Structured Competencies List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto lg:mx-0">
                {[
                  "Cutting-edge IT Solutions",
                  "Advanced Skill Training",
                  "Strategic Manpower",
                  "Digital Transformation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 drop-shadow-sm" />
                    <span className="text-slate-700 font-medium text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;