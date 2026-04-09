import React from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import course1 from "@/assets/course-1.jpg";
// Removed course2 import since both other cards now use Lottie animations
import AnimatedSection from "./AnimatedSection";

const courses = [
  { 
    image: course1, 
    title: "Recruit-Train & Deploy Program", 
    description: "A 12-month industry-driven Recruit, Train & Deploy program that offers 100% job guarantee with Google and its consortium companies.",
    badge: "100% Job Guarantee",
    duration: "12 Months | Offline",
    accentColor: "bg-yellow-400"
  },
  { 
    // Added the new Artificial Intelligence Lottie animation here
    lottieSrc: "https://lottie.host/1f9264f9-c360-4e24-8131-23524eb199d7/fClNZgQC1i.lottie", 
    title: "Applied Artificial Intelligence (Hybrid)", 
    description: "A 12-month industry-driven Recruit, Train & Deploy program that offers 100% job guarantee with Google and its consortium companies.",
    badge: "Internship Opportunity",
    duration: "12 Months | Hybrid",
    accentColor: "bg-yellow-400 text-slate-900"
  },
  { 
    lottieSrc: "https://lottie.host/26eb5c2a-9772-4a83-85f7-22f8d61d8ca4/gfSgdQCJX4.lottie", 
    title: "Python Fullstack Development", 
    description: "Frontend: HTML, CSS, JS, React | Backend: Python, Django/Flask | Database: MySQL/PostgreSQL",
    badge: "Internship",
    duration: "3 Months | Offline",
    accentColor: "bg-yellow-400 text-slate-900"
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();

  const handleApplyNow = (courseTitle) => {
    // Navigate to internships page with course info in state
    navigate('/internships', { state: { course: courseTitle, source: 'course-application' } });
  };

  return (
    <section id="courses" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[2px] w-12 bg-blue-600 hidden md:block"></div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white text-center tracking-tight">
              Active Courses <span className="font-light">& Programmes</span>
            </h2>
            <div className="h-[2px] w-12 bg-blue-600 hidden md:block"></div>
          </div>
        </AnimatedSection>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
          {courses.map((course, i) => (
            <AnimatedSection key={course.title} delay={i * 0.15}>
              
              {/* Card Container */}
              <div 
                className="bg-[#fefdf9] dark:bg-slate-800/80 rounded-xl flex flex-col overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200/60 dark:border-slate-700 transition-all duration-300 group h-full transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleApplyNow(course.title)}
              >
                
                {/* Media Container */}
                <div className="overflow-hidden w-full h-56 relative bg-white dark:bg-slate-900 flex items-center justify-center border-b-[5px] border-yellow-400">
                  
                  {/* Advertisement Badge (Top Left) */}
                  <div className="absolute top-4 left-0 z-10">
                    <span className={`${course.accentColor || 'bg-yellow-400 text-slate-900'} text-xs font-black px-4 py-1.5 uppercase tracking-wider shadow-md rounded-r-md`}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Duration Tag (Bottom Right) */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                      {course.duration}
                    </span>
                  </div>

                  {/* Image/Lottie Render */}
                  {course.lottieSrc ? (
                    // Slightly increased scale to [1.35] to make the AI brain animation fit better
                    <div className="w-full h-full flex items-center justify-center scale-[1.35] group-hover:scale-[1.45] transition-transform duration-500">
                      <DotLottieReact
                        src={course.lottieSrc}
                        loop
                        autoplay
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy" 
                    />
                  )}
                </div>

                {/* Text Container */}
                <div className="p-7 flex-grow flex flex-col relative">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xl mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow font-medium">
                    {course.description}
                  </p>
                  
                  {/* Apply Now Button */}
                  <button 
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click when button is clicked
                      handleApplyNow(course.title);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
                
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;