import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import course1 from "@/assets/tailoring.jpg";
import course2 from "@/assets/skill-dev.jpg";
import course3 from "@/assets/skill-developement.jpg";
import pm1 from "@/assets/pm1.jpeg";
import gs2 from "@/assets/gs2.jpeg";
import gs3 from "@/assets/GS3.jpeg";
import whyImage from "@/assets/about-office.jpg";
import { GraduationCap, Lightbulb, BookOpen, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const offerings = [
  { icon: GraduationCap, title: "Government-Sponsored Training Programs", description: "Affordable and accessible courses backed by leading government schemes." },
  { icon: Lightbulb, title: "Hands-On Learning", description: "Real-time projects, practical sessions, and mentor-led guidance." },
  { icon: BookOpen, title: "Industry-Relevant Skills", description: "Affordable and accessible courses backed by leading government schemes." },
  { icon: Briefcase, title: "Placement Support", description: "Interview preparation, resume building, and multiple placement opportunities." },
];

// Updated to use an array of 'images' for the multi-image animation
const govtSchemes = [
  { 
    title: "PM Vishwakarma", 
    description: "The PM Vishwakarma scheme is a Central Sector Scheme to support artisans and craftspeople by providing skill training, access to collateral-free credit, modern tools, and market linkages.", 
    images: [pm1, course1] // Replace course1 with your actual 2nd image
  },
  { 
    title: "Swatantrya Amrutha Mahotsava Munnade Yojane", 
    description: '"Amrutha Munnade" is a Karnataka government skill development program aimed at increasing the employability of youth from backward classes by providing free, short-term, skill-based training courses.', 
    images: [gs2, course2] // Replace course2 with your actual 2nd image
  },
  { 
    title: "Directorate of Minorities", 
    description: "The Directorate of Minorities in Karnataka focuses on a wide range of projects, including educational support, skill development and training programs, and infrastructure development for minority communities.", 
    images: [gs3, course3] // Replace course3 with your actual 2nd image
  },
];

// Custom component to handle the fading image animation for the cards
const AnimatedCardImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Changes image every 3.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-44 overflow-hidden group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-110 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          loading="lazy"
        />
      ))}
      
      {/* Animated progress dots at the bottom of the image */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
              index === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SkillDevelopmentPage = () => {
  const images = [course1, course2, course3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="Empowering Learners. Enhancing Careers." title="Skill Development Programmes" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={images[currentImageIndex]}
                alt="Skill development training"
                className="w-full h-80 object-cover transition-opacity duration-1000 ease-in-out"
                loading="lazy"
                width={640}
                height={512}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Empowering Learners. Enhancing Careers.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most of our training programs are sponsored by Government initiatives, making high-quality skill development accessible to everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Gleamator Technologies, we focus on delivering practical, industry-aligned training that helps learners gain confidence, improve employability, and build meaningful careers. Our programs are designed to bridge the gap between education and real-world job requirements ensuring every participant gains hands-on exposure and job-ready capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-hero text-center mb-12">What <span className="font-extrabold">We Offer</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.18)] transform-gpu transition duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <o.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{o.title}</h3>
                <p className="text-white/80 text-sm">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h4 className="text-3xl font-bold text-primary text-center mb-12">
            Mobilized candidates for government schemes.
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {govtSchemes.map((s) => (
              <div key={s.title} className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform-gpu transition duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl border-l-4 border-l-accent flex flex-col h-full">
                
                {/* Replaced static image with the new animated multi-image component */}
                <AnimatedCardImage images={s.images} />
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-black mb-3">{s.title}</h3>
                  <p className="text-black font-medium text-sm leading-relaxed flex-grow">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={whyImage} alt="Why Gleamator background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block rounded-3xl bg-white/95 p-10 shadow-2xl border border-white/80 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Gleamator?</h2>
            <p className="text-foreground max-w-2xl mx-auto">
              We focus on <strong>clarity, execution, and outcomes</strong>. Our goal is simple: to help you unlock your potential and step into your career with confidence.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillDevelopmentPage;