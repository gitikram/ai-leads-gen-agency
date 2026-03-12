import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const trustedBy = [
  { name: "Agency", italic: false },
  { name: "Venture", italic: true },
  { name: "Startup", italic: false },
  { name: "Institute", italic: true },
  { name: "Organization", italic: false },
  { name: "Enterprise", italic: true },
  { name: "Business", italic: false },
  { name: "Capital", italic: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source
          src="https://res.cloudinary.com/dm1zvc99k/video/upload/v1773302884/red-blob-animation_ar043d.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          <span className="text-foreground font-body text-xl font-semibold tracking-tight">
            LeadGenAI
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">Services</a>
            <a href="#" className="hover:text-foreground transition-colors">Case Studies</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <button className="rounded-full border border-border px-5 py-2 text-sm text-foreground font-body hover:bg-secondary transition-colors">
            Get Started
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 pb-32">
          <div className="flex items-end justify-between w-full max-w-[1400px] mx-auto">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight font-body"
              >
                We are a{" "}
                <span className="font-display italic font-bold text-primary">creative</span>
                <br />
                AI lead gen
                <br />
                agency from
                <br />
                <span className="font-display italic font-bold text-primary">San Francisco</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed font-body"
              >
                We leverage cutting-edge AI to identify, qualify, and convert your ideal prospects into paying customers at scale.
              </motion.p>
            </div>

            {/* Circle CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex"
            >
              <a
                href="#"
                className="w-32 h-32 xl:w-40 xl:h-40 rounded-full border-2 border-foreground/30 flex items-center justify-center hover:border-primary hover:scale-105 transition-all duration-300 group"
              >
                <ArrowUpRight className="w-10 h-10 xl:w-12 xl:h-12 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Trusted By Marquee */}
        <div className="relative z-10 border-t border-border/50 py-6">
          <p className="text-center text-sm text-muted-foreground font-body mb-4 tracking-widest uppercase">
            Trusted by
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((item, i) => (
                <span key={i} className="flex items-center">
                  <span
                    className={`text-xl md:text-2xl mx-4 ${
                      item.italic
                        ? "font-display italic text-primary"
                        : "font-body font-light text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="text-muted-foreground mx-4">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
