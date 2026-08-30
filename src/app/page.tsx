"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Shield,
  Code,
  Cloud,
  Settings,
  Phone,
  Mail,
  Briefcase,
  ChevronDown,
  Terminal,
  Container,
  GitBranch,
  Activity,
  Clock,
  MapPin,
  Award,
  FileText,
  Menu,
  X,
  ArrowUp,
  Rocket,
  ExternalLink,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider, useLang } from "@/lib/useLang";
import {
  experienceMeta,
  skillGroupMeta,
  educationMeta,
  projectMeta,
  experienceUrls,
} from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  ICON MAP (for dynamic icon rendering)                              */
/* ------------------------------------------------------------------ */
const ICON_MAP = {
  Server,
  Cloud,
  Settings,
  Monitor,
  Container,
  GitBranch,
  Activity,
  Shield,
  Code,
} as const;

/* ------------------------------------------------------------------ */
/*  ANIMATED SECTION WRAPPER                                          */
/* ------------------------------------------------------------------ */

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION LABEL                                                      */
/* ------------------------------------------------------------------ */

function SectionLabel({ text }: { text: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
      style={{
        background: "var(--pastel-sage-light)",
        color: "#4a6b52",
      }}
    >
      {text}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */

function Navigation() {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-tight flex items-center gap-2"
          style={{ color: "var(--pastel-sage)" }}
        >
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 rounded-full object-cover" />
          {t.navLogo}
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {t.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 hover:bg-[var(--secondary)]"
            style={{ color: "var(--muted-foreground)" }}
            aria-label={t.toggleAriaLabel}
          >
            <Languages size={14} />
            <span>{t.langLabel}</span>
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--secondary)] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[var(--border)]"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {t.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  const { t } = useLang();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--pastel-sage-light)" }}
        />
        <div
          className="absolute bottom-20 -right-32 w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--pastel-rose-light)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--pastel-lavender-light)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: "var(--pastel-sage-light)", color: "#4a6b52" }}
          >
            <Terminal size={14} />
            <span>{t.heroBadge}</span>
          </motion.div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {t.heroName.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
            {t.heroDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "var(--pastel-cream)", color: "var(--muted-foreground)" }}
            >
              <Clock size={12} className="mr-1.5" />
              {t.heroBadgeFullTime}
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "var(--pastel-cream)", color: "var(--muted-foreground)" }}
            >
              <MapPin size={12} className="mr-1.5" />
              {t.heroBadgeLocation}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              style={{ background: "var(--pastel-sage)", color: "#fff" }}
            >
              <a href="#contact">{t.heroCtaContact}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-sm font-semibold border-[var(--border)] hover:bg-[var(--secondary)] transition-all duration-300"
            >
              <a href="#experience">{t.heroCtaExperience}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={24} style={{ color: "var(--muted-foreground)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

const ABOUT_CARDS = [
  { titleKey: "aboutInfraTitle" as const, textKey: "aboutInfraText" as const, icon: Server, color: "var(--pastel-sage)", bg: "var(--pastel-sage-light)" },
  { titleKey: "aboutSecurityTitle" as const, textKey: "aboutSecurityText" as const, icon: Shield, color: "var(--pastel-rose)", bg: "var(--pastel-rose-light)" },
  { titleKey: "aboutObsTitle" as const, textKey: "aboutObsText" as const, icon: Activity, color: "var(--pastel-lavender)", bg: "var(--pastel-lavender-light)" },
] as const;

function AboutSection() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.aboutLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-12">
            {t.aboutTitle}
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, i) => (
            <FadeInSection key={i} delay={(i + 1) * 0.1}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ background: card.bg }}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: card.color }}>
                    <card.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2">
                    {t[card.titleKey]}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {t[card.textKey]}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */

function ExperienceSection() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-24 sm:py-32" style={{ background: "var(--pastel-cream)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.expLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            {t.expTitle}
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>
            {t.expSubtitle}
          </p>
        </FadeInSection>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5" style={{ background: "var(--border)" }} />
          <div className="space-y-12">
            {t.experiences.map((exp, i) => {
              const meta = experienceMeta[i];
              const IconComp = ICON_MAP[meta.icon];
              return (
                <FadeInSection key={i} delay={i * 0.15}>
                  <div className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="absolute left-[11px] sm:left-1/2 sm:-translate-x-1/2 w-[18px] h-[18px] rounded-full border-4 border-[var(--background)] z-10" style={{ background: meta.color }} />

                    <div className={`ml-12 sm:ml-0 sm:w-1/2`}>
                      <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="h-1" style={{ background: meta.color }} />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: meta.colorLight, color: meta.color }}>
                              <IconComp size={18} />
                            </div>
                            <div>
                              <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: meta.color }}>{exp.period}</span>
                              <span className="text-xs ml-2 px-2 py-0.5 rounded-full" style={{ background: meta.colorLight, color: meta.color }}>{exp.duration}</span>
                            </div>
                          </div>
                          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-1">{exp.title}</h3>
                          <a href={experienceUrls[i]} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline mb-3 inline-block" style={{ color: "var(--muted-foreground)" }}>
                            {exp.company}
                          </a>
                          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>{exp.description}</p>
                          <ul className="space-y-1.5">
                            {exp.highlights.map((h, hi) => (
                              <li key={hi} className="text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: meta.color }} />
                                <span style={{ color: "var(--muted-foreground)" }}>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */

function SkillsSection() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.skillsLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            {t.skillsTitle}
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>{t.skillsSubtitle}</p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skillGroups.map((group, i) => {
            const meta = skillGroupMeta[i];
            const IconComp = ICON_MAP[meta.icon];
            return (
              <FadeInSection key={i} delay={i * 0.1}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: meta.colorLight, color: meta.color }}>
                        <IconComp size={20} />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-sm">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, si) => (
                        <span key={si} className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200" style={{ background: meta.colorLight, color: "#1a1a1a" }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EDUCATION                                                          */
/* ------------------------------------------------------------------ */

function EducationSection() {
  const { t } = useLang();
  return (
    <section id="education" className="py-24 sm:py-32" style={{ background: "var(--pastel-cream)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.eduLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-12">
            {t.eduTitle}
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.education.map((edu, i) => {
            const meta = educationMeta[i];
            return (
              <FadeInSection key={i} delay={i * 0.1}>
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
                  <div className="flex h-full">
                    <div className="w-1.5 shrink-0" style={{ background: meta.color }} />
                    <CardContent className="p-6 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ background: meta.colorLight, color: meta.color }}>
                          <Award size={20} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold tracking-wide" style={{ color: meta.color }}>{edu.year}</span>
                          <h3 className="font-[family-name:var(--font-heading)] font-semibold mt-1">{edu.title}</h3>
                          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{edu.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function ContactSection() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.contactLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            {t.contactTitle}
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>{t.contactSubtitle}</p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <Card className="max-w-2xl mx-auto border-0 shadow-md overflow-hidden">
            <div className="h-1.5" style={{ background: "linear-gradient(90deg, var(--pastel-sage), var(--pastel-lavender), var(--pastel-rose))" }} />
            <CardContent className="p-8 sm:p-10">
              <div className="space-y-6">
                <a href="tel:+79247655602" className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 hover:bg-[var(--secondary)] group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--pastel-sage-light)", color: "var(--pastel-sage)" }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{t.contactPhone}</p>
                    <p className="font-semibold">+7 (924) 765-56-02</p>
                  </div>
                </a>

                <Separator className="bg-[var(--border)]" />

                <a href="mailto:19970710ko@gmail.com" className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 hover:bg-[var(--secondary)] group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--pastel-rose-light)", color: "var(--pastel-rose)" }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{t.contactEmail}</p>
                    <p className="font-semibold">19970710ko@gmail.com</p>
                  </div>
                </a>

                <Separator className="bg-[var(--border)]" />

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--pastel-lavender-light)", color: "var(--pastel-lavender)" }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{t.contactPosition}</p>
                    <p className="font-semibold">{t.contactPositionValue}</p>
                  </div>
                </div>

                <Separator className="bg-[var(--border)]" />

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#f5ede3", color: "var(--pastel-warm)" }}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{t.contactResume}</p>
                    <p className="font-semibold text-sm" style={{ color: "var(--muted-foreground)" }}>{t.contactResumeValue}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

function ProjectsSection() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-24 sm:py-32" style={{ background: "var(--pastel-cream)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text={t.projectsLabel} />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            {t.projectsTitle}
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>{t.projectsSubtitle}</p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5">
          {t.projects.map((project, i) => {
            const meta = projectMeta[i];
            return (
              <FadeInSection key={i} delay={i * 0.1}>
                <Card className={`h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden ${i === t.projects.length - 1 && t.projects.length % 2 === 1 ? "md:col-span-2" : ""}`}>
                  <div className="flex h-full">
                    <div className="w-1.5 shrink-0" style={{ background: meta.color }} />
                    <CardContent className="p-6 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ background: meta.colorLight, color: meta.color }}>
                          <Rocket size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-[family-name:var(--font-heading)] font-semibold">{project.title}</h3>
                          <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>
                          {project.links && (
                            <div className="flex gap-3 mt-3">
                              {project.links.map((link, li) => (
                                <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium hover:underline transition-colors" style={{ color: meta.color }}>
                                  <ExternalLink size={12} />
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-8 border-t border-[var(--border)]" style={{ background: "var(--pastel-cream)" }}>
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          {t.footerCopyright.replace("{year}", String(new Date().getFullYear()))}
        </p>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{t.footerPosition}</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  SCROLL-TO-TOP                                                      */
/* ------------------------------------------------------------------ */

function ScrollToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ background: "var(--pastel-sage)", color: "#fff" }}
          aria-label={t.heroScrollAria}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <LangProvider>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation />
          <main className="flex-1">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
            <ProjectsSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </TooltipProvider>
    </LangProvider>
  );
}