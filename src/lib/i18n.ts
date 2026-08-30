/* ------------------------------------------------------------------ */
/*  TRANSLATIONS – Russian / English                                    */
/* ------------------------------------------------------------------ */

export type Lang = "ru" | "en";

export interface Translations {
  /* NAV */
  navLogo: string;
  navItems: { label: string; href: string }[];
  langLabel: string;
  toggleAriaLabel: string;

  /* HERO */
  heroBadge: string;
  heroName: string;
  heroDescription: string;
  heroBadgeFullTime: string;
  heroBadgeLocation: string;
  heroCtaContact: string;
  heroCtaExperience: string;
  heroScrollAria: string;

  /* ABOUT */
  aboutLabel: string;
  aboutTitle: string;
  aboutInfraTitle: string;
  aboutInfraText: string;
  aboutSecurityTitle: string;
  aboutSecurityText: string;
  aboutObsTitle: string;
  aboutObsText: string;

  /* EXPERIENCE */
  expLabel: string;
  expTitle: string;
  expSubtitle: string;
  experiences: {
    period: string;
    duration: string;
    title: string;
    company: string;
    description: string;
    highlights: string[];
  }[];

  /* SKILLS */
  skillsLabel: string;
  skillsTitle: string;
  skillsSubtitle: string;
  skillGroups: {
    title: string;
    skills: string[];
  }[];

  /* EDUCATION */
  eduLabel: string;
  eduTitle: string;
  education: {
    year: string;
    title: string;
    subtitle: string;
  }[];

  /* CONTACT */
  contactLabel: string;
  contactTitle: string;
  contactSubtitle: string;
  contactPhone: string;
  contactEmail: string;
  contactPosition: string;
  contactPositionValue: string;
  contactResume: string;
  contactResumeValue: string;

  /* PROJECTS */
  projectsLabel: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projects: {
    title: string;
    description: string;
    links?: { label: string; url: string }[];
  }[];

  /* FOOTER */
  footerCopyright: string;
  footerPosition: string;
}

/* Shared visual config (not translated) */
const COLORS = {
  sage: "var(--pastel-sage)",
  sageLight: "var(--pastel-sage-light)",
  rose: "var(--pastel-rose)",
  roseLight: "var(--pastel-rose-light)",
  lavender: "var(--pastel-lavender)",
  lavenderLight: "var(--pastel-lavender-light)",
  warm: "var(--pastel-warm)",
  warmLight: "#f5ede3",
  peach: "var(--pastel-peach)",
  peachLight: "#f5e5de",
  blue: "#b5c5d4",
  blueLight: "#dfe9f0",
};

