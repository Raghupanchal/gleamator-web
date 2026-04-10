import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; 
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import it1 from "@/assets/it1.jpeg";
import it2 from "@/assets/it2.jpeg";
import securityImage from "@/assets/hr-services.jpg";
import whyImage from "@/assets/about-office.jpg";
import { CheckCircle, ArrowRight } from "lucide-react"; 
import { motion } from "framer-motion";

const offerings = [
  {
    lottieSrc: "https://lottie.host/06033814-2006-429c-8b0c-577c9b1909bd/my12XuGEfT.lottie", 
    title: "IT Infrastructure",
    description: "End-to-end hardware deployment, network setup, and 24/7 system maintenance.",
    details: "Streamline your operations with robust infrastructure. We handle everything from initial assessment to ongoing optimization.",
    features: ["Hardware Deployment", "Network Config", "24/7 Tech Support", "System Maintenance"],
    image: it1,
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    lottieSrc: "https://lottie.host/b62adb0e-0231-4691-9ddd-0caf91d50274/D13aUDNyPh.lottie",
    title: "Security & Access",
    description: "Integrated CCTV and access control systems for comprehensive premise protection.",
    details: "State-of-the-art surveillance and real-time alerts. Our systems combine monitoring with smart access for total safety.",
    features: ["CCTV Installation", "Access Control", "Real-time Alerts", "System Integration"],
    image: it2,
    color: "from-emerald-600/20 to-teal-600/20"
  },
];

const ITServicesPage = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [it1, it2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 0.1 seconds = 100ms

    return () => clearInterval(interval);
  }, [images.length]);

  const handleContactClick = () => navigate('/contact');

  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="Smart Solutions. Seamless Execution." title="IT Services & ITeS" />

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative rounded-2xl shadow-2xl w-full h-[350px] md:h-[400px] overflow-hidden">
                 {images.map((image, index) => (
                   <motion.img
                     key={index}
                     src={image}
                     alt={`IT services ${index + 1}`}
                     className="absolute inset-0 w-full h-full object-cover"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                     transition={{ duration: 0.1, ease: "easeInOut" }}
                   />
                 ))}
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Smart Solutions. <br/>Seamless Execution.</h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                At Gleamator Technologies, we deliver robust IT services and ITeS solutions that help businesses operate efficiently and scale confidently. Our team combines deep technical expertise with a customer-first mindset.
              </p>
              <div className="flex gap-8 pt-4">
                <div className="flex flex-col border-l-4 border-accent pl-4">
                    <span className="text-2xl md:text-3xl font-bold text-primary">100%</span>
                    <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500">Reliability</span>
                </div>
                <div className="flex flex-col border-l-4 border-accent pl-4">
                    <span className="text-2xl md:text-3xl font-bold text-primary">24/7</span>
                    <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section - Light Background */}
      <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-accent">Specializations</span></h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base px-4">Click a card to explore technical features and service details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offerings.map((o, index) => (
              <div 
                key={index} 
                className="group h-[500px] sm:h-[460px] md:h-[420px] [perspective:1000px] cursor-pointer"
                onClick={() => setFlippedCardIndex(flippedCardIndex === index ? null : index)}
              >
                <motion.div 
                  className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
                  animate={{ rotateY: flippedCardIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    {/* Light Card Background */}
                    <div className="h-full w-full rounded-3xl bg-white border border-slate-200 p-8 md:p-10 flex flex-col items-center text-center justify-between hover:border-accent/50 transition-colors shadow-xl">
                      
                      {/* FIXED OVERLAP - FRONT */}
                      <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${o.color} mb-4 md:mb-6 shadow-inner flex items-center justify-center overflow-hidden`}>
                        {o.lottieSrc && (
                          <div className="absolute inset-0 flex items-center justify-center scale-[1.35]">
                            <DotLottieReact src={o.lottieSrc} loop autoplay className="w-full h-full" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{o.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed px-2 md:px-4">{o.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.2em] mt-6 group-hover:gap-4 transition-all">
                        Explore Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full rounded-3xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-xl border border-slate-200">
                    <img src={o.image} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="service background" />
                    {/* Light Gradient on Back */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-50/95 to-slate-50/80 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                           
                           {/* FIXED OVERLAP - BACK */}
                           <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/20 shrink-0 flex items-center justify-center overflow-hidden border border-accent/30">
                             {o.lottieSrc && (
                                <div className="absolute inset-0 flex items-center justify-center scale-[1.4]">
                                  <DotLottieReact src={o.lottieSrc} loop autoplay className="w-full h-full" />
                                </div>
                             )}
                           </div>

                           <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{o.title}</h3>
                        </div>
                        <p className="text-slate-700 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{o.details}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                          {o.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 bg-slate-100 rounded-xl p-2.5 md:p-3 border border-slate-200">
                              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span className="text-[11px] md:text-xs font-semibold text-slate-800 tracking-wide">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={(e) => { e.stopPropagation(); handleContactClick(); }}
                        className="w-full py-3.5 md:py-4 bg-accent hover:bg-orange-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-accent/20 mt-4 relative z-10"
                      >
                        Consult Our Team
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gleamator Section */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col md:row-reverse md:flex-row items-center gap-10 md:gap-16 border border-slate-100">
            
            <div className="md:w-1/2 w-full">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl group">
                <img 
                  src={whyImage} 
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Modern Office Environment" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
              </div>
            </div>

            <div className="md:w-1/2 space-y-8 md:space-y-10 w-full">
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                  Why Gleamator?
                </h2>
                <p className="text-slate-600 text-base md:text-xl leading-relaxed">
                  We deliver practical, scalable solutions tailored to your organization's exact technical requirements.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  "Reliable Systems for uninterrupted workflow",
                  "Proactive Support from experienced engineers",
                  "Customized Architecture designed for your scale"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 shadow-sm transition-all group-hover:bg-orange-600 group-hover:border-orange-600">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-base md:text-xl font-semibold text-[#334155]">
                      {item.split(' ').slice(0, 2).join(' ')}
                      <span className="font-normal text-slate-500 text-sm md:text-base block md:inline md:ml-2">
                        {item.split(' ').slice(2).join(' ')}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServicesPage;