import SectionWrapper from "./SectionWrapper";

export default function About() {
  // We use a fallback URL so the site doesn't crash if your photo is missing
  const profilePic = "../src/assets/my-image.png";
  const fallbackPic = "../src/assets/my-image.png";
  return (
    <SectionWrapper id="about" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
          <div className="relative glass rounded-2xl p-4 overflow-hidden aspect-square flex items-center justify-center">
            {/* Background text for visual depth */}
            <div className="text-6xl font-bold text-primary/20 select-none">ATTAH</div>
            <img
              src={profilePic}
              onError={(e) => { e.target.src = fallbackPic; }}
              alt="S M Attah ur Rehman"
              className="absolute inset-0 object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
            <p>
              I'm a Full Stack and Python Developer based in Pakistan. I enjoy building applications that solve real problems through clean code and simple design.
            </p>

            <p>
              My background includes working with React, Tailwind CSS, and Python. I focus on writing maintainable code and improving my workflow by building practical projects.
            </p>

            <p>
              I'm currently working as a Web Developer Intern, where I'm learning how to build professional apps and work in a team environment. My goal is to keep growing as a developer and contribute to projects that make a difference.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 glass rounded-xl">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="p-4 glass rounded-xl">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}