const ru: Translations = {
  /* NAV */
  navLogo: "Н. Иванов",
  navItems: [
    { label: "Обо мне", href: "#about" },
    { label: "Опыт", href: "#experience" },
    { label: "Навыки", href: "#skills" },
    { label: "Образование", href: "#education" },
    { label: "Контакт", href: "#contact" },
    { label: "Кейсы", href: "#projects" },
  ],
  langLabel: "EN",
  toggleAriaLabel: "Переключить на английский",

  /* HERO */
  heroBadge: "SRE / Observability / Network Engineer",
  heroName: "Иванов Никита\nСтаниславович",
  heroDescription:
    "SRE / Observability / Network-инженер с 5+ лет опыта. Надёжность, автоматизация и непрерывная доставка — мои основные приоритеты.",
  heroBadgeFullTime: "Полный день",
  heroBadgeLocation: "Удалённо / Релокация",
  heroCtaContact: "Связаться",
  heroCtaExperience: "Опыт работы",
  heroScrollAria: "Наверх",

  /* ABOUT */
  aboutLabel: "Обо мне",
  aboutTitle: "Профиль специалиста",
  aboutInfraTitle: "Инфраструктура",
  aboutInfraText:
    "Проектирование и поддержка высоконагруженных инфраструктур. Опыт работы на стороне бизнеса и аутсорсинга — от построения систем с нуля до оптимизации существующих.",
  aboutSecurityTitle: "Безопасность",
  aboutSecurityText:
    "Сертифицированные СЗИ (Vipnet, S-Terra), работа с Astra Linux. Организация VPN, межсетевое экранирование, сегментация сетей, соблюдение требований информационной безопасности.",
  aboutObsTitle: "Observability",
  aboutObsText:
    "Полный цикл мониторинга: Zabbix + Grafana, логирование (ELK), метрики (Prometheus, VictoriaMetrics). Кастомные проверки, дашборды, алертинг.",

  /* EXPERIENCE */
  expLabel: "Опыт",
  expTitle: "Опыт работы",
  expSubtitle: "Более 5 лет в сфере IT-инфраструктуры и DevOps",
  experiences: [
    {
      period: "июль 2024 — н.в.",
      duration: "7 мес",
      title: "SRE-инженер (DevOps)",
      company: "Центральный банк РФ",
      description:
        "Поддержка и развитие инфраструктурных сервисов Банка России. Работа с мониторингом, observability-стеком и сетевой инфраструктурой.",
      highlights: [
        "Prometheus, Zabbix, VictoriaMetrics, SMOS",
        "Elasticsearch (ELK), Kafka и др.",
        "Сетевая инфраструктура: маршрутизация, коммутация, VLAN",
        "Управление задачами в Jira, документация в Confluence",
        "Процессно-ориентированные системы (Camunda)",
      ],
    },
    {
      period: "2022 — 2024",
      duration: "1 год 10 мес",
      title: "Системный администратор / DevOps",
      company: "ГБУ НВК \u00abСаха\u00bb",
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
    },
    {
      period: "2021 — 2022",
      duration: "1 год 6 мес",
      title: "Системный администратор",
      company: "ГБУ НВК \u00abСаха\u00bb",
      description: "Администрирование ИТ-инфраструктуры: серверы, сети, рабочие станции.",
      highlights: [
        "Администрирование Linux и Windows",
        "VMware vSphere — виртуализация",
        "Active Directory: управление пользователями и политиками",
        "Сетевое оборудование L2: Cisco, 3Com, Dell, Huawei, Mikrotik",
        "Резервное копирование и восстановление",
        "Поддержка пользователей (1-я и 2-я линия, до 70 пользователей)",
      ],
    },
  ],

  /* SKILLS */
  skillsLabel: "Навыки",
  skillsTitle: "Технический стек",
  skillsSubtitle: "Ключевые технологии и инструменты, с которыми работаю ежедневно",
  skillGroups: [
    { title: "ОС и серверы", skills: ["Linux", "Ubuntu Server", "Debian", "Astra Linux", "Windows Server", "KVM"] },
    { title: "Контейнеризация и виртуализация", skills: ["Docker", "LXC", "Kubernetes", "Proxmox VE", "VMware vSphere"] },
    { title: "CI/CD и DevOps", skills: ["Git", "GitLab", "CI/CD пайплайны", "Ansible", "DevOps-практики"] },
    { title: "Мониторинг и Observability", skills: ["Zabbix", "Grafana", "Prometheus", "VictoriaMetrics", "ELK Stack"] },
    { title: "Сети и безопасность", skills: ["TCP/IP", "VLAN", "OSPF/BGP", "VPN (L2TP/IPSec/WG)", "Vipnet", "S-Terra", "IDECO NGFW"] },
    { title: "Языки и инструменты", skills: ["Bash", "Python", "VBA", "Nginx", "Apache HTTP", "Jira", "Confluence"] },
  ],

  /* EDUCATION */
  eduLabel: "Образование",
  eduTitle: "Образование и сертификаты",
  education: [
    {
      year: "2025",
      title: "Защита сетевой инфраструктуры на основе продуктов С-Терра",
      subtitle: "С-Терра СиЭсПи",
    },
    {
      year: "2025",
      title: "Введение в VBA. Начало программирования в среде MS Office Excel",
      subtitle: "АНО ДПО \u00abУчебный центр РРС\u00bb",
    },
    {
      year: "2024",
      title: "Администрирование АПКШ Континент версии 3.9",
      subtitle: "АНО ДПО ЦПК",
    },
    {
      year: "2021",
      title: "Бакалавр, Инфокоммуникационные технологии и системы связи",
      subtitle: "СВФУ им. М.К. Аммосова, Институт математики и информатики",
    },
  ],

  /* CONTACT */
  contactLabel: "Контакт",
  contactTitle: "Связаться со мной",
  contactSubtitle: "Открыт к предложениям и интересным проектам",
  contactPhone: "Телефон",
  contactEmail: "Email",
  contactPosition: "Позиция",
  contactPositionValue: "SRE / Observability / Network-инженер",
  contactResume: "Резюме",
  contactResumeValue: "PDF-версия по запросу",

  /* PROJECTS */
  projectsLabel: "Кейсы",
  projectsTitle: "Ключевые проекты",
  projectsSubtitle: "Проекты, которыми особенно горжусь",
  projects: [
    {
      title: "Observability в телевещании",
      description:
        "Построил observability с нуля в телевещании: Zabbix + Grafana, тепловые карты, кастомные UserParameter на Bash/PowerShell. В госсекторе — единая панель для ИТ и бизнес-процессов.",
    },
    {
      title: "Виртуализация и контейнеризация",
      description: "Внедрил виртуализацию (Proxmox VE, VMware) и контейнеризацию (Docker, LXC) — кластеризация, резервное копирование.",
    },
    {
      title: "Импортозамещение инфраструктуры",
      description:
        "Реализовал импортозамещение: перевёл инфраструктуру на Astra Linux/РЕД ОС, заменил МСЭ на отечественные (Континент, Vipnet, S-Terra) с криптозащитой (СКЗИ).",
    },
    {
      title: "\u00abДети Азии\u00bb — международные спортивные игры",
      description:
        "Обеспечил бесперебойное интернет-вещание на международных спортивных играх \u00abДети Азии\u00bb как главный инженер — управлял командой и инфраструктурой в сжатые сроки.",
    },
    {
      title: "Детский телеканал \u00abТооку\u00bb",
      description:
        "Запустил с нуля детский телеканал \u00abТооку\u00bb: обеспечил полный технический контур — от рабочих станций до интернет-вещания, включая мониторинг, резервирование и отказоустойчивость.",
      links: [
        { label: "tooku.ru", url: "https://tooku.ru/" },
        { label: "nvk-online.ru", url: "https://nvk-online.ru" },
      ],
    },
  ],

  /* FOOTER */
  footerCopyright: "\u00a9 {year} Иванов Никита Станиславович",
  footerPosition: "SRE / Observability / Network-инженер",
};

