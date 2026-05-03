import React from 'react';
import { Github, Linkedin as LinkedinIcon, Mail, ExternalLink, Code, Terminal, Database, Cpu } from 'lucide-react';

const Portfolio = () => {
  const skills = [
    { cat: "Backend", icons: <Terminal size={20}/>, techs: ["Java", "Spring Boot", "Python", "Microservices"] },
    { cat: "Frontend", icons: <Code size={20}/>, techs: ["Angular", "React", "TypeScript", "Tailwind"] },
    { cat: "AI & Data", icons: <Database size={20}/>, techs: ["PyTorch", "Scikit-learn", "LLMs", "SQL"] },
    { cat: "Cloud/DevOps", icons: <Cpu size={20}/>, techs: ["AWS", "Jenkins", "Docker", "Cypress"] }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-mono p-4 md:p-12">
      {/* Header / Hero */}
      <header className="max-w-4xl mx-auto mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 tracking-tight">
          Vaibhav Singh <span className="text-white text-2xl font-light">| Senior SDE</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Master of CS (AI & Data Science) @ <span className="text-white underline decoration-cyan-500">USYD</span>. 
          Ex-Nasdaq Senior Developer building scalable financial systems.
        </p>
        
        <div className="flex gap-6 mt-8">
          <a href="mailto:imvaibhav777@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail /></a>
          <a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors"><LinkedinIcon /></a>
          <a href="https://github.com" className="hover:text-cyan-400 transition-colors"><Github /></a>
        </div>
      </header>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
          <Terminal size={24}/> // Experience
        </h2>
        <div className="space-y-12 border-l-2 border-slate-700 pl-6 ml-2">
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
            <h3 className="text-xl font-bold">Senior Software Developer @ Nasdaq</h3>
            <p className="text-slate-400">March 2024 — Feb 2026 | Mumbai, India</p>
            <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
              <li>Optimized backend trading modules (Java/Spring Boot) improving throughput by <span className="text-cyan-400">30%</span>.</li>
              <li>Led WebUI Modernization for 40+ components using Angular & Cypress.</li>
              <li>Engineered CSV-injection security fixes for high-concurrency client platforms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
          <Code size={24}/> // Technical_Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                {skill.icons}
                <h4 className="font-bold uppercase tracking-wider">{skill.cat}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-900 rounded-full text-xs border border-slate-700">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <footer className="max-w-4xl mx-auto text-center py-12 border-t border-slate-800">
        <p className="text-slate-500 mb-4 italic">Available for Part-time / Contract SDE roles in Sydney</p>
        <a href="mailto:imvaibhav777@gmail.com" 
           className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform hover:scale-105">
          Get In Touch
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;