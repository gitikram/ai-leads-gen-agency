import { motion } from "framer-motion";
import { Bot, Target, BarChart3, Mail, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Prospecting",
    description:
      "Intelligent algorithms scan millions of data points to identify your ideal customers before your competitors do.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Hyper-targeted outreach powered by machine learning that adapts to your market in real time.",
  },
  {
    icon: Mail,
    title: "Automated Outreach",
    description:
      "Personalized email and LinkedIn sequences that feel human, delivered at scale with AI optimization.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Know which leads will convert before they do. Our models score and prioritize your pipeline automatically.",
  },
  {
    icon: Users,
    title: "Lead Enrichment",
    description:
      "Enrich every contact with firmographic, technographic, and intent data for smarter conversations.",
  },
  {
    icon: Zap,
    title: "CRM Integration",
    description:
      "Seamless sync with your existing stack — HubSpot, Salesforce, Pipedrive and more, zero friction.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-background py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-4">
              What We Do
            </p>
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight font-body">
              Services that{" "}
              <span className="font-display italic font-normal">drive</span>
              <br />
              your growth
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed font-body font-light">
            We combine cutting-edge AI with proven outreach strategies to fill
            your pipeline with qualified leads — on autopilot.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                <service.icon
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-foreground text-lg font-body font-medium mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
