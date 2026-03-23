import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "LeadGenAI didn't just bring us leads — they brought us the right leads. Our close rate jumped 40% in the first quarter.",
    author: "Amanda Torres",
    role: "CEO",
    company: "Stratosphere Digital",
  },
  {
    quote: "We replaced three tools and two agencies with LeadGenAI. The AI handles what used to take our team hours every single day.",
    author: "Marcus Liu",
    role: "Head of Revenue",
    company: "CloudSync Technologies",
  },
  {
    quote: "The predictive scoring is unreal. It's like having a data scientist embedded in our sales team, working around the clock.",
    author: "Elena Voss",
    role: "VP of Sales",
    company: "Pulse Analytics",
  },
  {
    quote: "From onboarding to first results in under two weeks. I've never seen an agency move this fast with this level of quality.",
    author: "David Kim",
    role: "Founder",
    company: "NovaBridge AI",
  },
  {
    quote: "Our pipeline has never been healthier. LeadGenAI helped us scale outbound without scaling headcount.",
    author: "Rachel Nguyen",
    role: "Growth Lead",
    company: "Apex Ventures",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="relative bg-background py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-4">
          Testimonials
        </p>
        <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight font-body mb-16 md:mb-20">
          What our{" "}
          <span className="font-display italic font-normal">clients</span> say
        </h2>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <Quote className="w-10 h-10 text-primary/20 mb-8" strokeWidth={1.5} />

          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/90 text-lg md:text-2xl font-body font-light leading-relaxed italic max-w-[750px]"
          >
            "{t.quote}"
          </motion.blockquote>

          <motion.div
            key={`author-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <p className="text-foreground text-sm font-body font-medium">
              {t.author}
            </p>
            <p className="text-muted-foreground text-xs font-body font-light mt-1">
              {t.role}, {t.company}
            </p>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
