import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.png";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 px-6 md:px-12 lg:px-20">
      {/* Background Image */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 max-w-[1400px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-6"
        >
          Ready to Scale?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight font-body max-w-3xl mx-auto"
        >
          Let's build your{" "}
          <span className="font-display italic font-normal">next</span>
          <br />
          growth engine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-foreground/60 text-base md:text-lg max-w-md mx-auto mt-6 leading-relaxed font-body font-light"
        >
          Book a free strategy call and see how AI-powered lead generation can
          transform your pipeline in 30 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-body font-medium text-primary-foreground hover:bg-primary/85 transition-colors"
          >
            Schedule a Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-body font-light text-foreground hover:bg-foreground/10 transition-colors"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
