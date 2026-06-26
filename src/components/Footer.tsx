import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin, MessageSquare } from "lucide-react";
import logo from "@/assets/gleamator-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#f4f6fb] text-gray-700 pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo + About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Gleamator" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-600">
              A dynamic startup founded in the year 2024 that combines expertise in skill training,
              IT services, and manpower outsourcing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/skill-development" className="transition-colors hover:text-accent">Skill Development Programs</Link></li>
              <li><Link to="/services/hr-services" className="transition-colors hover:text-accent">HR Services</Link></li>
              <li><Link to="/services/it-services" className="transition-colors hover:text-accent">IT Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-accent">About Us</Link></li>
              <li><Link to="/gallery" className="transition-colors hover:text-accent">Gallery</Link></li>
              <li><Link to="/internships" className="transition-colors hover:text-accent">Internships</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent">Job Opportunity</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Connect</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:info@gleamator.in" className="transition-colors hover:text-blue-800">info@gleamator.in</a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+917760826949" className="transition-colors hover:text-blue-800">+91 77608 26949</a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                <div>
                  <span className="font-semibold block text-gray-900">Headquarters:</span>
                  <a 
                    href="https://maps.app.goo.gl/H4Kiydy8jqDm52sY6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transition-colors hover:text-blue-800 block mt-0.5"
                  >
                    No.130, 1st Block, Dr. Rajkumar Road,<br />
                    Rajajinagar, Bengaluru - 560010
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                <div>
                  <span className="font-semibold block text-gray-900">Branch Office:</span>
                  <a 
                    href="https://maps.google.com/?q=No.+24,+Annapoorneshwari+Arcade,+BM+Main+Road,+Opposite+to+Royal+Convention+Hall,+Ramanagara+562159,+Karnataka,+India" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transition-colors hover:text-blue-800 block mt-0.5"
                  >
                    No. 24, Annapoorneshwari Arcade,<br />
                    BM Main Road, Opposite to Royal Convention Hall,<br />
                    Ramanagara - 562159, Karnataka, India
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/Gleamator/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@gleamator" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded hover:bg-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/gleamator/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917760826949" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded hover:bg-green-600 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/gleamator/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2f3b80] text-white text-sm mt-12 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>Gleamator © 2024 | All Rights Reserved.</span>
          <a
            href="https://stalight.in"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Stalight Technologies"
            className="text-white/90 hover:text-white underline md:no-underline md:hover:underline transition-colors"
          >
            Powered by Stalight Technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;