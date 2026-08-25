"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Shield,
  Code,
  Database,
  Cloud,
  Network,
  Settings,
  Phone,
  Mail,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Terminal,
  Container,
  GitBranch,
  Activity,
  Lock,
  Clock,
  MapPin,
  Award,
  FileText,
  Menu,
  X,
  ArrowUp,
  Rocket,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Навыки", href: "#skills" },
  { label: "Образование", href: "#education" },
  { label: "Контакт", href: "#contact" },
  { label: "Кейсы", href: "#projects" },
];

const EXPERIENCES = [
  {
    period: "июль 2024 — н.в.",
    duration: "7 мес",
    title: "SRE-инженер (DevOps)",
    company: "Центральный банк РФ",
    companyUrl: "https://www.cbr.ru",
    description:
      "Поддержка и развитие инфраструктурных сервисов Банка России. Работа с мониторингом, observability-стеком и сетевой инфраструктурой.",
    highlights: [
      "Prometheus, Zabbix, VictoriaMetrics, SMOS",
      "Elasticsearch (ELK), Kafka и др.",
      "Сетевая инфраструктура: маршрутизация, коммутация, VLAN",
      "Управление задачами в Jira, документация в Confluence",
      "Процессно-ориентированные системы (Camunda)",
    ],
    color: "var(--pastel-sage)",
    colorLight: "var(--pastel-sage-light)",
    icon: Server,
  },
  {
    period: "2022 — 2024",
    duration: "1 год 10 мес",
    title: "Системный администратор / DevOps",
    company: "ГБУ НВК \u00abСаха\u00bb",
    companyUrl: "https://nvk-online.ru",
    description:
      "Комплексное администрирование ИТ-инфраструктуры компании, внедрение DevOps-практик и автоматизация процессов.",
    highlights: [
      "Мониторинг: Zabbix, Grafana — настройка с нуля, кастомные UserParameter (Bash/PowerShell)",
      "Виртуализация: Proxmox VE (LXC, Docker, Kubernetes k8s)",
      "Серверы: Windows Server, Astra Linux, IDECO firewall (NGFW+)",
      "DevOps CI/CD: Git, GitLab — организация процесса разработки",
      "Сетевая безопасность: VPN (L2TP, IPSec, WireGuard), VLAN",
      "Автоматизация: скрипты (cron, bash, python), развёртывание IP-телефонии (PBX)",
      "AI-ассистент на Python для внутренних задач",
      "Управление направлением 1 и 2 линии поддержки, закупки ИТ-оборудования, планирование работы ИТ отдела.",
    ],
    color: "var(--pastel-rose)",
    colorLight: "var(--pastel-rose-light)",
    icon: Cloud,
  },
  {
    period: "2021 — 2022",
    duration: "1 год 6 мес",
    title: "Системный администратор",
    company: "ГБУ НВК \u00abСаха\u00bb",
    companyUrl: "https://nvk-online.ru",
    description:
      "Администрирование ИТ-инфраструктуры: серверы, сети, рабочие станции.",
    highlights: [
      "Администрирование Linux и Windows",
      "VMware vSphere — виртуализация",
      "Active Directory: управление пользователями и политиками",
      "Сетевое оборудование L2: Cisco, 3Com, Dell, Huawei, Mikrotik",
      "Резервное копирование и восстановление",
      "Поддержка пользователей (1-я и 2-я линия, до 70 пользователей)",
    ],
    color: "var(--pastel-lavender)",
    colorLight: "var(--pastel-lavender-light)",
    icon: Settings,
  },
];

