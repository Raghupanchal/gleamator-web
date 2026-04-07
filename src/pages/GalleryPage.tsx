import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const galleryImages = [
  { id: 1, src: "/src/assets/Campus visit.jpeg", caption: "Campus visit" },
  { id: 2, src: "/src/assets/Vtu skill development.jpeg", caption: "VTU Skill Development Center" },
  { id: 3, src: "/src/assets/Workshop day.jpeg", caption: "Workshop day" },
  { id: 4, src: "/src/assets/awards.jpeg", caption: "Recognized for Excellence" },
  { id: 5, src: "/src/assets/team-photo.jpg", caption: "Gleamator team" },
  { id: 6, src: "/src/assets/Classroom action.jpg", caption: "Classroom action" },
  { id: 7, src: "/src/assets/Academic Partnerships.jpeg", caption: "Academic Partnerships" },
  { id: 8, src: "/src/assets/govt-skill-program.jpeg", caption: "Govt Skill Program" },
  { id: 9, src: "/src/assets/cta-bg.jpg", caption: "Internship day" },
  // Newly added images from user uploads
  { id: 10, src: "/src/assets/image-9.jpeg", caption: "Welcoming Ceremony" },
  { id: 11, src: "/src/assets/image-12.jpeg", caption: "MoU Signing at University" },
  { id: 12, src: "/src/assets/image-13.jpeg", caption: "Document Exchange Event" },
  { id: 13, src: "/src/assets/image-3.jpeg", caption: "Group Photo with University Officials" },
  { id: 14, src: "/src/assets/img-36.jpeg", caption: "Press Coverage of Event" },
  { id: 15, src: "/src/assets/img-39.jpeg", caption: "Gleamator Team at University" },
  { id: 16, src: "/src/assets/image-13.jpeg", caption: "Signing Ceremony Highlights" },
  { id: 17, src: "/src/assets/image-12.jpeg", caption: "University Collaboration" },
  { id: 18, src: "/src/assets/image-9.jpeg", caption: "Gleamator and University Partnership" },
  { id: 19, src: "/src/assets/image-3.jpeg", caption: "Gleamator Team with University Leaders" },
  { id: 21, src: "/src/assets/img-39.jpeg", caption: "Gleamator Team at University Event" },
];

const GalleryPage = () => {
  return (
    <Layout showCTA={false}>
      <PageBanner subtitle="Gallery" title="Gleamator Times" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 p-0 transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="h-full w-full object-cover rounded-[28px]"
                    />
                  </div>
                </div>
                <div className="border-t border-white/10 bg-slate-950/80 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Gleamator Times</p>
                  <p className="mt-2 text-sm text-slate-200 font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
