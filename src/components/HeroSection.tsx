import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const trustedBy = [
  { name: "Agency", italic: false },
  { name: "Venture", italic: true },
  { name: "Startup", italic: false },
  { name: "Institute", italic: true },
  { name: "Organization", italic: false },
  { name: "Institute", italic: true },
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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dm1zvc99k/video/upload/v1773302884/red-blob-animation_ar043d.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-background/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Centered Nav */}
        <nav className="mx-auto mt-4 md:mt-6 w-[92%] max-w-5xl rounded-full border border-foreground/10 bg-background/30 backdrop-blur-md px-6 md:px-8 py-3 flex items-center justify-between">
          <span className="text-foreground font-body text-base font-medium tracking-tight">
            LeadGenAI
          </span>
          <div className="hidden md:flex items-center gap-7 text-sm text-foreground/70 font-body font-light">
            <a href="#" className="hover:text-foreground transition-colors">Services</a>
            <a href="#" className="hover:text-foreground transition-colors">Case Studies</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <button className="rounded-full border border-foreground/20 px-5 py-1.5 text-sm text-foreground font-body font-light hover:bg-foreground/10 transition-colors">
            Get Started
          </button>
        </nav>

        {/* Hero Content - extra top padding for clear spacing */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-28">
          <div className="flex items-end justify-between w-full max-w-[1400px] mx-auto">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extralight leading-[1.05] tracking-tight font-body"
              >
                Your{" "}
                <span className="font-display italic font-normal">Trusted</span>{" "}AI
                <br />
                Lead Gen{" "}
                <span className="font-display italic font-normal">Agency</span>
                <br />
                at Your Door
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-foreground/60 text-base md:text-lg max-w-md leading-relaxed font-body font-light"
              >
                We help businesses scale with AI-powered lead generation strategies that deliver qualified prospects straight to your pipeline.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Schedule a Call
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </motion.div>
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
                className="w-28 h-28 xl:w-36 xl:h-36 rounded-full border border-foreground/40 flex items-center justify-center hover:border-foreground hover:scale-105 transition-all duration-300 group"
              >
                <ArrowUpRight className="w-8 h-8 xl:w-10 xl:h-10 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Trusted By Marquee */}
        <div className="relative z-10 border-t border-foreground/10 py-5">
          <p className="text-center text-xs text-foreground/50 font-body font-light mb-4 tracking-[0.2em] uppercase">
            Trusted by
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((item, i) => (
                <span key={i} className="flex items-center">
                  <span
                    className={`text-lg md:text-2xl mx-4 ${
                      item.italic
                        ? "font-display italic text-foreground font-bold"
                        : "font-body font-normal text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="text-foreground/50 mx-4 font-extralight">/</span>
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