const SKILL_GROUPS = [
  {
    title: "ОС и серверы",
    icon: Monitor,
    color: "var(--pastel-sage)",
    colorLight: "var(--pastel-sage-light)",
    skills: ["Linux", "Ubuntu Server", "Debian", "Astra Linux", "Windows Server", "KVM"],
  },
  {
    title: "Контейнеризация и виртуализация",
    icon: Container,
    color: "var(--pastel-rose)",
    colorLight: "var(--pastel-rose-light)",
    skills: ["Docker", "LXC", "Kubernetes", "Proxmox VE", "VMware vSphere"],
  },
  {
    title: "CI/CD и DevOps",
    icon: GitBranch,
    color: "var(--pastel-lavender)",
    colorLight: "var(--pastel-lavender-light)",
    skills: ["Git", "GitLab", "CI/CD пайплайны", "Ansible", "DevOps-практики"],
  },
  {
    title: "Мониторинг и Observability",
    icon: Activity,
    color: "var(--pastel-warm)",
    colorLight: "#f5ede3",
    skills: ["Zabbix", "Grafana", "Prometheus", "VictoriaMetrics", "ELK Stack"],
  },
  {
    title: "Сети и безопасность",
    icon: Shield,
    color: "var(--pastel-peach)",
    colorLight: "#f5e5de",
    skills: ["TCP/IP", "VLAN", "OSPF/BGP", "VPN (L2TP/IPSec/WG)", "Vipnet", "S-Terra", "IDECO NGFW"],
  },
  {
    title: "Языки и инструменты",
    icon: Code,
    color: "#b5c5d4",
    colorLight: "#dfe9f0",
    skills: ["Bash", "Python", "VBA", "Nginx", "Apache HTTP", "Jira", "Confluence"],
  },
];

const EDUCATION = [
  {
    year: "2025",
    title: "Защита сетевой инфраструктуры на основе продуктов С-Терра",
    subtitle: "С-Терра СиЭсПи",
    color: "var(--pastel-sage)",
    colorLight: "var(--pastel-sage-light)",
  },
  {
    year: "2025",
    title: "Введение в VBA. Начало программирования в среде MS Office Excel",
    subtitle: "АНО ДПО \u00abУчебный центр РРС\u00bb",
    color: "var(--pastel-rose)",
    colorLight: "var(--pastel-rose-light)",
  },
  {
    year: "2024",
    title: "Администрирование АПКШ Континент версии 3.9",
    subtitle: "АНО ДПО ЦПК",
    color: "var(--pastel-lavender)",
    colorLight: "var(--pastel-lavender-light)",
  },
  {
    year: "2021",
    title: "Бакалавр, Инфокоммуникационные технологии и системы связи",
    subtitle: "СВФУ им. М.К. Аммосова, Институт математики и информатики",
    color: "var(--pastel-warm)",
    colorLight: "#f5ede3",
  },
];

const PROJECTS = [
  {
    title: "Observability в телевещании",
    description:
      "Построил observability с нуля в телевещании: Zabbix + Grafana, тепловые карты, кастомные UserParameter на Bash/PowerShell. В госсекторе \u2014 единая панель для ИТ и бизнес-процессов.",
    color: "var(--pastel-sage)",
    colorLight: "var(--pastel-sage-light)",
  },
  {
    title: "Виртуализация и контейнеризация",
    description:
      "Внедрил виртуализацию (Proxmox VE, VMware) и контейнеризацию (Docker, LXC) \u2014 кластеризация, резервное копирование.",
    color: "var(--pastel-rose)",
    colorLight: "var(--pastel-rose-light)",
  },
  {
    title: "Импортозамещение инфраструктуры",
    description:
      "Реализовал импортозамещение: перевёл инфраструктуру на Astra Linux/РЕД ОС, заменил МСЭ на отечественные (Континент, Vipnet, S-Terra) с криптозащитой (СКЗИ).",
    color: "var(--pastel-lavender)",
    colorLight: "var(--pastel-lavender-light)",
  },
  {
    title: "\u00abДети Азии\u00bb \u2014 международные спортивные игры",
    description:
      "Обеспечил бесперебойное интернет-вещание на международных спортивных играх \u00abДети Азии\u00bb как главный инженер \u2014 управлял командой и инфраструктурой в сжатые сроки.",
    color: "var(--pastel-warm)",
    colorLight: "#f5ede3",
  },
  {
    title: "Детский телеканал \u00abТооку\u00bb",
    description:
      "Запустил с нуля детский телеканал \u00abТооку\u00bb: обеспечил полный технический контур \u2014 от рабочих станций до интернет-вещания, включая мониторинг, резервирование и отказоустойчивость.",
    links: [
      { label: "tooku.ru", url: "https://tooku.ru/" },
      { label: "nvk-online.ru", url: "https://nvk-online.ru" },
    ],
    color: "#b5c5d4",
    colorLight: "#dfe9f0",
  },
];

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
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */

