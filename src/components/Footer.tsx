import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: ["AI Prospecting", "Lead Scoring", "Outreach Automation", "CRM Integration"],
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-12 lg:px-20 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-foreground font-body text-lg font-medium tracking-tight">
              LeadGenAI
            </span>
            <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mt-4 max-w-xs">
              AI-powered lead generation that fills your pipeline with qualified
              prospects — on autopilot.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-sm text-primary font-body font-medium hover:underline underline-offset-4"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body font-medium mb-5">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 font-body font-light hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body font-light">
            © {new Date().getFullYear()} LeadGenAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground font-body font-light hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
