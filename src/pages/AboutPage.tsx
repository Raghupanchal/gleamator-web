import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOffice from "@/assets/about-office.jpg";
import leader1 from "@/assets/leader-1.webp";
import leader2 from "@/assets/leader-2.webp";
import leader3 from "@/assets/leader-3.png";
import director1 from "@/assets/director-1.png";
import director2 from "@/assets/director-2.webp";
import director3 from "@/assets/director-3.png";
import director4 from "@/assets/raghavendra.jpeg";
import teamPhoto from "@/assets/team-photo.jpg";
import awardTrophy from "@/assets/award-trophy.jpg";
import awardCertificate from "@/assets/awards-certificate.jpg";
import { Eye, Target, Layers, Globe, Settings, Users, Lightbulb, Heart, Linkedin, Mail } from "lucide-react";

const values = [
  { icon: Layers, title: "Comprehensive Service Offerings", description: "We offer a wide range of services, including IT solutions, skill development, corporate training, and HR services. With everything under one roof, we simplify your organizational needs and eliminate the need for multiple service providers." },
  { icon: Globe, title: "Pan-India Presence", description: "With a strong partner network and infrastructure across India, we efficiently manage projects anywhere in the country. This ensures local support and scalable solutions for our clients." },
  { icon: Settings, title: "Customized Solutions", description: "We design customized solutions to fit each client's unique requirements. Our personalized approach ensures effective results that align with your specific goals and challenges." },
  { icon: Users, title: "Expert Team", description: "Backed by over 20 years of experience, our skilled team brings expertise across IT solutions, training, and HR services. We are committed to delivering high-quality results that meet your needs." },
  { icon: Lightbulb, title: "Focus On Innovation", description: "Innovation drives us to adopt the latest technologies and methods, enabling us to deliver advanced and impactful solutions that keep you ahead." },
  { icon: Heart, title: "Client-Centric Approach", description: "We build strong relationships by understanding our clients needs. This ensures our solutions are not only robust but also practical and sustainable for long-term success." },
];