/* ================================================================== */
/*  ENGLISH                                                            */
/* ================================================================== */

const en: Translations = {
  /* NAV */
  navLogo: "N. Ivanov",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    { label: "Projects", href: "#projects" },
  ],
  langLabel: "RU",
  toggleAriaLabel: "Switch to Russian",

  /* HERO */
  heroBadge: "SRE / Observability / Network Engineer",
  heroName: "Nikita Ivanov\nStanislavovich",
  heroDescription:
    "SRE / Observability / Network engineer with 5+ years of experience. Reliability, automation and continuous delivery are my top priorities.",
  heroBadgeFullTime: "Full-time",
  heroBadgeLocation: "Remote / Relocation",
  heroCtaContact: "Contact me",
  heroCtaExperience: "Experience",
  heroScrollAria: "Back to top",

  /* ABOUT */
  aboutLabel: "About",
  aboutTitle: "Professional Profile",
  aboutInfraTitle: "Infrastructure",
  aboutInfraText:
    "Designing and supporting high-load infrastructures. Experience on both the business and outsourcing sides — from building systems from scratch to optimizing existing ones.",
  aboutSecurityTitle: "Security",
  aboutSecurityText:
    "Certified security tools (Vipnet, S-Terra), Astra Linux. VPN, firewalling, network segmentation, compliance with information security requirements.",
  aboutObsTitle: "Observability",
  aboutObsText:
    "Full monitoring lifecycle: Zabbix + Grafana, logging (ELK), metrics (Prometheus, VictoriaMetrics). Custom checks, dashboards, alerting.",

  /* EXPERIENCE */
  expLabel: "Experience",
  expTitle: "Work Experience",
  expSubtitle: "Over 5 years in IT infrastructure and DevOps",
  experiences: [
    {
      period: "July 2024 — present",
      duration: "7 mo",
      title: "SRE Engineer (DevOps)",
      company: "Central Bank of Russia",
      description:
        "Support and development of infrastructure services for the Bank of Russia. Monitoring, observability stack, and network infrastructure.",
      highlights: [
        "Prometheus, Zabbix, VictoriaMetrics, SMOS",
        "Elasticsearch (ELK), Kafka, etc.",
        "Network infrastructure: routing, switching, VLAN",
        "Task management in Jira, documentation in Confluence",
        "Process-oriented systems (Camunda)",
      ],
    },
    {
      period: "2022 — 2024",
      duration: "1 yr 10 mo",
      title: "System Administrator / DevOps",
      company: "GBU NVK \u00abSakha\u00bb",
      description:
        "Comprehensive IT infrastructure administration, DevOps practices implementation and process automation.",
      highlights: [
        "Monitoring: Zabbix, Grafana — built from scratch, custom UserParameter (Bash/PowerShell)",
        "Virtualization: Proxmox VE (LXC, Docker, Kubernetes k8s)",
        "Servers: Windows Server, Astra Linux, IDECO firewall (NGFW+)",
        "DevOps CI/CD: Git, GitLab — development process organization",
        "Network security: VPN (L2TP, IPSec, WireGuard), VLAN",
        "Automation: scripts (cron, bash, python), IP telephony deployment (PBX)",
        "AI assistant in Python for internal tasks",
        "Managing 1st and 2nd line support, IT equipment procurement, IT department planning.",
      ],
    },
    {
      period: "2021 — 2022",
      duration: "1 yr 6 mo",
      title: "System Administrator",
      company: "GBU NVK \u00abSakha\u00bb",
      description: "IT infrastructure administration: servers, networks, workstations.",
      highlights: [
        "Linux and Windows administration",
        "VMware vSphere — virtualization",
        "Active Directory: user and policy management",
        "L2 network equipment: Cisco, 3Com, Dell, Huawei, Mikrotik",
        "Backup and recovery",
        "User support (1st and 2nd line, up to 70 users)",
      ],
    },
  ],

  /* SKILLS */
  skillsLabel: "Skills",
  skillsTitle: "Tech Stack",
  skillsSubtitle: "Key technologies and tools I work with daily",
  skillGroups: [
    { title: "OS & Servers", skills: ["Linux", "Ubuntu Server", "Debian", "Astra Linux", "Windows Server", "KVM"] },
    { title: "Containers & Virtualization", skills: ["Docker", "LXC", "Kubernetes", "Proxmox VE", "VMware vSphere"] },
    { title: "CI/CD & DevOps", skills: ["Git", "GitLab", "CI/CD pipelines", "Ansible", "DevOps practices"] },
    { title: "Monitoring & Observability", skills: ["Zabbix", "Grafana", "Prometheus", "VictoriaMetrics", "ELK Stack"] },
    { title: "Networks & Security", skills: ["TCP/IP", "VLAN", "OSPF/BGP", "VPN (L2TP/IPSec/WG)", "Vipnet", "S-Terra", "IDECO NGFW"] },
    { title: "Languages & Tools", skills: ["Bash", "Python", "VBA", "Nginx", "Apache HTTP", "Jira", "Confluence"] },
  ],

  /* EDUCATION */
  eduLabel: "Education",
  eduTitle: "Education & Certificates",
  education: [
    {
      year: "2025",
      title: "Network Infrastructure Protection based on S-Terra Products",
      subtitle: "S-Terra CSP",
    },
    {
      year: "2025",
      title: "Introduction to VBA. Getting Started with MS Office Excel Programming",
      subtitle: "ANO DPO \u00abTraining Center RRS\u00bb",
    },
    {
      year: "2024",
      title: "Administration of APKSH Continent v3.9",
      subtitle: "ANO DPO CPK",
    },
    {
      year: "2021",
      title: "Bachelor, Infocommunication Technologies and Communication Systems",
      subtitle: "NEFU named after M.K. Ammosov, Institute of Mathematics and Informatics",
    },
  ],

  /* CONTACT */
  contactLabel: "Contact",
  contactTitle: "Get in Touch",
  contactSubtitle: "Open to offers and interesting projects",
  contactPhone: "Phone",
  contactEmail: "Email",
  contactPosition: "Position",
  contactPositionValue: "SRE / Observability / Network Engineer",
  contactResume: "Resume",
  contactResumeValue: "PDF version on request",

  /* PROJECTS */
  projectsLabel: "Projects",
  projectsTitle: "Key Projects",
  projectsSubtitle: "Projects I\u2019m especially proud of",
  projects: [
    {
      title: "Observability in Broadcasting",
      description:
        "Built observability from scratch in broadcasting: Zabbix + Grafana, heatmaps, custom UserParameter in Bash/PowerShell. In the public sector — a unified dashboard for IT and business processes.",
    },
    {
      title: "Virtualization & Containerization",
      description:
        "Implemented virtualization (Proxmox VE, VMware) and containerization (Docker, LXC) — clustering, backup.",
    },
    {
      title: "Infrastructure Import Substitution",
      description:
        "Implemented import substitution: migrated infrastructure to Astra Linux/RED OS, replaced foreign security tools with domestic ones (Continent, Vipnet, S-Terra) with cryptographic protection.",
    },
    {
      title: "\u00abChildren of Asia\u00bb — International Sports Games",
      description:
        "Ensured uninterrupted internet broadcasting at the international \u00abChildren of Asia\u00bb sports games as chief engineer — managed the team and infrastructure under tight deadlines.",
    },
    {
      title: "Children\u2019s TV Channel \u00abTooku\u00bb",
      description:
        "Launched the children\u2019s TV channel \u00abTooku\u00bb from scratch: provided the full technical pipeline — from workstations to internet broadcasting, including monitoring, redundancy, and fault tolerance.",
      links: [
        { label: "tooku.ru", url: "https://tooku.ru/" },
        { label: "nvk-online.ru", url: "https://nvk-online.ru" },
      ],
    },
  ],

  /* FOOTER */
  footerCopyright: "\u00a9 {year} Nikita Ivanov",
  footerPosition: "SRE / Observability / Network Engineer",
};

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export const translations: Record<Lang, Translations> = { ru, en };

