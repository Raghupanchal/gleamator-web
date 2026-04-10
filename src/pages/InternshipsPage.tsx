import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import internshipHero from "@/assets/internship-hero.jpg";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface InternshipsFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  qualification: string;
  stream: string;
  dob: string;
  aadhar: string;
  yearOfPassing: string;
  lookingFor: string;
}

const InternshipsPage = () => {
  const location = useLocation();
  const selectedCourse = (location.state as { course?: string } | null)?.course;

  const [formData, setFormData] = useState<InternshipsFormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    qualification: "",
    stream: "",
    dob: "",
    aadhar: "",
    yearOfPassing: "",
    lookingFor: "Internship",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from("applications")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          qualification: formData.qualification,
          stream: formData.stream,
          dob: formData.dob,
          aadhar: formData.aadhar,
          year_of_passing: formData.yearOfPassing,
          looking_for: formData.lookingFor,
        },
      ]);

    if (error) {
      toast.error("Error: " + error.message);
    } else {
      toast.success("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        qualification: "",
        stream: "",
        dob: "",
        aadhar: "",
        yearOfPassing: "",
        lookingFor: "Internship",
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout showCTA={false}>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-hero leading-tight mb-6">
                Internship Programmes & Placement Opportunities
              </h1>
              <a href="#form" className="inline-flex bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors">
                Apply Now
              </a>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 border-4 border-accent rounded-2xl rotate-6" />
                <img
                  src={internshipHero}
                  alt="Internship students"
                  className="relative w-full h-full object-cover rounded-2xl"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-primary mb-2">About Internships & Placements</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our internships are designed to provide a comprehensive learning experience, with opportunities to work on live projects, collaborate with experienced professionals, and develop a strong foundation for your future career.
          </p>

          {selectedCourse && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Applying for: {selectedCourse}</h3>
              <p className="text-blue-700 text-sm">You've selected this course from our active programs. Please fill out the form below to apply.</p>
            </div>
          )}

          <div className="bg-card rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Please enter your name" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Please enter your email" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Please enter your phone number" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">College Name</label>
                  <input name="college" value={formData.college} onChange={handleChange} placeholder="Please enter your college name" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Qualification</label>
                  <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Your qualification" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Stream</label>
                  <input name="stream" value={formData.stream} onChange={handleChange} placeholder="Your stream" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Date of Birth</label>
                  <input name="dob" type="date" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Aadhar Number</label>
                  <input name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Your Aadhar number" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Year of Passing</label>
                  <input name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} placeholder="Year of passing" className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Looking for</label>
                  <select name="lookingFor" value={formData.lookingFor} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option value="Internship">Internship</option>
                    <option value="Placement">Placement</option>
                  </select>
                </div>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-accent text-accent-foreground px-10 py-3 rounded font-semibold hover:bg-orange/90 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternshipsPage;
