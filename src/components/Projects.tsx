import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";

import {
  SiReact,
  SiNodedotjs,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "Blog & NewsLetter",
    techStack: ["Frontend,", "Backend"],
    description:
      "This is a personal blog website created to share insights, tutorials, and experiences related to software development, technology, and personal growth. Built with a clean, responsive design, the blog features categorized posts, a searchable archive, and a user-friendly interface. Whether you're a developer or a tech enthusiast, you'll find valuable and engaging content regularly updated by IBIKORANEZA Dieudonne.",
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760717628/Screenshot_From_2025-10-17_18-10-34_nyzwqa.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760717756/Screenshot_From_2025-10-17_18-15-39_ra02se.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760717954/Screenshot_From_2025-10-17_18-18-57_wjaprf.png",
    ],
    demoLink: "https://ibikoraneza-dieudone-blog.vercel.app/",
    githubLink:
      "https://github.com/Dieudonne-Ibikoraneza/ibikoraneza-dieudone-blog",
  },
  {
    title: "Note Taking Platform",
    techStack: ["Frontend,", "Convex"],
    description:
      "A modern note-taking application built with Next.js and Convex, featuring real-time collaboration, markdown support, and seamless GitHub authentication.",
    tags: ["Next", "Tailwind CSS", "Convex DB"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718095/Screenshot_From_2025-10-17_18-21-14_twt219.png",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718214/Screenshot_From_2025-10-17_18-23-12_xtwbvr.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718249/Screenshot_From_2025-10-17_18-23-51_qfii4d.png",
    ],
    demoLink: "https://noteit-rose.vercel.app",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    techStack: ["Frontend,", "Portfolio"],
    description:
      "Step into the digital world of Dieudonne, the beloved software developer, with this responsive portfolio website. 🌐✨ Explore his inspiring journey, milestones, and life-changing services blending tech and spirituality. Built with modern tools like React and TypeScript, it's a heartfelt tribute to a mentor who transforms lives. 💻🕊️ Crafted with ❤️ by IBIKORANEZA Dieudonne! 🚀",
    tags: ["Next", "Tailwind CSS", "TypeScript", "shadcn/ui", "Three.js"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718486/landing_jupo1w.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718634/navbar_n8w2py.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718683/project_ccizag.png",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Automated Parking Management System",
    techStack: ["Python,", "IoT"],
    description:
      "A smart parking management system integrating license plate recognition, RFID-based payment, and real-time dashboard monitoring. Designed for automated vehicle entry/exit, payment processing, and security alerts.",
    tags: ["Python", "HTML", "Arduino"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718854/01_pacivi.jpg",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1759565471/iwympzuqomft7cpqds4w.jpg",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760718921/03_d65r2j.png",
    ],
    demoLink:
      "https://www.github.com/Dieudonne-Ibikoraneza/parking-management-system",
    githubLink:
      "https://www.github.com/Dieudonne-Ibikoraneza/parking-management-system",
  },
  {
    title: "HooBank - The Next Generation Payment Method",
    techStack: ["Frontend,", "Web Development"],
    description:
      "Everything you need to accept card payments and grow your business anywhere on the planet.",
    tags: ["Vite", "Tailwind CSS", "JavaScript"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719020/Screenshot_From_2025-10-17_18-36-33_cmoabo.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719075/Screenshot_From_2025-10-17_18-37-33_otpgni.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719118/Screenshot_From_2025-10-17_18-38-19_qlq3eu.png",
    ],
    demoLink: "https://hoo-bank-vert.vercel.app/",
    githubLink: "https://www.github.com/Dieudonne-Ibikoraneza/hoo-bank",
  },
  {
    title: "Portfolio",
    techStack: ["Frontend,", "Portfolio"],
    description:
      "3D Inspired portfolio, crafted with gentleness. Step into an immersive digital experience where creativity meets purpose. This portfolio reflects Dieudonne's unique harmony between technology and soul — a space where every interaction feels alive, intentional, and deeply human. Built with modern craftsmanship and a vision for meaningful design, it embodies elegance, innovation, and serenity. Each element flows seamlessly, inviting you to explore the story of a developer who transforms code into connection. 💻🕊️",
    tags: ["Next", "Tailwind CSS", "TypeScript", "shadcn/ui", "Three.js"],
    images: [
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719421/Screenshot_From_2025-10-17_18-42-54_fu4bnc.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719514/Screenshot_From_2025-10-17_18-44-52_fy0rac.png",
      "https://res.cloudinary.com/dv610czy9/image/upload/v1760719638/Screenshot_From_2025-10-17_18-46-13_ze3jhu.png",
    ],
    demoLink: "https://ibikoraneza-dieudonne-portfolio.vercel.app",
    githubLink:
      "https://www.github.com/Dieudonne-Ibikoraneza/ibikoraneza-dieudonne-portfolio",
  },
];