/* Visual config that doesn't change with language */
export const experienceMeta = [
  { color: COLORS.sage, colorLight: COLORS.sageLight, icon: "Server" as const },
  { color: COLORS.rose, colorLight: COLORS.roseLight, icon: "Cloud" as const },
  { color: COLORS.lavender, colorLight: COLORS.lavenderLight, icon: "Settings" as const },
];

export const skillGroupMeta = [
  { color: COLORS.sage, colorLight: COLORS.sageLight, icon: "Monitor" as const },
  { color: COLORS.rose, colorLight: COLORS.roseLight, icon: "Container" as const },
  { color: COLORS.lavender, colorLight: COLORS.lavenderLight, icon: "GitBranch" as const },
  { color: COLORS.warm, colorLight: COLORS.warmLight, icon: "Activity" as const },
  { color: COLORS.peach, colorLight: COLORS.peachLight, icon: "Shield" as const },
  { color: COLORS.blue, colorLight: COLORS.blueLight, icon: "Code" as const },
];

export const educationMeta = [
  { color: COLORS.sage, colorLight: COLORS.sageLight },
  { color: COLORS.rose, colorLight: COLORS.roseLight },
  { color: COLORS.lavender, colorLight: COLORS.lavenderLight },
  { color: COLORS.warm, colorLight: COLORS.warmLight },
];

export const projectMeta = [
  { color: COLORS.sage, colorLight: COLORS.sageLight },
  { color: COLORS.rose, colorLight: COLORS.roseLight },
  { color: COLORS.lavender, colorLight: COLORS.lavenderLight },
  { color: COLORS.warm, colorLight: COLORS.warmLight },
  { color: COLORS.blue, colorLight: COLORS.blueLight },
];

export const experienceUrls = [
  "https://www.cbr.ru",
  "https://nvk-online.ru",
  "https://nvk-online.ru",
];
