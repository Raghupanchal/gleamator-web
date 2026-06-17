import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const CoursePython = () => {
  const navigate = useNavigate();

  const data = {
    title: "Python Fullstack Development",
    subtitle: "3 Months | Offline — Internship Program",
    overview:
      "Hands-on Python fullstack program covering modern frontend with React and backend with Django/Flask, plus database and deployment.",
    highlights: [
      "Build real-world fullstack projects",
      "Mentorship and interview prep",
      "Internship opportunities with partner companies",
    ],
    syllabus: [
      { title: "Frontend", items: ["HTML, CSS, JS", "React + TypeScript", "State management"] },
      { title: "Backend", items: ["Python, Django/Flask", "REST APIs, authentication", "ORM & database design"] },
      { title: "Deployment", items: ["Docker & containers", "Deploy to cloud (GCP/AWS)", "CI/CD basics"] },
    ],
    outcomes: ["Fullstack portfolio projects", "Internship placement support", "Interview readiness"],
    prerequisites: ["Basic HTML/JS knowledge", "Willingness to learn"],
  };

  return (
    <Layout showCTA>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{data.title}</h1>
              <p className="mt-3 text-muted-foreground">{data.subtitle}</p>
              <p className="mt-6 text-lg text-muted-foreground">{data.overview}</p>
              <div className="mt-8 flex justify-center gap-3">
                <button onClick={() => navigate('/internships', { state: { course: data.title } })} className="px-6 py-3 bg-accent text-white rounded-lg font-semibold shadow">Apply Now</button>
                <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="px-6 py-3 border rounded-lg">Syllabus</button>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <AnimatedSection>
              <div className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">What you'll build</h3>
                <ul className="grid gap-3 md:grid-cols-2 mb-6">
                  {data.highlights.map((h) => (
                    <li key={h} className="bg-white/60 border border-border rounded-lg p-4 font-medium">{h}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold mb-3">Syllabus</h4>
                <div className="space-y-6">
                  {data.syllabus.map((s) => (
                    <div key={s.title} className="p-4 bg-white/50 border border-border rounded-lg">
                      <h5 className="font-semibold mb-2">{s.title}</h5>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {s.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <aside className="bg-card rounded-2xl p-6 shadow-md">
                <div className="mb-6">
                  <h4 className="font-semibold">Course Outcomes</h4>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-2">
                    {data.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold">Who should apply</h4>
                  <p className="text-muted-foreground">Beginners to intermediate developers seeking fullstack roles or internships.</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold">Prerequisites</h4>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground">
                    {data.prerequisites.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
                  <div className="mt-1 font-bold">3 Months | Offline</div>
                </div>
              </aside>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursePython;
