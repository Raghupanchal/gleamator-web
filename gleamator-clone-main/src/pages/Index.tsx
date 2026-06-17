import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";

const Index = () => {
  return (
    <Layout showPartners showCTA>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection />
    </Layout>
  );
};

export default Index;
