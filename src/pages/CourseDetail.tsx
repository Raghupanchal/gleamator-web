import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const courseData: Record<string, any> = {
  "java-fullstack-aiml": {
    title: "Java Fullstack & AIML (Hybrid)",
    subtitle: "12 Months | Hybrid — Recruit, Train & Deploy (100% job guarantee)",
    overview:
      "A studio-led program combining enterprise Java backend, modern frontend engineering, and applied AI/ML — designed with industry partners to place you into fullstack or AI roles.",
    highlights: [
      "100% job guarantee through our Google consortium partners",
      "Combination of Java, Spring, React, Cloud, and Applied ML",
      "Live industry projects, mentorship, and placement support",
      "Hands-on portfolio and interview prep"
    ],
    syllabus: [
      {
        title: "Foundations (Months 1-3)",
        items: [
          "Java core, OOP, data structures & algorithms",
          "Database fundamentals: SQL, JDBC, ORM",
          "Web fundamentals: HTML, CSS, JavaScript"
        ]
      },
      {
        title: "Backend & Enterprise (Months 4-6)",
        items: [
          "Spring Boot, REST APIs, security",
          "Microservices patterns, testing, CI/CD",
          "Relational & NoSQL databases"
        ]
      },
      {
        title: "Frontend & Cloud (Months 7-9)",
        items: [
          "React + TypeScript, state management",
          "Cloud fundamentals (GCP/AWS) & deployment",
          "Containerization with Docker, basic Kubernetes"
        ]
      },
      {
        title: "Applied AI/ML (Months 10-12)",
        items: [
          "Introduction to ML workflows, data pipelines",
          "Modeling basics: regression, classification, neural nets",
          "Model deployment, MLOps, and practical case studies"
        ]
      }
    ],
    outcomes: [
      "Job-ready fullstack developer with AI exposure",
      "Portfolio of enterprise-grade projects",
      "Interview & soft-skills coaching",
      "Certification and placement assistance"
    ],
    prerequisites: [
      "Basic programming experience (any language)",
      "Willingness to commit full-time for the program schedule",
      "Laptop with internet access"
    ],
  }
};

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = slug ? courseData[slug] : null;

  if (!data) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Course not found</h2>
            <p className="mt-4 text-muted-foreground">The requested course could not be located.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showCTA>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{data.title}</h1>
              <p className="mt-3 text-muted-foreground">{data.subtitle}</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <AnimatedSection>
              <div className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{data.overview}</p>

                <h4 className="text-xl font-semibold mb-3">What you'll learn</h4>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {data.highlights.map((h: string) => (
                    <li key={h} className="text-muted-foreground">{h}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold mb-3">Syllabus</h4>
                <div className="space-y-6">
                  {data.syllabus.map((s: any) => (
                    <div key={s.title}>
                      <h5 className="font-semibold mb-2">{s.title}</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {s.items.map((it: string) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => navigate('/internships', { state: { course: data.title } })}
                    className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:bg-accent/90 transition"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-3 border border-border rounded-lg text-sm font-medium"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <aside className="bg-card rounded-2xl p-6 shadow-md">
                <div className="mb-6">
                  <h4 className="font-semibold">Course Outcomes</h4>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-2">
                    {data.outcomes.map((o: string) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold">Who should apply</h4>
                  <p className="text-muted-foreground">Early-career engineers, college graduates, and professionals looking to shift into fullstack or AI roles.</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold">Prerequisites</h4>
                  <ul className="list-disc list-inside mt-3 text-muted-foreground">
                    {data.prerequisites.map((p: string) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
                  <div className="mt-1 font-bold">12 Months | Hybrid</div>
                </div>
              </aside>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
