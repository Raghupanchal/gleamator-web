import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import AnimatedSection from "./AnimatedSection";

const courses = [
  { image: course1, title: "Recruit-Train & Deploy Program", description: "A 12-month industry-driven Recruit, Train & Deploy program that offers 100% job guarantee with Google and its consortium companies." },
  { image: course2, title: "Applied Artificial Intelligence (Hybrid Mode)", description: "A 12-month industry-driven Recruit, Train & Deploy program that offers 100% job guarantee with Google and its consortium companies." },
  { image: course3, title: "Python Fullstack Development", description: "Frontend: HTML, CSS, JS, React | Backend: Python, Django/Flask | Database: MySQL/PostgreSQL" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Active Courses & Programmes
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <AnimatedSection key={course.title} delay={i * 0.15}>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full">
                <div className="overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={640} height={512} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-3">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
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
