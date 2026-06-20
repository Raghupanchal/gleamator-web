import op1 from '../assets/op1.png';
import op2 from '../assets/op2.png';
import op3 from '../assets/op3.png';
import op4 from '../assets/op4.png';
import op5 from '../assets/op5.png';
import op6 from '../assets/op6.png';
import op7 from '../assets/op7.png';
import op8 from '../assets/op8.png';
import op9 from '../assets/op9.png';
import op10 from '../assets/op10.png';
import op11 from '../assets/op11.png';
import op12 from '../assets/op12.png';
import op13 from '../assets/op13.png';
import vrif from '../assets/vrif.png';
import VTU_Logo from '../assets/VTU-Logo.webp';
import davangereLogo from '../assets/davangereunivercityimag.jpg';
import ltsuLogo from '../assets/LTsu-nn-150x150.png';
import jyothyLogo from '../assets/jyothy-150x150.png';
import eastWestLogo from '../assets/east-west-150x150.png';
import plc1 from '../assets/plc1.png';
import plc2 from '../assets/plc2.png';
import plc3 from '../assets/plc3.png';
import plc4 from '../assets/plc4.png';
import plc5 from '../assets/plc5.png';

const partnerLogos = [
  { name: "Goushiya", logo: op2 },
  { name: "Karnataka State Women's", logo: op3 },
  { name: "Maratha", logo: op4 },
  { name: "Mysuru Royal", logo: op5 },
  { name: "Veerappa", logo: op6 },
  { name: "Vivekananda", logo: op7 },
  { name: "NPSS", logo: op11 },
  { name: "LTSU", logo: ltsuLogo },
  { name: "Jyothy Institute", logo: jyothyLogo },
  { name: "East West Group", logo: eastWestLogo },
];

const placements = [
  { name: "Khasab Adhil Ahamed", photo: plc1 },
  { name: "Vinay Kumar G R", photo: plc2 },
  { name: "Danie M", photo: plc3 },
  { name: "Hemanth S", photo: plc4 },
  { name: "Vikram Raj", photo: plc5 },
];

const officialPartners = [
  { name: 'JNTU Hyderabad', logo: op8 },
  { name: 'Railtel', logo: op13 },
  { name: 'VRIF', logo: vrif },
  { name: 'L&T', logo: op1 },
  { name: "VTU", logo: VTU_Logo },
  { name: 'Davangere University', logo: davangereLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#F4F4F6] border-t border-b border-gray-200/60 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollResponsive {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-responsive {
          display: flex;
          width: max-content;
          animation: scrollResponsive 12s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll-responsive {
            animation: scrollResponsive 20s linear infinite;
          }
        }
        .animate-scroll-responsive:hover {
          animation-play-state: paused;
        }
      ` }} />
      {/* Our Clients Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center tracking-tight"> Our Clients </h2>
        <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {officialPartners.map((partner) => (
            <div
              key={partner.name}
              className="w-20 h-20 sm:w-28 sm:h-28 bg-white border border-gray-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-center p-3 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:border-gray-200 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain scale-[1.05] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Academic Partners Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center tracking-tight">Academic Partners</h2>
        <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-responsive">
          {[...partnerLogos, ...partnerLogos].map((partner, i) => (
            <div
              key={`academic-${partner.name}-${i}`}
              className="flex-shrink-0 mx-3 w-20 h-20 sm:w-28 sm:h-28 bg-white border border-gray-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-center p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:border-gray-200 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain scale-[1.05] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Placed Students Section */}
      <div className="container mx-auto px-4 mt-24 mb-14 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Celebrating Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-amber-500">Placed Students</span>
        </h2>
        {/* Wave Line divider */}
        <svg className="w-28 h-2 text-[#FF6B00] mx-auto mt-4" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <p className="text-gray-500 font-medium text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
          From intensive training to successful careers — see how our graduates secured roles at top engineering units globally.
        </p>
      </div>

      <div className="relative overflow-hidden w-full select-none py-6">
        {/* Premium Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F4F4F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F4F4F6] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-responsive cursor-pointer">
          {[...placements, ...placements, ...placements, ...placements].map((student, i) => (
            <div
              key={`placed-${i}`}
              className="flex-shrink-0 mx-3 w-[120px] h-[142px] sm:w-[140px] sm:h-[166px] bg-white border border-gray-200/80 rounded-[1.25rem] shadow-[0_6px_16px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(255,107,0,0.15)] hover:scale-[1.05]"
            >
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
