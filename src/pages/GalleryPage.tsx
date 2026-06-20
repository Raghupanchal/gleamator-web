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
import certificateDay from "@/assets/Certificate day.jpeg";
import image9 from "@/assets/image-9.jpeg";
import image12 from "@/assets/image-12.jpeg";
import image13 from "@/assets/image-13.jpeg";
import image3 from "@/assets/image-3.jpeg";
import img36 from "@/assets/img-36.jpeg";
import img39 from "@/assets/img-39.jpeg";
import image7 from "@/assets/image-7.jpeg";
import gleamatoropening from "@/assets/gleamatoropening.jpeg";
import imgDash from "@/assets/img--.jpeg";
import img000 from "@/assets/img-000.jpeg";
import deepikaaImg from "@/assets/deepikaa..jpeg";
import img43 from "@/assets/img-43.jpeg";
import vtuSdc from "@/assets/vtu-sdc.jpg";

const galleryImages = [
  { id: 23, src: deepikaaImg, caption: "Trusted & Futuristic Skill Development & IT Consultancy Firm of the Year 2025 - Great Indian Startup Awards" },
  { id: 19, src: gleamatoropening, caption: "Gleamator Opening Ceremony" },
  { id: 11, src: image12, caption: "MoU Signing at University" },
  { id: 12, src: image13, caption: "Document Exchange Event" },
  { id: 24, src: img43, caption: "Gleamator Skill Development Day" },
  { id: 25, src: vtuSdc, caption: "Honoring Guests at VTU Skill Development Center Event" },
  { id: 10, src: image9, caption: "Welcoming Ceremony" },
  { id: 2, src: vtuSkillDev, caption: "VTU Skill Development Center" },
  { id: 13, src: image3, caption: "Group Photo with University Officials" },
  { id: 1, src: campusVisit, caption: "Campus visit" },
  { id: 4, src: awards, caption: "Recognized for Excellence" },
  { id: 3, src: workshopDay, caption: "Workshop day" },
  { id: 14, src: img36, caption: "Press Coverage of Event" },
  { id: 5, src: teamPhoto, caption: "Gleamator team" },
  { id: 15, src: img39, caption: "Gleamator Team at University" },
  { id: 6, src: classroomAction, caption: "Classroom action" },
  { id: 16, src: imgDash, caption: "Student Interaction Moment" },
  { id: 7, src: academicPartnerships, caption: "Academic Partnerships" },
  { id: 17, src: img000, caption: "Campus Outreach Snapshot" },
  { id: 8, src: govtSkillProgram, caption: "Govt Skill Program" },
  { id: 18, src: image7, caption: "Gleamator and University Partnership" },
  { id: 9, src: certificateDay, caption: "Certificate Day Celebration" },
  { id: 22, src: img000, caption: "Media Coverage of University Partnership" },
];

const frameColors = [
  { border: "border-amber-200/80", bg: "bg-amber-50/40", text: "text-amber-600", tape: "bg-amber-400/30" },
  { border: "border-cyan-200/80", bg: "bg-cyan-50/40", text: "text-cyan-600", tape: "bg-cyan-400/30" },
  { border: "border-indigo-200/80", bg: "bg-indigo-50/40", text: "text-indigo-600", tape: "bg-indigo-400/30" },
  { border: "border-rose-200/80", bg: "bg-rose-50/40", text: "text-rose-600", tape: "bg-rose-400/30" },
  { border: "border-emerald-200/80", bg: "bg-emerald-50/40", text: "text-emerald-600", tape: "bg-emerald-400/30" },
];

const GalleryPage = () => {
  return (
    <Layout showCTA={false}>
      <PageBanner subtitle="Gallery" title="Gleamator Times" />

      <section className="py-24 bg-[#FAF9F5] bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] relative overflow-hidden">
        {/* Soft center binding crease line of the open book / scrapbook */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/10 z-0 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">

          {/* Album Binder Spiral Rings */}
          <div className="flex justify-center gap-5 sm:gap-8 -mt-16 mb-16 px-4 select-none overflow-hidden max-w-5xl mx-auto">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0">
                {/* Metallic Binder Ring */}
                <div className="w-3 h-12 rounded-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 border border-slate-350 shadow-md" />
                {/* Ring cutout slot */}
                <div className="w-4.5 h-1.5 bg-slate-950/20 rounded-full -mt-1 shadow-inner" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
            {galleryImages.map((img, idx) => {
              // Alternate small rotations to make it look organic and jumbled like a scrapbook
              const rotationClass = idx % 3 === 0 ? "rotate-1.5" : idx % 3 === 1 ? "-rotate-1.5" : "rotate-0";
              const colors = frameColors[idx % frameColors.length];

              return (
                <div
                  key={img.id}
                  className={`group ${colors.bg} border-4 ${colors.border} p-2.5 sm:p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(255,107,0,0.18)] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03] flex flex-col h-full relative ${rotationClass} hover:rotate-0`}
                >
                  {/* Washi Tape Hanger Element */}
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-4.5 ${colors.tape} backdrop-blur-[1px] rotate-[-3deg] shadow-sm z-20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0`} />

                  {/* Photo Mount Inner Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/90 bg-white shadow-inner z-10">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-xl" />
                  </div>

                  {/* Photo Title details */}
                  <div className="pt-4 sm:pt-5 px-1 pb-1 flex flex-col justify-between flex-grow text-center z-10">
                    <div>
                      <span className={`text-[9px] font-black uppercase tracking-wider ${colors.text}`}>
                        Gleamator Times
                      </span>
                      <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 sm:line-clamp-3 leading-snug group-hover:text-[#FF6B00] transition-colors duration-300">
                        {img.caption}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
