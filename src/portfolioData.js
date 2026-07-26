const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Tu Vu",
  initials: "TV",
  githubUser: "Tu2607",
  location: "Portland, OR",
  status: "Open to opportunities",
  email: "tuvu2607@gmail.com",
  githubUrl: "https://github.com/Tu2607",
  linkedinUrl: "https://www.linkedin.com/in/tu-vu-2607",
  timeZone: "America/Los_Angeles",
  resumeUrl: assetPath("resume.pdf"),
};

export const stack = [
  { label: "Go",              tone: "amber" },
  { label: "C",               tone: "amber" },
  { label: "Python",          tone: "amber" },
  { label: "Bash",            tone: "amber" },
  { label: "Ruby",            tone: "amber" },
  { label: "YAML",            tone: "amber" },
  { label: "Linux",           tone: "sky" },
  { label: "Windows",         tone: "sky" },
  { label: "Docker",          tone: "sky" },
  { label: "GCP",             tone: "sky" },
  { label: "Puppet",          tone: "sage" },
  { label: "Terraform",       tone: "sage" },
  { label: "Redis",           tone: "sage" },
  { label: "Git",             tone: "sage" },
  { label: "CI / CD",         tone: "sage" },
  { label: "Automation",      tone: "sage" },
  { label: "REST APIs",       tone: "rose" },
  { label: "GraphQL",         tone: "rose" },
  { label: "LLM tooling",     tone: "rose" },
  { label: "Spec-driven dev", tone: "rose" },
  { label: "Security Compliance", tone: "rose" },
];

export const stackCategories = [
  { label: "Languages / Configuration", tone: "amber" },
  { label: "Platforms", tone: "sky" },
  { label: "Infra",     tone: "sage" },
  { label: "Practices", tone: "rose" },
];

export const nowPools = {
  currently: [
    "procrastinating instead of working",
    "looking to buy another mechanical keyboard",
    "refactoring my life into smaller PRs",
    "watching cute dog videos",
    "rage-baiting on r/soccer",
    "looking at clouds",
    "talking to a rubber ducky",
    "fantasizing about heroic deeds",
    "pulling Pokémon cards (I'm not a gambler)",
    "watching my portfolio being vaporized",
    "bingeing true-crime shows",
    "drawing up another app I'll be the sole user of",
    "playing video games",
  ],
  fueled_by: [
    "third cup of coffee",
    "one bar of battery",
    "existential curiosity",
    "Cascadian rain sounds",
    "leftover pad kee mao",
    "cold brew and spite",
    "the quiet hum of a build passing",
    "a Diet Coke and a plan",
    "burning hatred for upgrading BIOS",
    "dopamine hit",
    "pulling a grail card that's worth like 2 bucks",
    "good things happening to good people",
    "bad things happening to bad people",
    "Real Madrid losing a game",
    "the bestest good boy Chico, the Pomeranian",
  ],
  hot_take: [
    "tabs > spaces (fight me)",
    "if it compiles, ship it",
    "monorepos are microservices with better commit history",
    "estimation is astrology for engineers",
    "vim is a lifestyle, not an editor",
    "your TODO list is a graveyard, not a plan",
    "microservices are just distributed monoliths with more YAML",
    "the best documentation is a clean `git log`",
    "if your PR is >200 lines, nobody actually reviewed it",
    "pineapple belongs on pizza",
    "left-handed presidents are generally better than right-handed presidents",
    "Casino Royale is the greatest Bond movie. Ever.",
    "curling isn't a real sport",
    "Will Smith's infamous slap is the best thing to ever happen to the Oscars",
    "Pelé is NOT the greatest soccer player ever.",
  ],
};

// Fallback for when GitHub fetch fails (rate limit, offline, etc.).
export const commitStubs = [
  { repo: "codex-cleaner",     msg: "refactor pitch parser to use range-over-func", when: "2h ago" },
  { repo: "codex-cleaner",     msg: "add rate-limit backoff on OpenAI calls",       when: "9h ago" },
  { repo: "AZX-game",          msg: "tighten concurrency-safe state loop",          when: "1d ago" },
  { repo: "AZX-game",          msg: "cache detected move sequences",                when: "2d ago" },
  { repo: "go-chatbot",        msg: "resize Redis pool for the new topology",       when: "3d ago" },
  { repo: "dotfiles",          msg: "wire up new neovim config",                    when: "4d ago" },
  { repo: "compliance-checks", msg: "stub Windows firewall audit",                  when: "5h ago" },
  { repo: "portfolio",         msg: "iterate on Now widget",                        when: "just now" },
];

