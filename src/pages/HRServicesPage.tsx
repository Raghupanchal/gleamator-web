import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import hrImage from "@/assets/hr-services.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
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

      <section className="py-24 relative overflow-hidden bg-[#FAF9F5]">
        {/* Faded Background Image watermark */}
        <div className="absolute inset-0 z-0">
          <img 
            src={hrImage} 
            alt="Faded HR Background" 
            className="w-full h-full object-cover opacity-[0.06] pointer-events-none filter grayscale" 
            loading="lazy"
          />
        </div>

        {/* Glow Spheres for rich background aesthetic */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none z-10"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none z-10"></div>

        <div className="container mx-auto px-4 relative z-20 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-3 tracking-tight">
              What <span className="text-accent font-black">We Offer</span>
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o) => (
              <div 
                key={o.title} 
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,107,0,0.1)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full cursor-default overflow-hidden"
              >
                {/* Hover Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Inner Content */}
                <div className="flex flex-col h-full relative z-10">
                  {/* Icon Container with glowing orange tint */}
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-500 ease-out shadow-sm">
                    <o.icon className="w-7 h-7 text-accent drop-shadow-sm transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  <h3 className="font-extrabold text-lg text-primary mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {o.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {o.description}
                  </p>
                </div>
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
          <p className="text-white text-hero/70 max-w-2xl mx-auto mb-6">
            Whether you're a startup, SME, or established enterprise, we help you build the right team and maintain a strong HR foundation that scales with your growth.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HRServicesPage;
