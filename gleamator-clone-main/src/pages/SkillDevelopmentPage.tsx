import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import course1 from "@/assets/course-1.jpg";
import { GraduationCap, Lightbulb, BookOpen, Briefcase } from "lucide-react";

const offerings = [
  { icon: GraduationCap, title: "Government-Sponsored Training Programs", description: "Affordable and accessible courses backed by leading government schemes." },
  { icon: Lightbulb, title: "Hands-On Learning", description: "Real-time projects, practical sessions, and mentor-led guidance." },
  { icon: BookOpen, title: "Industry-Relevant Skills", description: "Affordable and accessible courses backed by leading government schemes." },
  { icon: Briefcase, title: "Placement Support", description: "Interview preparation, resume building, and multiple placement opportunities." },
];

const govtSchemes = [
  { title: "PM Vishwakarma", description: "The PM Vishwakarma scheme is a Central Sector Scheme to support artisans and craftspeople by providing skill training, access to collateral-free credit, modern tools, and market linkages." },
  { title: "Swatantrya Amrutha Mahotsava Munnade Yojane", description: '"Amrutha Munnade" is a Karnataka government skill development program aimed at increasing the employability of youth from backward classes by providing free, short-term, skill-based training courses.' },
  { title: "Directorate of Minorities", description: "The Directorate of Minorities in Karnataka focuses on a wide range of projects, including educational support, skill development and training programs, and infrastructure development for minority communities." },
];

const SkillDevelopmentPage = () => {
  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="Empowering Learners. Enhancing Careers." title="Skill Development Programmes" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={course1} alt="Skill development training" className="rounded-lg shadow-lg w-full object-cover" loading="lazy" width={640} height={512} />
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
              <div key={o.title} className="bg-navy-light rounded-lg p-6 text-center hover:bg-navy-light/80 transition-colors">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <o.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-hero mb-2 text-sm">{o.title}</h3>
                <p className="text-hero/60 text-sm">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Govt Schemes under VTU - Skill Development Centre
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {govtSchemes.map((s) => (
              <div key={s.title} className="bg-card rounded-lg shadow-md p-6 border-l-4 border-l-accent">
                <h3 className="font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Gleamator?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We focus on <strong>clarity, execution, and outcomes</strong>. Our goal is simple: to help you unlock your potential and step into your career with confidence.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SkillDevelopmentPage;
