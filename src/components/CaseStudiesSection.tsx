import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "Nexova SaaS",
    industry: "B2B Software",
    stat: "340%",
    statLabel: "increase in qualified leads",
    quote:
      "LeadGenAI transformed our pipeline. We went from 20 demos a month to over 90 — all qualified.",
    author: "Sarah Chen",
    role: "VP of Growth",
  },
  {
    client: "Meridian Finance",
    industry: "FinTech",
    stat: "5.2x",
    statLabel: "return on ad spend",
    quote:
      "Their AI targeting found buyer personas we didn't even know existed. Game-changing results.",
    author: "James Whitfield",
    role: "CMO",
  },
  {
    client: "Veltrix Health",
    industry: "HealthTech",
    stat: "68%",
    statLabel: "shorter sales cycle",
    quote:
      "We closed enterprise deals in weeks instead of months. The lead scoring alone paid for itself.",
    author: "Priya Kapoor",
    role: "Head of Sales",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative bg-secondary/30 py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-4">
              Case Studies
            </p>
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight font-body">
              Real results,{" "}
              <span className="font-display italic font-normal">real</span>
              <br />
              growth stories
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-primary font-body font-medium hover:underline underline-offset-4 transition-colors"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-border rounded-lg p-8 md:p-10 bg-background hover:border-primary/30 transition-colors duration-500 flex flex-col justify-between"
            >
              {/* Top: Industry Tag + Stat */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body font-medium border border-border rounded-full px-3 py-1">
                    {study.industry}
                  </span>
                  <span className="text-xs text-muted-foreground font-body font-light">
                    {study.client}
                  </span>
                </div>

                {/* Big Stat */}
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-light text-primary font-body tracking-tight leading-none">
                    {study.stat}
                  </span>
                  <p className="text-sm text-muted-foreground font-body font-light mt-2">
                    {study.statLabel}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-foreground/80 text-sm leading-relaxed font-body font-light italic mb-8">
                  "{study.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-6 flex items-center justify-between">
                <div>
                  <p className="text-foreground text-sm font-body font-medium">
                    {study.author}
                  </p>
                  <p className="text-muted-foreground text-xs font-body font-light">
                    {study.role}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                  <ArrowUpRight
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
