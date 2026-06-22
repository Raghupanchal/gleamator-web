import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/gleamator-logo.png";

// Custom Python original SVG logo
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5">
    <linearGradient id="py-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="py-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#py-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
    <path fill="url(#py-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
  </svg>
);

// Custom Java original SVG logo
const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-5.5 h-5.5">
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

// Custom AI/ML SVG logo (OpenAI style)
const AimlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#10a37f" className="w-5.5 h-5.5" viewBox="0 0 16 16">
    <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 .632-.218z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
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

          <div className="relative group">
            <button className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
              Courses <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 bg-background shadow-lg rounded-xl py-3 px-2 min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all space-y-1">
              <Link to="/courses/python-fullstack" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                  <PythonIcon />
                </div>
                <span>Python Fullstack</span>
              </Link>
              <Link to="/courses/java-fullstack-aiml" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                  <JavaIcon />
                </div>
                <span>Java Fullstack & AIML</span>
              </Link>
              <Link to="/courses/aiml" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                  <AimlIcon />
                </div>
                <span>AIML</span>
              </Link>
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
        <div className="md:hidden bg-background border-t px-4 py-5 space-y-4 shadow-inner">
          <Link to="/" className={`block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${isActive("/") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={`block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${isActive("/about") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"}`} onClick={() => setIsOpen(false)}>About Us</Link>
          
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-base font-semibold text-foreground hover:bg-muted/50 transition-colors outline-none">
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-accent" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-6 pr-2 py-2 border-l border-accent/20 my-1 space-y-2">
                <Link to="/services/skill-development" className="block text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>Skill Development</Link>
                <Link to="/services/it-services" className="block text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>IT Services</Link>
                <Link to="/services/hr-services" className="block text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>HR Services</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setCoursesOpen(!coursesOpen)} className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-base font-semibold text-foreground hover:bg-muted/50 transition-colors outline-none">
              <span>Courses</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${coursesOpen ? "rotate-180 text-accent" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="pl-6 pr-2 py-2 border-l border-accent/20 my-1 space-y-2">
                <Link to="/courses/python-fullstack" className="flex items-center gap-3 text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                    <PythonIcon />
                  </div>
                  <span>Python Fullstack</span>
                </Link>
                <Link to="/courses/java-fullstack-aiml" className="flex items-center gap-3 text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                    <JavaIcon />
                  </div>
                  <span>Java Fullstack & AIML</span>
                </Link>
                <Link to="/courses/aiml" className="flex items-center gap-3 text-sm font-medium py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/60 flex items-center justify-center p-1.5 flex-shrink-0">
                    <AimlIcon />
                  </div>
                  <span>AIML</span>
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/gallery" className={`block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${isActive("/gallery") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"}`} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className={`block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${isActive("/contact") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"}`} onClick={() => setIsOpen(false)}>Contact Us</Link>
          <div className="pt-2">
            <Link to="/internships" className="block text-center bg-accent text-accent-foreground py-3 rounded-lg text-base font-bold shadow-md hover:bg-orange/90 transition-colors" onClick={() => setIsOpen(false)}>APPLY NOW</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
