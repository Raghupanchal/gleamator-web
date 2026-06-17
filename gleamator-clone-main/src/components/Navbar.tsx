import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/gleamator-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Gleamator - Innovating Smarter" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-accent" : "text-foreground hover:text-accent"}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"}`}>About Us</Link>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/services/skill-development" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Skill Development Programs</Link>
              <Link to="/services/it-services" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">IT Services</Link>
              <Link to="/services/hr-services" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">HR Services</Link>
            </div>
          </div>
          <Link to="/gallery" className={`text-sm font-medium transition-colors ${isActive("/gallery") ? "text-accent" : "text-foreground hover:text-accent"}`}>Gallery</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-accent" : "text-foreground hover:text-accent"}`}>Contact Us</Link>
        </div>

        <Link to="/internships" className="hidden md:inline-flex bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-semibold hover:bg-orange/90 transition-colors">
          APPLY NOW
        </Link>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-accent" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>About Us</Link>
          <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-sm font-medium text-foreground">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-2">
              <Link to="/services/skill-development" className="block text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Skill Development</Link>
              <Link to="/services/it-services" className="block text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>IT Services</Link>
              <Link to="/services/hr-services" className="block text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>HR Services</Link>
            </div>
          )}
          <Link to="/gallery" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/internships" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-semibold" onClick={() => setIsOpen(false)}>APPLY NOW</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
