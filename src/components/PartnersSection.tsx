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

const partnerLogos = [
  { name: "BIET", logo: op1 },
  { name: "Goushiya", logo: op2 },
  { name: "Karnataka State Women's", logo: op3 },
  { name: "Maratha", logo: op4 },
  { name: "Mysuru Royal", logo: op5 },
  { name: "Veerappa", logo: op6 },
  { name: "Vivekananda", logo: op7 },
  { name: "JNTU Hyderabad", logo: op8 },
  { name: "L&T", logo: op9 },
  { name: "KUIDFC", logo: op10 },
  { name: "NPSS", logo: op11 },
  { name: "VTU", logo: op12 },
  { name: "Railtel", logo: op13 },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Official Partners</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
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
