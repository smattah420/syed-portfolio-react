import { Code2, Palette, Globe, Database, Cpu, Layout, Terminal } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "Frontend Development", icon: <Code2 />, tags: ["React", "Next.js", "Tailwind"] },
  { name: "Python Development", icon: <Terminal />, tags: ["Django", "Flask", "Automation"] },
  { name: "UI/UX Design", icon: <Palette />, tags: ["Figma", "Design Systems", "Prototyping"] },
  { name: "Backend Development", icon: <Database />, tags: ["Node.js", "Express", "MongoDB"] },
  { name: "State Management", icon: <Cpu />, tags: ["Redux", "Zustand", "Context API"] },
  { name: "Responsive Design", icon: <Layout />, tags: ["Mobile-First", "Grid", "Flexbox"] },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 glass rounded-2xl border-white/5 hover:border-primary/20 hover:bg-secondary/40 transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span key={tag} className="text-xs text-foreground/50 border border-white/10 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}