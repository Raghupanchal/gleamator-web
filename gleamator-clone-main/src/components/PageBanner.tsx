import { motion } from "framer-motion";
import bannerBg from "@/assets/page-banner-bg.jpg";

interface PageBannerProps {
  subtitle: string;
  title: string;
}

const PageBanner = ({ subtitle, title }: PageBannerProps) => {
  return (
    <section className="relative h-[250px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bannerBg} alt="" className="w-full h-full object-cover" width={1920} height={512} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium text-sm mb-2"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-hero"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageBanner;
