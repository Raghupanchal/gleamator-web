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
      {/* Our Clients Section */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center tracking-tight"> Our Clients </h2>
        <div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-wrap justify-center gap-4">
          {officialPartners.map((partner) => (
            <div
              key={partner.name}
              className="w-24 h-24 md:w-28 md:h-28 bg-white border border-gray-200/65 rounded-full shadow-sm flex items-center justify-center p-3.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-gray-300 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain scale-[1.25] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Academic Partners Section */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center tracking-tight">Academic Partners</h2>
        <div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-3"></div>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((partner, i) => (
            <div
              key={`academic-${partner.name}-${i}`}
              className="flex-shrink-0 mx-3 w-24 h-24 md:w-28 md:h-28 bg-white border border-gray-200/65 rounded-full shadow-sm flex items-center justify-center p-3.5 transition-all duration-300 hover:border-gray-350 overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain scale-[1.25] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
