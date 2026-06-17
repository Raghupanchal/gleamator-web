import aboutImage from "@/assets/about-image.jpg";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-lg" />
              <img
                src={aboutImage}
                alt="Gleamator team"
                className="relative rounded-lg shadow-lg w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Gleamator Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dynamic startup founded in the year 2024 that combines expertise in skill training, IT services, and manpower outsourcing. Our team of seasoned professionals with more than 20 years of industry experience is committed to delivering exceptional services to our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We at Gleamator Technologies are Shaping Futures with Technology and Talent. We believe in empowering businesses and individuals with the right skills, technology, and talent. From cutting-edge IT solutions to manpower outsourcing and skill training, we help businesses thrive in the digital age.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
