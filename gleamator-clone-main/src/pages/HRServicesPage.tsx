import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import hrImage from "@/assets/hr-services.jpg";
import { Users, UserCheck, FileText, Building, BarChart3, Handshake, CheckCircle } from "lucide-react";

const offerings = [
  { icon: UserCheck, title: "Talent Acquisition & Recruitment", description: "Access pre-screened, job-ready talent aligned to your technical and organizational needs." },
  { icon: Users, title: "Contract Staffing & Workforce Management", description: "Flexible staffing solutions to meet short-term, long-term, or project-based workforce requirements." },
  { icon: FileText, title: "Payroll & Compliance Management", description: "Timely and accurate payroll processing with complete statutory compliance support." },
  { icon: Building, title: "HR Outsourcing", description: "Let us handle your HR functions end-to-end—from hiring to exit formalities—while you focus on core operations." },
  { icon: BarChart3, title: "Performance Management Support", description: "Clear frameworks and structured processes to help teams perform with accountability and consistency." },
  { icon: Handshake, title: "Employee Engagement", description: "Programs and initiatives designed to boost morale, retention, and workplace satisfaction." },
];

const whyPoints = [
  "Smooth Processes backed by efficient systems",
  "Teams that perform with clarity",
  "Consistent Support that continues long after deployment",
  "Reliable, responsive service tailored to your organization's specific needs",
];

const HRServicesPage = () => {
  return (
    <Layout showPartners>
      <PageBanner subtitle="Building Teams. Strengthening Organizations." title="HR Services" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={hrImage} alt="HR services" className="rounded-lg shadow-lg w-full object-cover" loading="lazy" width={800} height={600} />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Building Teams. Strengthening Organizations.</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Gleamator Technologies, we offer end-to-end HR services designed to support businesses in building capable, high-performance teams. Our solutions are structured to simplify hiring, enhance workforce efficiency, and ensure smooth HR operations—allowing you to focus on what matters most: growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-hero text-center mb-12">What <span className="font-extrabold">We Offer</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Gleamator?</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            We design HR solutions that fit how your business truly operates—not one-size-fits-all recommendations.
          </p>
          <div className="max-w-xl mx-auto space-y-3">
            {whyPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-hero mb-4">Your HR Partner for Growth</h2>
          <p className="text-hero/70 max-w-2xl mx-auto">
            Whether you're a startup, SME, or established enterprise, we help you build the right team and maintain a strong HR foundation that scales with your growth.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HRServicesPage;
