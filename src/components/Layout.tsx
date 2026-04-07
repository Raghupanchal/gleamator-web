import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PartnersSection from "./PartnersSection";
import CTASection from "./CTASection";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
  showPartners?: boolean;
  showCTA?: boolean;
}

const Layout = ({ children, showPartners = false, showCTA = true }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      {showPartners && <PartnersSection />}
      {showCTA && <CTASection />}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
