import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  alt: `Gallery image ${i + 1}`,
}));

const GalleryPage = () => {
  return (
    <Layout showCTA={false}>
      <PageBanner subtitle="Gallery" title="Gleamator Times" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.id} className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold">{img.id}</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Event Photo</p>
                  </div>
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
