import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
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
              <li><Link to="#">Skill Development Programs</Link></li>
              <li><Link to="#">HR Services</Link></li>
              <li><Link to="#">IT Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Gallery</Link></li>
              <li><Link to="#">Internships</Link></li>
              <li><Link to="#">Job Opportunity</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Connect</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                info@gleamator.in
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                +91 77608 26949
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                No.130, 1st Block, Dr. Rajkumar Road,
                Rajajinagar, Bengaluru - 560010
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-[#2f3b80] text-white flex items-center justify-center rounded"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2f3b80] text-white text-sm mt-12 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
          <span>Gleamator © 2024 | All Rights Reserved.</span>
          <span>Crafted & Engineered by Stalight Technology </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;