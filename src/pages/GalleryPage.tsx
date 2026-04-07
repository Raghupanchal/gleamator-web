import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const galleryImages = [
  { id: 1, title: "Image-1", caption: "Campus visit" },
  { id: 2, title: "Image-2", caption: "Skill training" },
  { id: 3, title: "Image-3", caption: "Workshop day" },
  { id: 4, title: "Image-4", caption: "Industry talk" },
  { id: 5, title: "Image-5", caption: "Student team" },
  { id: 6, title: "Image-6", caption: "Classroom action" },
  { id: 7, title: "Image-7", caption: "Placement support" },
  { id: 8, title: "Image-8", caption: "Certificate day" },
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
                  <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 p-5 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="h-full rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(180deg,_rgba(30,58,138,0.85),_rgba(8,145,178,0.65))] flex flex-col justify-end p-5">
                      <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-100">
                        {img.title}
                      </span>
                      <p className="mt-4 text-lg font-semibold text-white">{img.caption}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 bg-slate-950/80 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Gleamator Times</p>
                  <p className="mt-2 text-sm text-slate-200">{img.title} — curated moments from our events.</p>
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
