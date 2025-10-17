import { useState } from "react";
import { Code2, Database, Server, Cloud, Palette, Cpu } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiCplusplus,
  SiSolidity,
  SiMysql,
  SiLinux,
  SiFigma,
  SiCanva,
  SiArduino,
  SiBootstrap,
  SiPhp,
  SiDjango,
} from "@icons-pack/react-simple-icons";

const JavaIcon = ({ size = 50, className = "" }) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    width={size}
    height={size}
    className={className}
    alt="Java"
  />
);
const ConvexIcon = ({ size = 50, className = "" }) => (
  <img
    src="https://avatars.githubusercontent.com/u/81530787?s=200&v=4"
    width={size}
    height={size}
    className={className}
    alt="Convex DB"
  />
);

const techCategories = {
  Frontend: [
    {
      name: "JavaScript",
      description: "Core programming language for web development",
      icon: SiJavascript,
    },
    {
      name: "React.js",
      description: "Building interactive UIs with React",
      icon: SiReact,
    },
    {
      name: "React Native",
      description: "Cross-platform mobile app development",
      icon: SiReact,
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      icon: SiTypescript,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: SiTailwindcss,
    },
    {
      name: "Bootstrap",
      description: "Responsive front-end framework",
      icon: SiBootstrap,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side",
      icon: SiNodedotjs,
    },
    {
      name: "Express",
      description: "Fast web framework for Node.js",
      icon: SiExpress,
    },
    {
      name: "Python",
      description: "Versatile programming language",
      icon: SiPython,
    },
    {
      name: "Java",
      description: "Enterprise-level application development",
      icon: JavaIcon,
    },
    {
      name: "PHP",
      description: "Server-side scripting language",
      icon: SiPhp,
    },
    {
      name: "Django",
      description: "High-level Python web framework",
      icon: SiDjango,
    },
    {
      name: "C/C++",
      description: "System programming and performance-critical applications",
      icon: SiCplusplus,
    },
    {
      name: "Solidity",
      description: "Smart contract development for Ethereum",
      icon: SiSolidity,
    },
    {
      name: "REST APIs",
      description: "RESTful API design and development",
      icon: SiExpress,
    },
  ],
  Database: [
    {
      name: "PostgreSQL",
      description: "Powerful relational database",
      icon: SiPostgresql,
    },
    {
      name: "MySQL",
      description: "Popular open-source relational database",
      icon: SiMysql,
    },
    {
      name: "MongoDB",
      description: "NoSQL document database",
      icon: SiMongodb,
    },
    {
      name: "Convex DB",
      description: "Reactive backend-as-a-service platform",
      icon: ConvexIcon,
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js",
      icon: SiPrisma,
    },
  ],
  DevOps: [
    {
      name: "Docker",
      description: "Container platform for deployment",
      icon: SiDocker,
    },
    {
      name: "Linux",
      description: "Unix-like operating system administration",
      icon: SiLinux,
    },
    {
      name: "Git",
      description: "Version control system",
      icon: SiGit,
    },
    {
      name: "GitHub",
      description: "Code hosting and collaboration platform",
      icon: SiGit,
    },
    {
      name: "CI/CD",
      description: "Continuous integration and deployment",
      icon: SiGithubactions,
    },
  ],
  Design: [
    {
      name: "Figma",
      description: "Collaborative interface design tool",
      icon: SiFigma,
    },
    {
      name: "Canva",
      description: "Graphic design and presentation platform",
      icon: SiCanva,
    },
  ],
  Others: [
    {
      name: "Arduino",
      description: "Open-source electronics platform",
      icon: SiArduino,
    },
    {
      name: "Robotics",
      description: "Robot design, construction, and programming",
      icon: Cpu,
    },
    {
      name: "Cyber Security",
      description: "Protecting systems and networks from digital attacks",
      icon: SiLinux,
    },
    {
      name: "AI/ML",
      description: "Artificial Intelligence and Machine Learning",
      icon: Cpu,
    },
  ],
};

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Design: Palette,
  Others: Cpu,
};

export const TechStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof techCategories>("Frontend");
  return (
    <section id="tech-stack" className="py-20 px-6 mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that
            power my development journey. From frontend to backend, I leverage
            these tools to build scalable, efficient, and user-friendly
            applications
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-right"
        >
          {(
            Object.keys(techCategories) as Array<keyof typeof techCategories>
          ).map((category, index) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-primary text-background border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Tech items grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories[activeCategory].map((tech, index) => (
            <div
              key={tech.name}
              className="p-8 bg-transparent group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              data-aos-mirror="true"
            >
              <div className="hover:scale-110 transition-all duration-300 flex items-center justify-center flex-col text-center h-full">
                {<tech.icon size={50} className="mb-4 text-primary" />}

                <h3 className="text-xl font-semibold mb-3 text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