const leadership = [
  { image: leader1, name: "Vikram J", role: "Managing Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: leader2, name: "Bhaskar N", role: "CEO", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: leader3, name: "Jayanth V", role: "COO", linkedin: "#", email: "mailto:contact@gleamator.com" },
];

const directors = [
  { image: director1, name: "Vishal", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director2, name: "Raghunath S", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director3, name: "Ramesh", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
  { image: director4, name: "Raghavendra", role: "Director", linkedin: "#", email: "mailto:contact@gleamator.com" },
];

const AboutPage = () => {
  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="About Company" title="Gleamator Technologies" />

      {/* We Are Beyond */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">We Are Beyond</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gleamator is a startup founded in 2024, backed by a team with over 20 years of experience in IT services, skill development, and workforce solutions. We help businesses build stronger systems and stronger teams by combining technology, training, and talent in a way that's practical and effective.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe growth happens when people and systems are aligned. So our work always starts with understanding how your business actually operates — then improving what matters most.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <img src={aboutOffice} alt="Gleamator office" className="rounded-lg shadow-lg w-full object-cover" loading="lazy" width={800} height={600} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-navy-light rounded-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-hero">Vision</h3>
                </div>
                <p className="text-hero/70 leading-relaxed text-white">
                  To empower individuals and businesses with advanced skills, innovative IT solutions, and reliable manpower services, fostering growth and success in the digital age.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-navy-light rounded-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-hero">Mission</h3>
                </div>
                <p className="text-hero/70 leading-relaxed text-white">
                  Bridge skill gaps, offer innovative IT solutions, and connect businesses with the right talent to drive growth and success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values (Updated UI) */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Delivering excellence through innovation, expertise, and a commitment to your success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="group relative bg-card/80 backdrop-blur-md border border-border/40 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out h-full overflow-hidden cursor-default">
                  
                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Inner Content */}
                  <div className="flex flex-col h-full relative z-10">
                    {/* Icon Container with subtle inner shadow and hover scale */}
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500 ease-out shadow-sm">
                      <v.icon className="w-8 h-8 text-accent drop-shadow-sm transition-transform duration-500" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-foreground mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                      {v.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {v.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent mb-3 inline-block font-display">
                Executive Board
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                Our Leadership
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Guided by experience and driven by innovation, meet the key leaders steering our vision.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.15}>
                <div className="group relative p-[1px] bg-slate-200/60 dark:bg-slate-800 rounded-[2.1rem] hover:bg-gradient-to-br hover:from-accent hover:to-primary transition-all duration-500 shadow-sm hover:shadow-[0_25px_60px_rgba(24,95,53,0.15)] hover:-translate-y-2">
                  <div className="bg-card rounded-[2rem] p-4 overflow-hidden flex flex-col justify-start h-full">
                    
                    {/* Image Wrapper */}
                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-[#FAF6F2] flex items-center justify-center">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 ease-out group-hover:scale-110" 
                        loading="lazy" 
                        width={512} 
                        height={512} 
                      />
                      
                      {/* Dark/Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        <a 
                          href={person.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`${person.name} LinkedIn`}
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={person.email} 
                          aria-label={`Email ${person.name}`}
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="pt-6 pb-2 px-2 text-center">
                      <span className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-accent bg-accent/5 px-3 py-1 rounded-full">
                        {person.role}
                      </span>
                      <h3 className="font-display font-extrabold text-[#0F172A] text-lg md:text-xl tracking-tight mt-3 mb-1 group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h3>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle background glow for a premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent mb-3 inline-block font-display">
                Board of Directors
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                Our Directors
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Supported by a strong board of directors providing governance and expertise.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {directors.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.1}>
                <div className="group relative p-[1px] bg-slate-200/60 dark:bg-slate-800 rounded-[2.1rem] hover:bg-gradient-to-br hover:from-accent hover:to-primary transition-all duration-500 shadow-sm hover:shadow-[0_25px_60px_rgba(24,95,53,0.15)] hover:-translate-y-2">
                  <div className="bg-card rounded-[2rem] p-3 overflow-hidden flex flex-col justify-start h-full">
                    
                    {/* Image Wrapper */}
                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-[#FAF6F2] flex items-center justify-center">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 ease-out group-hover:scale-110" 
                        loading="lazy" 
                        width={512} 
                        height={512} 
                      />
                      
                      {/* Dark/Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                        <a 
                          href={person.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`${person.name} LinkedIn`}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                        <a 
                          href={person.email} 
                          aria-label={`Email ${person.name}`}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="pt-5 pb-1 px-1 text-center">
                      <span className="text-[9px] md:text-[11px] font-display font-bold uppercase tracking-wider text-accent bg-accent/5 px-2.5 py-0.5 rounded-full">
                        {person.role}
                      </span>
                      <h3 className="font-display font-extrabold text-[#0F172A] text-sm md:text-lg tracking-tight mt-2.5 mb-0.5 group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h3>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Team</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={teamPhoto} alt="Gleamator team" className="rounded-lg shadow-lg mx-auto max-w-3xl w-full object-cover" loading="lazy" width={1024} height={600} />
          </AnimatedSection>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">Awards & Recognition</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection direction="left"> 
              <div className="group bg-white border-[10px] border-white p-3 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(255,107,0,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
                {/* Mount Frame container */}
                <div className="w-full aspect-[4/5] rounded-2xl border border-slate-100 bg-[#FAF9F5] flex items-center justify-center p-4 overflow-hidden relative shadow-inner">
                  <img 
                    src={awardTrophy} 
                    alt="The Great Indian Startup Awards trophy" 
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" 
                    loading="lazy" 
                    width={640} 
                    height={800} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Great Indian Startup Awards</p>
                <p className="mt-1 text-sm font-semibold text-slate-800 text-center">Award Trophy - GREAT INDIAN STARTUP AWARDS 2025</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="group bg-white border-[10px] border-white p-3 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(255,107,0,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
                {/* Mount Frame container */}
                <div className="w-full aspect-[4/5] rounded-2xl border border-slate-100 bg-[#FAF9F5] flex items-center justify-center p-4 overflow-hidden relative shadow-inner">
                  <img 
                    src={awardCertificate} 
                    alt="Certificate of Recognition" 
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" 
                    loading="lazy" 
                    width={640} 
                    height={800} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Gleamator Technologies Recognition</p>
                <p className="mt-1 text-sm font-semibold text-slate-800 text-center">Certificate of Excellence - ग्रेट इंडियन स्टार्टअप अवार्ड्स</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;