export const experience = {
  work: [
    {
      hash: "a4c8f21",
      head: "(HEAD → main, tag: promoted)",
      role: "Software Engineer II",
      where: "· Puppet by Perforce",
      date: "Jan 2024 → now",
      details: [
        "Engineered automation solutions for security compliance across Linux and Windows platforms, achieving 95%+ compliance with CIS and OpenSCAP standards.",
        "Developed and maintained Puppet modules in Ruby to automate infrastructure configuration and compliance enforcement across enterprise systems.",
        "Collaborated with Product to lead technical discussions, roadmap planning, and feature execution initiatives.",
        "Explored integrating generative AI into CloudOps and compliance module development through specification-driven development.",
        "Established agentic AI skills and agents for internal development.",
        "Optimized GraphQL queries with caching for CloudOps microservices.",
        "Maintained and improved CI/CD pipelines supporting automated testing, release workflows, and safer delivery of infrastructure automation tooling.",
        "Partnered with enterprise customers to troubleshoot and improve automation tooling reliability.",
      ],
    },
    {
      hash: "7d1b09e",
      role: "Software Engineer I",
      where: "· Puppet by Perforce",
      date: "Aug 2021 → Jan 2024",
      details: [
        "Developed core architectural features for Puppet compliance modules.",
        "Contributed to architecture and feature design for enterprise compliance automation modules.",
        "Improved reliability, maintainability, and performance through targeted bug fixes, refactoring, and production support.",
      ],
    },
    {
      hash: "3f6a8bc",
      role: "Software Engineering Intern",
      where: "· Puppet by Perforce",
      date: "Jun 2021 → Aug 2021",
      details: [
        "Improved Puppet Enterprise runtime by 5% through pruning certificates on the Puppet Server.",
        "Provided support for engineers with bug fixes and performance patches.",
      ],
    },
    {
      hash: "0b5e912",
      msg: "Initial commit",
      where: "· started writing code",
      date: "2017",
    },
  ],
  edu: [
    {
      hash: "e17d4a3",
      head: "(tag: graduated)",
      role: "B.S., Computer Science",
      where: "· Portland State University",
      date: "2021",
    },
    {
      hash: "c02be91",
      msg: "Enrolled",
      where: "· Portland State University",
      date: "2017",
    },
  ],
};

export const projects = [
  {
    title: "Find-Ten Game",
    desc: "Puzzle-game backend in Go — board validation, cached move detection, concurrency-safe state loop.",
    tags: [
      { label: "Go",          tone: "sky" },
      { label: "Concurrency", tone: "amber" },
      { label: "Game logic",  tone: "sage" },
      { label: "Spec-driven", tone: "rose" },
    ],
    lang: { label: "Go", swatch: "go" },
    active: true,
    url: "https://find-ten.tuvu.dedyn.io",
    cta: "Play now",
    liveApp: true,
  },
  {
    title: "Go Chatbot API",
    desc: "Structured REST chatbot backend with Redis caching and request handling patterns.",
    tags: [
      { label: "Go",    tone: "sky" },
      { label: "REST",  tone: "sage" },
      { label: "Redis", tone: "rose" },
    ],
    lang: { label: "Go", swatch: "go" },
    active: true,
    url: "https://github.com/Tu2607/local_chatbot",
  },
  {
    title: "codebase-indexer",
    desc: "MCP server that indexes codebases for fast, structured retrieval by AI coding agents.",
    tags: [
      { label: "MCP",       tone: "amber" },
      { label: "Indexing",  tone: "sage" },
      { label: "Dev tools", tone: "rose" },
    ],
    lang: { label: "Python", swatch: "python" },
    active: true,
    url: "https://github.com/Tu2607/codebase-indexer",
  },
];

export const files = [
  { name: "resume.pdf",  kind: "PDF", tone: "pdf", url: profile.resumeUrl },
  { name: "about.md",    kind: "MD",  tone: "md",  url: assetPath("about.md") },
  { name: "contact.vcf", kind: "VCF", tone: "txt", url: assetPath("contact.vcf") },
  { name: "tu.go",       kind: "GO",  tone: "go",  url: assetPath("tu.go") },
];

export const hobbies = [
  {
    label:  "Weekends",
    title:  "Soccer",
    detail: "Portland rec league — center mid, mostly passes, occasionally a shot.",
    icon: "soccer",
  },
  {
    label:  "Rabbit hole",
    title:  "Mechanical keyboards",
    detail: "Currently on a HHKB Studio · silent tactile switches · MT3 keycaps.",
    icon: "keyboard",
  },
];

export const keyboardBuilds = [
  {
    title: "Corne v3",
    detail: "42-key split build with RGB underglow and per-key LEDs.",
    imageUrl: assetPath("hobbies/corne-v3-v2.png"),
  },
  {
    title: "Ferris Sweep",
    detail: "Wireless 34-key build with a compact, aggressive column stagger.",
    imageUrl: assetPath("hobbies/ferris-sweep-wireless-v2.png"),
  },
  {
    title: "Keychron 60%",
    detail: "A compact daily driver for when one-piece simplicity wins.",
    imageUrl: assetPath("hobbies/keychron-60.png"),
  },
];
