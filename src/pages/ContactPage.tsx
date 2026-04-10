import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error(error);
      toast.error("Failed to send message");
    } else {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Layout showCTA={false}>
      <PageBanner subtitle="We Would Be Happy To Assist You" title="Contact Us" />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
                <textarea
                  placeholder="Write Us"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors float-right"
                >
                  Send <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Call Us, Write Us</p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                We'd Be Glad To Meet You And Learn More About Your Goals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Gleamator Technologies, we're here to support you whether you're exploring IT solutions, HR support, or skill training. Reach out, start a conversation, and let's see how we can help your business and people grow together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+91 77608 26949</p>
                    <p className="text-muted-foreground text-sm">Give Us A Call</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">No.130, 1st Block, Dr. Rajkumar Road, Rajajinagar, Bengaluru-560010</p>
                    <p className="text-muted-foreground text-sm">We're On The Map</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">info@gleamator.in</p>
                    <p className="text-muted-foreground text-sm">Write Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
