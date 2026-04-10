import { CheckCircle, ChevronRight } from "lucide-react"; 
import aboutImage from "@/assets/gleamator-about1.png";
import giconImage from "@/assets/gicon.png"; 
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAvNjAlIi8+PC9zdmc+')] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 lg:w-96 h-64 lg:h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

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
          outline: none; /* Removes default browser click ring */
        }

        /* Desktop & Mac (1024px and up) */
        @media (min-width: 1024px) {
          .my-3d-card { width: 330px; height: 460px; } 
          .my-3d-card:hover, .my-3d-card:focus {
            z-index: 50;
            transform: rotate(-1deg) translateX(130px) translateY(-10px);
            box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15), 30px 30px 80px rgba(0,0,0,0.08);
          }
          .card-details { padding: 40px 30px; }
        }

        /* Tablets (641px to 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .my-3d-card { width: 300px; height: 420px; }
          .my-3d-card:hover, .my-3d-card:focus {
            z-index: 50;
            transform: rotate(-1deg) translateX(100px);
          }
          .card-details { padding: 35px 25px; }
        }

        /* Mobile Phones (up to 640px) */
        @media (max-width: 640px) {
          .my-3d-card { width: 280px; height: 400px; }
          .my-3d-card:hover, .my-3d-card:focus {
            z-index: 50;
            transform: translateX(60px) scale(0.68);
          }
          .card-details { padding: 25px 20px; }
          .card-details h3 { font-size: 1.25rem !important; }
          .card-details p { font-size: 0.85rem !important; }
        }

        .my-3d-card .img-container {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          transform-origin: left;
          z-index: 2;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-style: preserve-3d;
        }

        /* Book Cover Open Interaction */
        .my-3d-card:hover .img-container,
        .my-3d-card:focus .img-container { 
          transform: rotateY(-160deg); 
          box-shadow: 15px 0 25px rgba(0,0,0,0.15); 
        }

        .cover-front, .cover-back {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          border-radius: 6px 16px 16px 6px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Front Cover Styles */
        .cover-front { transform: rotateY(0deg); }

        .cover-front img {
          position: absolute; left: 0; top: 0;
          height: 100%; width: 100%;
          object-fit: cover; 
          object-position: center;
          border-radius: 6px 16px 16px 6px;
        }

        .cover-front .img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.2) 40%, transparent 100%);
          pointer-events: none;
          border-radius: 6px 16px 16px 6px;
        }

        .my-3d-card:hover .cover-front img,
        .my-3d-card:focus .cover-front img { 
          transform: scale(1.05); 
          transition: transform 0.8s ease; 
        }

        /* Hover hint positioned properly */
        .hover-hint {
          position: absolute; bottom: 20px; right: 20px;
          z-index: 10;
        }

        /* Back Cover (Inside Left Page) - Photo Layout */
        .cover-back {
          transform: rotateY(180deg);
          background: #0f172a; 
          border: 1px solid #334155;
          border-right: 2px solid #cbd5e1;
          box-shadow: inset -15px 0 20px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .cover-back .bg-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.35;
          filter: grayscale(100%);
        }

        .my-3d-card .card-details {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          box-sizing: border-box;
          z-index: 1;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 6px 16px 16px 6px;
          border: 1px solid #e2e8f0;
          border-left: 6px solid #cbd5e1;
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
              <div className="my-3d-card" tabIndex="0">
                
                {/* Book Cover Flap */}
                <div className="img-container">
                  
                  {/* FRONT OF COVER */}
                  <div className="cover-front">
                    <img src={aboutImage} alt="Gleamator Team" />
                    <div className="img-overlay" />
                    
                    {/* Icon-Only Orange Hint */}
                    <div className="hover-hint animate-pulse">
                      <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-orange-100 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-orange-500 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* BACK OF COVER (Inside Left Page) - Photo Overlay Layout */}
                  <div className="cover-back">
                    {/* Inner Photo Background */}
                    <img src={aboutImage} alt="Office Inside" className="bg-img" />
                    
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                    
                    {/* Spine shadow effect */}
                    <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10" />
                    
                    {/* Content inside the photo cover */}
                    <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 text-center">
                      
                      <div className="w-16 h-16 rounded-full border border-orange-500/50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(249,115,22,0.3)] overflow-hidden p-1.5">
                        <img src={giconImage} alt="Gleamator Icon" className="w-full h-full object-contain" />
                      </div>

                      <h4 className="text-white font-bold tracking-[0.15em] text-lg uppercase mb-3">
                        Gleamator
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium italic">
                        "Driving excellence and transforming ideas into measurable success."
                      </p>
                    </div>
                  </div>
                  
                </div>

                {/* Inside Page Content (Right Page) */}
                <div className="card-details">
                  <span className="text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">Our Mission</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3 leading-tight">Shaping Futures Through Technology.</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 relative z-10">
                    We bridge the gap between human potential and technological advancement, empowering businesses to scale and individuals to thrive in the digital economy.
                  </p>
                  
                  {/* Quick Metrics - Updated colors to Orange */}
                  <div className="mt-auto flex flex-col gap-2.5 sm:gap-3 border-t border-slate-200 pt-3 sm:pt-4 relative z-10 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm font-medium">Industry Experience</span>
                      <span className="text-orange-600 font-bold text-sm bg-orange-50 px-2 py-1 rounded">20+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm font-medium">Founded</span>
                      <span className="text-orange-600 font-bold text-sm bg-orange-50 px-2 py-1 rounded">2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm font-medium">Focus</span>
                      <span className="text-orange-600 font-bold text-sm bg-orange-50 px-2 py-1 rounded">Skilling & IT</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN: Professional Typography & Structure */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs uppercase tracking-widest mb-6 shadow-sm border border-orange-200">
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
              <div className="border-l-4 border-orange-500 pl-5 py-4 mb-10 bg-white/80 backdrop-blur-sm rounded-r-xl text-left shadow-sm max-w-2xl mx-auto lg:mx-0">
                <p className="text-slate-700 italic font-medium text-sm lg:text-base leading-relaxed">
                  "Our team of seasoned professionals brings over 20 years of collective industry experience, committed to delivering exceptional, transformative services to our clients."
                </p>
              </div>

              {/* Structured Competencies List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-left max-w-2xl mx-auto lg:mx-0">
                {[
                  "Cutting-edge IT Solutions",
                  "Advanced Skill Training",
                  "Strategic Manpower",
                  "Digital Transformation",
                  "Cloud Infrastructure",
                  "Enterprise Consulting"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="bg-orange-50 rounded-full p-1 group-hover:bg-orange-100 transition-colors">
                      <CheckCircle className="w-5 h-5 text-orange-600 shrink-0" />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm lg:text-base group-hover:text-orange-600 transition-colors">
                      {item}
                    </span>
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