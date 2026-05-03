"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const PROFILE = {
  name: "Vaibhav Ajay Singh",
  title: "Software Engineer · Sydney, NSW",
  tagline: "Full-Stack Engineer × AI/ML · 3+ yrs Nasdaq · USYD MSc Advance Entry DS & AI",
  email: "imvaibhav777@gmail.com",
  phone: "+61 406 454 423",
  github: "https://github.com/imvaibhav777",
  linkedin: "https://linkedin.com/in/imvaibhav777",
  bio: "I build production-grade systems that perform under pressure — from high-concurrency trading infrastructure at Nasdaq Calypso to AI/ML pipelines in my USYD Master's. I care about clean architecture, measurable outcomes, and code that ships.",
};

const EXPERIENCE = [
  {
    role: "Senior Software Developer",
    company: "Nasdaq",
    period: "Mar 2025 – Feb 2026",
    stack: ["Java", "Spring", "REST", "Angular"],
    bullets: [
      "Architected full-stack features on Calypso trading platform — reduced processing latency ~15% across 3 critical workflows",
      "Eliminated bottlenecks in high-concurrency backend → 30% throughput uplift, +20% concurrent capacity",
      "Resolved CSV-injection vulnerability in live production; delivered validated patch within single sprint",
    ],
  },
  {
    role: "Software Developer",
    company: "Nasdaq (Acquired Adenza)",
    period: "Mar 2024 – Mar 2025",
    stack: ["Angular", "TypeScript", "Cypress", "Java"],
    bullets: [
      "Led Angular WebUI Modernization — upgraded 5 frameworks, 12 libraries, zero regression across 40+ components",
      "Shipped 6 major + 8 minor releases on schedule; owned full SDLC end-to-end",
      "Mitigated XSS vulnerability; OWASP Top 10 validated; -25% code complexity via OOP refactor",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Adenza",
    period: "Dec 2022 – March 2024",
    stack: ["Java", "Spring", "JUnit", "Oracle"],
    bullets: [
      "Resolved 30+ production defects in pricing/risk modules — MTTR cut 40%",
      "Designed and delivered 2 new platform features aligned to trading business requirements",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Adenza",
    period: "Jun 2022 – Dec 2022",
    stack: ["Java", "JUnit"],
    bullets: [
      "Built 50+ JUnit test cases, 85% coverage, preventing 6 regression defects pre-production",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Science — Advanced Entry in Data Science & AI",
    school: "University of Sydney",
    period: "Feb 2026 – present (expected graduation Dec 2027)",
    note: "Distinction WAM · Penultimate year",
    courses: ["Machine Learning", "Deep Learning", "Statistical Data Science", "Distributed Systems", "Cloud Computing"],
  },
  {
    degree: "B.E. Electronics & Telecommunication Engineering",
    school: "Mumbai University",
    period: "Aug 2022",
    note: "CGPI: 7.83 / 10",
    courses: ["Applied Mathematics", "Data Structures & Algorithms", "Operating Systems", "Fuzzy Logic", "Database Management"],
  },
];

const SKILLS = {
  Languages: ["Java", "Python", "TypeScript", "JavaScript", "C++", "SQL"],
  "Frontend": ["Next.js", "Angular", "React", "HTML5", "CSS3", "Cypress"],
  "Backend & Cloud": ["AWS","Spring Boot", "Microservices", "REST APIs", "Oracle DB"],
  "AI / Data": ["LLMs", "scikit-learn", "PyTorch", "Pandas", "NumPy", "Statistical Modelling"],
  "Tools": ["Git", "Jenkins", "Jira", "Confluence", "VS Code", "IntelliJ"],
};

const NAV = ["About", "Experience", "Education", "Skills", "Contact"];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }}
    />
  );
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    const raf = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      if (dot.current) { dot.current.style.transform = `translate(${x}px,${y}px)`; }
      if (ring.current) { ring.current.style.transform = `translate(${rx}px,${ry}px)`; }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 z-[999] w-2 h-2 -translate-x-1 -translate-y-1 rounded-full bg-amber-400 pointer-events-none hidden md:block" />
      <div ref={ring} className="fixed top-0 left-0 z-[998] w-8 h-8 -translate-x-4 -translate-y-4 rounded-full border border-amber-400/40 pointer-events-none hidden md:block transition-transform duration-75" />
    </>
  );
}

