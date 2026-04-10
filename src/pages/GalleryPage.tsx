import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

// Import all gallery images
import campusVisit from "@/assets/Campus visit.jpeg";
import vtuSkillDev from "@/assets/Vtu skill development.jpeg";
import workshopDay from "@/assets/Workshop day.jpeg";
import awards from "@/assets/Awards.jpeg";
import teamPhoto from "@/assets/team-photo.jpg";
import classroomAction from "@/assets/Classroom action.jpg";
import academicPartnerships from "@/assets/Academic Partnerships.jpeg";
import govtSkillProgram from "@/assets/govt-skill-program.jpeg";
import ctaBg from "@/assets/cta-bg.jpg";
import image9 from "@/assets/image-9.jpeg";
import image12 from "@/assets/image-12.jpeg";
import image13 from "@/assets/image-13.jpeg";
import image3 from "@/assets/image-3.jpeg";
import img36 from "@/assets/img-36.jpeg";
import img39 from "@/assets/img-39.jpeg";
import image7 from "@/assets/image-7.jpeg";
import gleamatoropening from "@/assets/gleamatoropening.jpeg";

const galleryImages = [
  { id: 1, src: campusVisit, caption: "Campus visit" },
  { id: 2, src: vtuSkillDev, caption: "VTU Skill Development Center" },
  { id: 3, src: workshopDay, caption: "Workshop day" },
  { id: 4, src: awards, caption: "Recognized for Excellence" },
  { id: 5, src: teamPhoto, caption: "Gleamator team" },
  { id: 6, src: classroomAction, caption: "Classroom action" },
  { id: 7, src: academicPartnerships, caption: "Academic Partnerships" },
  { id: 8, src: govtSkillProgram, caption: "Govt Skill Program" },
  { id: 9, src: ctaBg, caption: "Internship day" },
  // Newly added images from user uploads
  { id: 10, src: image9, caption: "Welcoming Ceremony" },
  { id: 11, src: image12, caption: "MoU Signing at University" },
  { id: 12, src: image13, caption: "Document Exchange Event" },
  { id: 13, src: image3, caption: "Group Photo with University Officials" },
  { id: 14, src: img36, caption: "Press Coverage of Event" },
  { id: 15, src: img39, caption: "Gleamator Team at University" },
  { id: 16, src: image13, caption: "Signing Ceremony Highlights" },
  { id: 17, src: image12, caption: "University Collaboration" },
  { id: 18, src: image7, caption: "Gleamator and University Partnership" },
  { id: 19, src: gleamatoropening, caption: "Gleamator Opening Ceremony" },
  { id: 22, src: img36, caption: "Media Coverage of University Partnership" },
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
