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
import director4 from "@/assets/director-4.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import awardTrophy from "@/assets/award-trophy.jpg";
import awardCertificate from "@/assets/awards-certificate.jpg";
import { Eye, Target, Layers, Globe, Settings, Users, Lightbulb, Heart } from "lucide-react";

const values = [
  { icon: Layers, title: "Comprehensive Service Offerings", description: "We offer a wide range of services, including IT solutions, skill development, corporate training, and HR services. With everything under one roof, we simplify your organizational needs and eliminate the need for multiple service providers." },
  { icon: Globe, title: "Pan-India Presence", description: "With a strong partner network and infrastructure across India, we efficiently manage projects anywhere in the country. This ensures local support and scalable solutions for our clients." },
  { icon: Settings, title: "Customized Solutions", description: "We design customized solutions to fit each client's unique requirements. Our personalized approach ensures effective results that align with your specific goals and challenges." },
  { icon: Users, title: "Expert Team", description: "Backed by over 20 years of experience, our skilled team brings expertise across IT solutions, training, and HR services. We are committed to delivering high-quality results that meet your needs." },
  { icon: Lightbulb, title: "Focus On Innovation", description: "Innovation drives us to adopt the latest technologies and methods, enabling us to deliver advanced and impactful solutions that keep you ahead." },
  { icon: Heart, title: "Client-Centric Approach", description: "We build strong relationships by understanding our clients needs. This ensures our solutions are not only robust but also practical and sustainable for long-term success." },
];

const leadership = [
  { image: leader1, name: "Vikram J", role: "Managing Director" },
  { image: leader2, name: "Bhaskar N", role: "CEO" },
  { image: leader3, name: "Jayanth V", role: "COO" },
];

const directors = [
  { image: director1, name: "Vishal", role: "Director" },
  { image: director2, name: "Raghunath S", role: "Director" },
  { image: director3, name: "Ramesh", role: "Director" },
  { image: director4, name: "Raghavendra", role: "Director" },
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
                <p className="text-hero/70 leading-relaxed">
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
                <p className="text-hero/70 leading-relaxed">
                  Bridge skill gaps, offer innovative IT solutions, and connect businesses with the right talent to drive growth and success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Leadership</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.15}>
                <div className="text-center bg-card rounded-lg shadow-md p-6">
                  <div className="w-36 h-36 mx-auto mb-4 rounded-full border-4 border-navy overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
                  </div>
                  <h3 className="font-bold text-accent text-lg">{person.name}</h3>
                  <p className="text-muted-foreground text-sm">{person.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Directors</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {directors.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.1}>
                <div className="text-center bg-card rounded-lg shadow-md p-5">
                  <div className="w-28 h-28 mx-auto mb-3 rounded-full border-3 border-navy overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
                  </div>
                  <h3 className="font-bold text-accent">{person.name}</h3>
                  <p className="text-muted-foreground text-sm">{person.role}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Awards & Recognition</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <img src={awardTrophy} alt="The Great Indian Startup Awards trophy" className="rounded-lg shadow-lg w-full object-cover h-96" loading="lazy" width={640} height={800} />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <img src={awardCertificate} alt="Certificate of Recognition" className="rounded-lg shadow-lg w-full object-cover h-96" loading="lazy" width={640} height={800} />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