function NavBar() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60" : ""}`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("About")} className="font-mono text-xs text-amber-400 tracking-[0.2em] uppercase hover:text-amber-300 transition-colors">
          VS /
        </button>
        <ul className="flex gap-6">
          {NAV.map((n) => (
            <li key={n}>
              <button
                onClick={() => scrollTo(n)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${active === n ? "text-amber-400" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 max-w-5xl mx-auto">
      {/* Ambient glow */}
      <div aria-hidden className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div aria-hidden className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <p className="font-mono text-xs text-amber-400 tracking-[0.3em] uppercase mb-8 animate-fade-in">
        Sydney, NSW · Available Now
      </p>

      <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight text-zinc-100 mb-8 animate-slide-up">
        Vaibhav<br />
        <span className="text-zinc-500">Ajay</span><br />
        Singh
      </h1>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-slide-up-delay">
        <p className="max-w-md text-zinc-400 leading-relaxed text-sm">
          {PROFILE.bio}
        </p>
        <div className="flex gap-4 shrink-0">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
            className="group px-5 py-2.5 border border-zinc-700 text-zinc-300 font-mono text-xs tracking-wider uppercase hover:border-amber-400 hover:text-amber-400 transition-all">
            LinkedIn ↗
          </a>
          <a href={`mailto:${PROFILE.email}`}
            className="px-5 py-2.5 bg-amber-400 text-zinc-950 font-mono text-xs tracking-wider uppercase hover:bg-amber-300 transition-colors font-bold">
            Hire Me
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-px border border-zinc-800 divide-x divide-zinc-800">
        {[
          { num: "3+", label: "Years at Nasdaq" },
          { num: "MSc", label: "AI/DS · USYD" },
          { num: "40+", label: "Components Shipped" },
        ].map(({ num, label }) => (
          <div key={label} className="px-6 py-5 bg-zinc-900/40">
            <div className="font-display text-2xl text-amber-400">{num}</div>
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="01" title="Experience" />
      <div className="mt-12 space-y-px border border-zinc-800">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="border-b border-zinc-800 last:border-0">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 hover:bg-zinc-900/50 transition-colors text-left group"
            >
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-zinc-100 font-medium">{exp.role}</span>
                  <span className="text-amber-400 font-mono text-xs">— {exp.company}</span>
                </div>
                <div className="font-mono text-xs text-zinc-600 mt-1">{exp.period}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden md:flex gap-1.5 flex-wrap">
                  {exp.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 font-mono text-[10px] rounded">{t}</span>
                  ))}
                </div>
                <span className={`text-zinc-500 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
            </button>
            {open === i && (
              <div className="px-6 pb-5 border-t border-zinc-800/50">
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-amber-400 shrink-0 mt-0.5">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="02" title="Education" />
      <div className="mt-12 grid md:grid-cols-2 gap-px border border-zinc-800">
        {EDUCATION.map((ed, i) => (
          <div key={i} className={`p-8 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors ${i === 0 ? "border-b md:border-b-0 md:border-r border-zinc-800" : ""}`}>
            <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3">{ed.period}</div>
            <h3 className="text-zinc-100 font-medium leading-tight mb-1">{ed.degree}</h3>
            <p className="text-zinc-500 text-sm mb-3">{ed.school}</p>
            <span className="inline-block px-3 py-1 border border-zinc-700 text-zinc-400 font-mono text-[10px] rounded-full">{ed.note}</span>
            {ed.courses.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {ed.courses.map((c) => (
                  <span key={c} className="px-2 py-1 bg-zinc-800/80 text-zinc-400 text-[10px] font-mono rounded">{c}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="03" title="Skills" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-zinc-800">
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div key={cat} className="p-6 bg-zinc-900/20 hover:bg-zinc-900/50 transition-colors border-b border-r border-zinc-800">
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-[0.2em] mb-4">{cat}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((sk) => (
                <span key={sk} className="group px-2.5 py-1 border border-zinc-700 text-zinc-300 text-xs font-mono hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-default rounded">
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="04" title="Contact" />
      <div className="mt-12 border border-zinc-800 p-10 md:p-16 bg-zinc-900/20 relative overflow-hidden">
        <div aria-hidden className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-amber-500/5 blur-[80px]" />
        <h2 className="font-display text-4xl md:text-6xl text-zinc-100 mb-6 leading-tight">
          Let's build<br />
          <span className="text-amber-400">something.</span>
        </h2>
        <p className="text-zinc-500 text-sm max-w-sm mb-10">
          Open to internship, graduate, and full-time opportunities in Sydney. Response within 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-zinc-950 font-mono text-xs tracking-wider uppercase hover:bg-amber-300 transition-colors font-bold">
            {PROFILE.email} ↗
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-mono text-xs tracking-wider uppercase hover:border-amber-400 hover:text-amber-400 transition-all">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] text-zinc-600 tracking-widest">{index}</span>
      <div className="h-px flex-1 bg-zinc-800" />
      <h2 className="font-mono text-xs text-zinc-400 tracking-[0.2em] uppercase">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
          © 2026 Vaibhav Ajay Singh · Sydney, NSW
        </span>
        <span className="font-mono text-[10px] text-zinc-700 tracking-widest">
          Next.js · Tailwind · TypeScript
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    document.title = "Vaibhav Singh — Software Engineer Sydney";
  }, []);

  return (
    <>
      <Head>
        <title>Vaibhav Singh — Software Engineer Sydney</title>
        <meta name="description" content="Full-stack software engineer based in Sydney, NSW. 3 years at Nasdaq + USYD MSc in AI/Data Science. Java, TypeScript, Angular, React, Python, Spring." />
        <meta name="keywords" content="software engineer sydney, full stack developer sydney, java developer sydney, angular developer sydney, AI engineer sydney" />
        <meta property="og:title" content="Vaibhav Singh — Software Engineer Sydney" />
        <meta property="og:description" content="Full-stack engineer. 3 yrs Nasdaq. USYD MSc AI/Data Science." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        :root { --font-display: 'Cormorant Garamond', serif; --font-mono: 'DM Mono', monospace; }
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; cursor: none; }
        body { background: #09090b; }
        @media (max-width: 768px) { html { cursor: auto; } }

        .font-display { font-family: var(--font-display); }
        .font-mono    { font-family: var(--font-mono); }

        @keyframes fade-in    { from { opacity:0 }           to { opacity:1 } }
        @keyframes slide-up   { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
        .animate-fade-in      { animation: fade-in  0.6s ease both; }
        .animate-slide-up     { animation: slide-up 0.8s ease both 0.1s; }
        .animate-slide-up-delay { animation: slide-up 0.9s ease both 0.25s; }

        /* scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #09090b; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #fbbf24; }
      `}</style>

      <div className="relative bg-zinc-950 text-zinc-100 min-h-screen antialiased selection:bg-amber-400/20 selection:text-amber-300">
        <GrainOverlay />
        <Cursor />
        <NavBar />
        <main>
          <Hero />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}