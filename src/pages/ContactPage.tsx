import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import hqOffice from "@/assets/hqoffice.png";
import ramnagaraOffice from "@/assets/ramnagaraoffice.jpeg";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

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

    setIsSubmitting(false);

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

      {/* Quick Contacts Info Grid */}
      <section className="pt-20 pb-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Call Us</p>
                <a href="tel:+917760826949" className="text-slate-900 font-bold text-lg hover:text-accent transition-colors block">
                  +91 77608 26949
                </a>
                <p className="text-slate-500 text-sm mt-1">Mon - Sat, 9am - 6pm</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Email Us</p>
                <a href="mailto:info@gleamator.in" className="text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors block">
                  info@gleamator.in
                </a>
                <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Working Hours</p>
                <p className="text-slate-900 font-bold text-lg">9:00 AM - 6:00 PM</p>
                <p className="text-slate-500 text-sm mt-1">Sundays: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Locations Section */}
      <section className="pb-24 pt-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl shadow-md border border-slate-100 p-8 md:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Send Message</span>
                <h3 className="text-2xl font-extrabold text-slate-955">Get in Touch with Us</h3>
                <p className="text-slate-500 text-sm mt-2">Have a question or looking to partner? Drop us a line below.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl font-bold hover:bg-accent/90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-accent/10"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">Our Locations</span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  Visit Our Offices
                </h2>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  We operate from our primary headquarters in Bengaluru and our regional branch office in Ramanagara. Stop by or reach out to coordinate a session.
                </p>
              </div>

              {/* Bengaluru (Headquarters) */}
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold mb-3 border border-accent/20">
                    Headquarters
                  </span>
                  <h4 className="text-lg font-bold text-slate-950 mb-2">Bengaluru Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    No.130, 1st Block, Dr. Rajkumar Road,<br />
                    Rajajinagar, Bengaluru - 560010, Karnataka, India.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/H4Kiydy8jqDm52sY6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent/95 group/link"
                  >
                    Get Directions 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Ramanagara (Branch Office) */}
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-100">
                    Branch Office
                  </span>
                  <h4 className="text-lg font-bold text-slate-950 mb-2">Ramanagara Office</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    No. 24, Annapoorneshwari Arcade, BM Main Road,<br />
                    Opposite to Royal Convention Hall,<br />
                    Ramanagara - 562159, Karnataka, India.
                  </p>
                  <a 
                    href="https://maps.google.com/?q=No.+24,+Annapoorneshwari+Arcade,+BM+Main+Road,+Opposite+to+Royal+Convention+Hall,+Ramanagara+562159,+Karnataka,+India" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group/link"
                  >
                    Get Directions 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Centers Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Our Network</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Gleamator - Centers</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-lg mx-auto">
              Choose a location to view detailed contact details and get direct routes to our skill development and consulting hubs.
            </p>
          </div>

          {/* Centers Grid */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Bengaluru Card */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-end p-10 border border-slate-200/50">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={hqOffice} 
                  alt="Bengaluru Office" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-white w-full">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                  Headquarters
                </span>
                <h3 className="text-3xl font-black tracking-tight">Rajajinagar</h3>
                
                {/* Sliding Address Details Container */}
                <div className="max-h-[250px] opacity-100 md:max-h-0 md:opacity-0 transform md:translate-y-4 md:group-hover:max-h-[250px] md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-in-out overflow-hidden mt-1">
                  <ul className="space-y-4 text-sm sm:text-base text-slate-100 pt-4 border-t border-white/10">
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <a href="tel:+917760826949" className="hover:text-white transition-colors">+91 77608 26949</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent shrink-0" />
                      <a href="mailto:info@gleamator.in" className="hover:text-white transition-colors">info@gleamator.in</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>No.130, 1st Block, Dr. Rajkumar Road, Rajajinagar, Bengaluru - 560010</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Floating Quick Action Buttons on Corner */}
              <div className="absolute bottom-10 right-10 z-20 flex gap-3 opacity-100 md:opacity-0 transform md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                {/* Phone */}
                <a 
                  href="tel:+917760826949"
                  title="Call Center"
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/917760826949"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                {/* Directions */}
                <a 
                  href="https://maps.app.goo.gl/H4Kiydy8jqDm52sY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get Directions"
                  className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Ramanagara Card */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-end p-10 border border-slate-200/50">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={ramnagaraOffice} 
                  alt="Ramanagara Office" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-white w-full">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                  Branch Office
                </span>
                <h3 className="text-3xl font-black tracking-tight">Ramanagara</h3>
                
                {/* Sliding Address Details Container */}
                <div className="max-h-[250px] opacity-100 md:max-h-0 md:opacity-0 transform md:translate-y-4 md:group-hover:max-h-[250px] md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-in-out overflow-hidden mt-1">
                  <ul className="space-y-4 text-sm sm:text-base text-slate-100 pt-4 border-t border-white/10">
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                      <a href="tel:+917760826949" className="hover:text-white transition-colors">+91 77608 26949</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                      <a href="mailto:info@gleamator.in" className="hover:text-white transition-colors">info@gleamator.in</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>No. 24, Annapoorneshwari Arcade, BM Main Road, Opp. to Royal Convention Hall, Ramanagara - 562159</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Floating Quick Action Buttons on Corner */}
              <div className="absolute bottom-10 right-10 z-20 flex gap-3 opacity-100 md:opacity-0 transform md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                {/* Phone */}
                <a 
                  href="tel:+917760826949"
                  title="Call Center"
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/917760826949"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                {/* Directions */}
                <a 
                  href="https://maps.google.com/?q=No.+24,+Annapoorneshwari+Arcade,+BM+Main+Road,+Opposite+to+Royal+Convention+Hall,+Ramanagara+562159,+Karnataka,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get Directions"
                  className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
