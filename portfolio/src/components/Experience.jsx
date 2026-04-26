import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2025 - Present",
    desc: "Worked on frontend features for e-commerce platforms using React and Next.js."
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2021 - 2023",
    desc: "Developed client websites with a focus on animations and responsive layouts."
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
        <p className="text-foreground/70 max-w-xl mx-auto">
          Companies I've worked with and projects I've contributed to.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
            <div className="glass p-6 rounded-2xl hover:bg-secondary/40 transition-all group">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full h-fit">{exp.period}</span>
              </div>
              <div className="text-foreground/60 font-medium mb-4">{exp.company}</div>
              <p className="text-foreground/70">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}