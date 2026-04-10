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

const partnerLogos = [
  { name: "Goushiya", logo: op2 },
  { name: "Karnataka State Women's", logo: op3 },
  { name: "Maratha", logo: op4 },
  { name: "Mysuru Royal", logo: op5 },
  { name: "Veerappa", logo: op6 },
  { name: "Vivekananda", logo: op7 },
  { name: "JNTU Hyderabad", logo: op10},
  { name: "NPSS", logo: op11 },
];

const officialPartners = [
  { name: 'JNTU Hyderabad', logo: op8 },
  { name: 'Railtel', logo: op13 },
  { name: 'VRIF', logo: vrif },
  { name: 'L&T', logo: op1 },
  { name: "VTU", logo: VTU_Logo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center"> MOE Partners</h2>
      </div>
      <div className="relative">
        <div className="flex flex-wrap justify-center gap-6">
          {officialPartners.map((partner) => (
            <div
              key={partner.name}
              className="w-28 h-28 bg-card rounded-lg shadow-sm flex items-center justify-center p-3 transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Academic Partners</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((partner, i) => (
            <div
              key={`academic-${partner.name}-${i}`}
              className="flex-shrink-0 mx-4 w-28 h-28 bg-card rounded-lg shadow-sm flex items-center justify-center p-3"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