const techIcons = {
  React: SiReact,
  Next: SiReact,
  Vue: SiVuedotjs,
  Vite: SiVite,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  Bootstrap: SiBootstrap,
  "Chakra UI": SiChakraui,
  "shadcn/ui": SiShadcnui,
  "Three.js": SiThreedotjs,

  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  "C++": SiCplusplus,

  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Sanity: SiSanity,
  "Convex DB": SiMongodb,
  "Weather API": SiReact,
  Stripe: SiReact,
  "React Query": SiReactquery,
  "Socket.io": SiSocketdotio,

  Docker: SiDocker,
  Netlify: SiNetlify,
  "Chart.js": SiReact,
  Maven: SiApachemaven,
  Arduino: SiArduino,
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A showcase of my most impactful work, demonstrating expertise in
            full-stack development, user experience design, and innovative
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 cursor-pointer"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video px-6">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-1 py-1 text-xs text-primary font-bold"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {/* Floating Dock for Tech Icons */}
                <div className="mt-8 mb-4 flex justify-center">
                  <FloatingDock
                    items={project.tags.map((tag) => {
                      const IconComponent =
                        techIcons[tag as keyof typeof techIcons];
                      return {
                        title: tag,
                        icon: IconComponent ? (
                          <IconComponent className="h-full w-full" />
                        ) : (
                          <div className="h-full w-full bg-muted rounded-full" />
                        ),
                        href: "",
                      };
                    })}
                    desktopClassName="bg-card/80 backdrop-blur-sm border border-primary/20"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary cursor-can-hover text-primary hover:bg-primary hover:text-background"
                    asChild
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 cursor-can-hover"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col mt-8 group">
          <span className="text-muted-foreground mb-3 text-sm font-medium">
            Explore more on GitHub
          </span>
          <a
            href="https://github.com/Dieudonne-Ibikoraneza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary cursor-can-hover p-3 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/30"
          >
            <Github className="w-6 h-6 text-background" />
          </a>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-6">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <FloatingDock
                        items={selectedProject.tags.map((tag) => {
                          const IconComponent =
                            techIcons[tag as keyof typeof techIcons];
                          return {
                            title: tag,
                            icon: IconComponent ? (
                              <IconComponent className="h-full w-full" />
                            ) : (
                              <div className="h-full w-full bg-muted rounded-full" />
                            ),
                            href: "",
                          };
                        })}
                        desktopClassName="bg-card/80 backdrop-blur-sm border border-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-background"
                      onClick={() =>
                        window.open(selectedProject.demoLink, "_blank")
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() =>
                        window.open(selectedProject.githubLink, "_blank")
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Project Images
                    </h3>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProject.images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <div
                              className="relative aspect-video overflow-hidden rounded-lg border border-border cursor-pointer group"
                              onClick={() => setZoomedImage(img)}
                            >
                              <img
                                src={img}
                                alt={`${selectedProject.title} screenshot ${
                                  idx + 1
                                }`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">
                                  Click to zoom
                                </span>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog
          open={!!zoomedImage}
          onOpenChange={(open) => !open && setZoomedImage(null)}
        >
          <DialogContent className="lg:w-[60vw] sm:w-[80vw] w-[90vw] h-[75vh] max-w-none py-4 flex items-center justify-center mx-auto">
            <DialogTitle className="hidden">{zoomedImage}</DialogTitle>
            {zoomedImage && (
              <img
                src={zoomedImage}
                alt="Zoomed project screenshot"
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