function Navigation() {
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
          className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-tight"
          style={{ color: "var(--pastel-sage)" }}
        >
          Н. Иванов
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
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

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[var(--secondary)] transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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
              {NAV_ITEMS.map((item) => (
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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
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

        {/* Grid pattern */}
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
          {/* Decorative terminal badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "var(--pastel-sage-light)",
              color: "#4a6b52",
            }}
          >
            <Terminal size={14} />
            <span>SRE / Observability / Network Engineer</span>
          </motion.div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Иванов Никита{"\n"}Станиславович
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
            SRE / Observability / Network-инженер с 5+ лет опыта. Надёжность, автоматизация и
            непрерывная доставка — мои основные приоритеты.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "var(--pastel-cream)", color: "var(--muted-foreground)" }}
            >
              <Clock size={12} className="mr-1.5" />
              Полный день
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "var(--pastel-cream)", color: "var(--muted-foreground)" }}
            >
              <MapPin size={12} className="mr-1.5" />
              Удалённо / Релокация
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              style={{ background: "var(--pastel-sage)", color: "#fff" }}
            >
              <a href="#contact">Связаться</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-sm font-semibold border-[var(--border)] hover:bg-[var(--secondary)] transition-all duration-300"
            >
              <a href="#experience">Опыт работы</a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
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

function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Обо мне" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-12">
            Профиль специалиста
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeInSection delay={0.1}>
            <Card
              className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ background: "var(--pastel-sage-light)" }}
            >
              <CardContent className="p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--pastel-sage)" }}
                >
                  <Server size={20} className="text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2">
                  Инфраструктура
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Проектирование и поддержка высоконагруженных инфраструктур.
                  Опыт работы на стороне бизнеса и аутсорсинга — от построения
                  систем с нуля до оптимизации существующих.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <Card
              className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ background: "var(--pastel-rose-light)" }}
            >
              <CardContent className="p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--pastel-rose)" }}
                >
                  <Shield size={20} className="text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2">
                  Безопасность
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Сертифицированные СЗИ (Vipnet, S-Terra), работа с Astra Linux.
                  Организация VPN, межсетевое экранирование, сегментация сетей,
                  соблюдение требований информационной безопасности.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <Card
              className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ background: "var(--pastel-lavender-light)" }}
            >
              <CardContent className="p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--pastel-lavender)" }}
                >
                  <Activity size={20} className="text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2">
                  Observability
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Полный цикл мониторинга: Zabbix + Grafana, логирование (ELK),
                  метрики (Prometheus, VictoriaMetrics). Кастомные проверки,
                  дашборды, алертинг.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32"
      style={{ background: "var(--pastel-cream)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Опыт" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Опыт работы
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>
            Более 5 лет в сфере IT-инфраструктуры и DevOps
          </p>
        </FadeInSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[11px] sm:left-1/2 sm:-translate-x-1/2 w-[18px] h-[18px] rounded-full border-4 border-[var(--background)] z-10"
                    style={{ background: exp.color }}
                  />

                  {/* Content card */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 1 ? "sm:text-left" : ""}`}>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Color strip top */}
                      <div
                        className="h-1"
                        style={{ background: exp.color }}
                      />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: exp.colorLight, color: exp.color }}
                          >
                            <exp.icon size={18} />
                          </div>
                          <div>
                            <span
                              className="text-xs font-semibold tracking-wide uppercase"
                              style={{ color: exp.color }}
                            >
                              {exp.period}
                            </span>
                            <span
                              className="text-xs ml-2 px-2 py-0.5 rounded-full"
                              style={{ background: exp.colorLight, color: exp.color }}
                            >
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-1">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline mb-3 inline-block"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {exp.company}
                        </a>
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {exp.description}
                        </p>

                        <ul className="space-y-1.5">
                          {exp.highlights.map((h, hi) => (
                            <li
                              key={hi}
                              className="text-sm flex items-start gap-2"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: exp.color }}
                              />
                              <span style={{ color: "var(--muted-foreground)" }}>
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </FadeInSection>
            ))}
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
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Навыки" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Технический стек
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>
            Ключевые технологии и инструменты, с которыми работаю ежедневно
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: group.colorLight, color: group.color }}
                    >
                      <group.icon size={20} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-sm">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200"
                        style={{
                          background: group.colorLight,
                          color: "#1a1a1a",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
/*  EDUCATION                                                          */
/* ------------------------------------------------------------------ */

function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32"
      style={{ background: "var(--pastel-cream)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Образование" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-12">
            Образование и сертификаты
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {EDUCATION.map((edu, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <Card
                className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                {/* Color accent on left */}
                <div className="flex h-full">
                  <div
                    className="w-1.5 shrink-0"
                    style={{ background: edu.color }}
                  />
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: edu.colorLight,
                            color: edu.color,
                          }}
                        >
                          <Award size={20} />
                        </div>
                        <div>
                          <span
                            className="text-xs font-semibold tracking-wide"
                            style={{ color: edu.color }}
                          >
                            {edu.year}
                          </span>
                          <h3 className="font-[family-name:var(--font-heading)] font-semibold mt-1">
                            {edu.title}
                          </h3>
                          <p
                            className="text-sm mt-1"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {edu.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Контакт" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Связаться со мной
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>
            Открыт к предложениям и интересным проектам
          </p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <Card className="max-w-2xl mx-auto border-0 shadow-md overflow-hidden">
            <div className="h-1.5" style={{ background: "linear-gradient(90deg, var(--pastel-sage), var(--pastel-lavender), var(--pastel-rose))" }} />
            <CardContent className="p-8 sm:p-10">
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+79247655602"
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 hover:bg-[var(--secondary)] group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--pastel-sage-light)",
                      color: "var(--pastel-sage)",
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
                      Телефон
                    </p>
                    <p className="font-semibold">+7 (924) 765-56-02</p>
                  </div>
                </a>

                <Separator className="bg-[var(--border)]" />

                {/* Email */}
                <a
                  href="mailto:19970710ko@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 hover:bg-[var(--secondary)] group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--pastel-rose-light)",
                      color: "var(--pastel-rose)",
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
                      Email
                    </p>
                    <p className="font-semibold">19970710ko@gmail.com</p>
                  </div>
                </a>

                <Separator className="bg-[var(--border)]" />

                {/* Position */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--pastel-lavender-light)",
                      color: "var(--pastel-lavender)",
                    }}
                  >
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
                      Позиция
                    </p>
                    <p className="font-semibold">SRE / Observability / Network-инженер</p>
                  </div>
                </div>

                <Separator className="bg-[var(--border)]" />

                {/* Resume link */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "#f5ede3",
                      color: "var(--pastel-warm)",
                    }}
                  >
                    <FileText size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
                      Резюме
                    </p>
                    <p className="font-semibold text-sm" style={{ color: "var(--muted-foreground)" }}>
                      PDF-версия по запросу
                    </p>
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
  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      style={{ background: "var(--pastel-cream)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <SectionLabel text="Кейсы" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Ключевые проекты
          </h2>
          <p className="mb-12" style={{ color: "var(--muted-foreground)" }}>
            Проекты, которыми особенно горжусь
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <Card
                className={`h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden ${
                  i === PROJECTS.length - 1 && PROJECTS.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex h-full">
                  <div
                    className="w-1.5 shrink-0"
                    style={{ background: project.color }}
                  />
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: project.colorLight,
                          color: project.color,
                        }}
                      >
                        <Rocket size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-[family-name:var(--font-heading)] font-semibold">
                          {project.title}
                        </h3>
                        <p
                          className="text-sm mt-2 leading-relaxed"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {project.description}
                        </p>
                        {"links" in project && (
                          <div className="flex gap-3 mt-3">
                            {project.links.map((link, li) => (
                              <a
                                key={li}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium hover:underline transition-colors"
                                style={{ color: project.color }}
                              >
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer
      className="py-8 border-t border-[var(--border)]"
      style={{ background: "var(--pastel-cream)" }}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} Иванов Никита Станиславович
        </p>
        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          SRE / Observability / Network-инженер
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  SCROLL-TO-TOP                                                      */
/* ------------------------------------------------------------------ */

function ScrollToTop() {
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
          aria-label="Наверх"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
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
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
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
  );
}
