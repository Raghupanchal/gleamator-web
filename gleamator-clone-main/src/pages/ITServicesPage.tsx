import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import itImage from "@/assets/it-services.jpg";
import { Server, Cloud, Code, Shield, CheckCircle } from "lucide-react";

const offerings = [
  { icon: Server, title: "IT Infrastructure Setup & Management", description: "End-to-end support including hardware deployment, network setup, system configuration, and maintenance." },
  { icon: Cloud, title: "Cloud Management & Migration", description: "Secure, scalable cloud deployment with monitoring, backup management, and optimization services." },
  { icon: Code, title: "Software Development & Custom Applications", description: "Tailor-made solutions built to fit your workflows—ensuring your technology supports how your business truly operates." },
  { icon: Shield, title: "CCTV, Security Systems & Access Control", description: "Professional supply, installation, and commissioning of integrated security systems for enhanced safety." },
];

const whyPoints = [
  "Reliable Systems that ensure smooth day-to-day operations",
  "Experienced Technical Teams focused on solving problems proactively",
  "Customized Solutions aligned to your organization's exact needs",
  "Consistent Support through onsite and remote assistance",
];

const ITServicesPage = () => {
  return (
    <Layout showPartners showCTA>
      <PageBanner subtitle="Smart Solutions. Seamless Execution." title="IT Services & ITeS" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={itImage} alt="IT services" className="rounded-lg shadow-lg w-full object-cover" loading="lazy" width={800} height={600} />
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Smart Solutions. Seamless Execution.</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Gleamator Technologies, we deliver robust IT services and ITeS solutions that help businesses operate efficiently, scale confidently, and stay ahead in a rapidly evolving digital landscape. Our focus is on providing agile, reliable, and cost-effective technology support that aligns perfectly with your operational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-hero text-center mb-12">Our IT & <span className="font-extrabold">ITeS Offerings</span></h2>
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

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Why Gleamator?</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            We deliver IT solutions that are <strong>practical, scalable, and business-driven</strong>—never generic. You get:
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
    </Layout>
  );
};

export default ITServicesPage;
