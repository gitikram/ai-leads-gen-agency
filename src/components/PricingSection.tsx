import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,499",
    period: "/mo",
    description: "For startups ready to build their first pipeline.",
    features: [
      "Up to 500 leads/month",
      "AI prospecting engine",
      "Email outreach sequences",
      "Basic analytics dashboard",
      "Slack support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3,499",
    period: "/mo",
    description: "For scaling teams that need volume and precision.",
    features: [
      "Up to 2,500 leads/month",
      "Multi-channel outreach",
      "Predictive lead scoring",
      "CRM integration",
      "Dedicated account manager",
      "Weekly strategy calls",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex sales motions.",
    features: [
      "Unlimited leads",
      "Custom AI models",
      "Full-stack integration",
      "Priority support & SLA",
      "On-demand reporting",
      "Dedicated success team",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="relative bg-background py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium mb-4">
            Pricing
          </p>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight font-body">
            Simple,{" "}
            <span className="font-display italic font-normal">transparent</span>{" "}
            pricing
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto mt-5 leading-relaxed font-body font-light">
            No hidden fees. Cancel anytime. Every plan includes our core AI engine.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-lg border p-8 md:p-10 flex flex-col ${
                plan.highlight
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground font-body font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <p className="text-sm text-muted-foreground font-body font-medium tracking-wide uppercase mb-4">
                {plan.name}
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-light text-foreground font-body tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm font-body font-light">
                    {plan.period}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mb-8">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/80 font-body font-light"
                  >
                    <Check
                      className="w-4 h-4 text-primary mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3 text-sm font-body font-medium transition-colors ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/85"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
