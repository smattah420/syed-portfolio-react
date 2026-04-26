import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "E-commerce Website",
    tech: ["React", "Tailwind", "Node.js"],
    desc: "A jewelry e-commerce platform with real-time inventory management.",
    link: "https://e-commerce-websites-for-gold-shop.vercel.app",
    github: "https://github.com/smattah420/E-Commerce-Websites-for-Gold-Shop.git",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    title: "Web baesd Portfolio",
    tech: ["Next.js", "Three.js", "Framer"],
    desc: "Personal portfolio built with Next.js and Framer Motion.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Task Management App",
    tech: ["TypeScript", "React Query", "Supabase"],
    desc: "Task management tool with drag-and-drop support.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-secondary/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-foreground/70 max-w-xl mx-auto">
          A selection of projects I've built recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden group border-white/5 hover:border-primary/20 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={p.github} className="p-2 glass rounded-full hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href={p.link} className="p-2 glass rounded-full hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}