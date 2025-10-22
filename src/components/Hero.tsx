import { Play, Pause } from "lucide-react";
import { Github, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState, useEffect } from "react";
import Aos from "aos";
import ScrollDownIcon from "./scroll-down-icon";

const codeSnippets = {
  Frontend: `// Portfolio Contact Form
const ContactForm = () => {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form)
    });
    
    setStatus(res.ok ? 'sent' : 'error');
  };

  return <form onSubmit={handleSubmit}>...</form>;
};`,

  Backend: `// Express Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  await db.query(
    'INSERT INTO contacts VALUES ($1, $2, $3)',
    [name, email, message]
  );

  await sendEmail({
    to: 'dieudonneibikoraneza13@gmail.com',
    subject: \`Contact from \${name}\`,
    text: message
  });

  res.json({ success: true });
});`,

  Database: `-- Portfolio Database Schema
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  tech_stack TEXT[],
  github_url VARCHAR(500),
  featured BOOLEAN DEFAULT false
);`,

  DevOps: `# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    volumes:
      - data:/var/lib/postgresql/data`,
};

export const Hero = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [displayedCode, setDisplayedCode] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "erasing">(
    "typing"
  );
  const [animatingText, setAnimatingText] = useState<string | null>(null);

  useEffect(() => {
    Aos.refresh();
  }, []);

  useEffect(() => {
    setDisplayedCode("");
    setCurrentIndex(0);
    setIsPlaying(true);
  }, [activeTab]);

  useEffect(() => {
    if (!isPlaying) return;

    const targetCode = codeSnippets[activeTab as keyof typeof codeSnippets];

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (currentIndex < targetCode.length) {
        timeout = setTimeout(() => {
          setDisplayedCode(targetCode.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }, 30);
      } else {
        setPhase("waiting");
      }
    } else if (phase === "erasing") {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedCode(targetCode.slice(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        }, 30);
      } else {
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isPlaying, phase, activeTab]);

  useEffect(() => {
    if (phase !== "waiting") return;

    const timeout = setTimeout(() => {
      setPhase("erasing");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [phase]);

  const startTextAnimation = (textId: string) => {
    if (animatingText) return;
    setAnimatingText(textId);

    setTimeout(() => {
      setAnimatingText(null);
    }, 600);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="false"
          >
            <div>
              <p
                className="text-white text-3xl mb-2 transform transition-all duration-500 hover:scale-[1.01]"
                onMouseEnter={() => startTextAnimation("hello")}
              >
                <span
                  className={
                    animatingText === "hello"
                      ? "animate-bounce-twice inline-block"
                      : ""
                  }
                >
                  Hello I&apos;m
                </span>
              </p>

              <h1
                className="text-5xl md:text-7xl font-bold mb-4 transform transition-all duration-500 hover:scale-[1.01]"
                onMouseEnter={() => startTextAnimation("name")}
              >
                <span
                  className={
                    animatingText === "name"
                      ? "animate-bounce-twice inline-block"
                      : ""
                  }
                >
                  <span className="text-primary">IBIKORANEZA Dieudonne</span>
                </span>
              </h1>

              <p
                className="text-xl text-muted-foreground transform transition-all duration-500 hover:scale-[1.07]"
                onMouseEnter={() => startTextAnimation("role")}
              >
                <span
                  className={
                    animatingText === "role"
                      ? "animate-bounce-twice inline-block"
                      : ""
                  }
                >
                  Software Developer based in Rwanda
                </span>
              </p>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl transform transition-all duration-500 hover:scale-[1.01]"
              onMouseEnter={() => startTextAnimation("description")}
            >
              <span
                className={
                  animatingText === "description"
                    ? "animate-bounce-twice inline-block"
                    : ""
                }
              >
                Innovative Software Developer with 4+ years of experience. A
                tenacious problem-solver with a knack for dissecting complex
                challenges and crafting elegant solutions.
              </span>
            </p>

            {/*
            <div className="flex items-center gap-3">
  
    href="https://github.com/Dieudonne-Ibikoraneza"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-can-hover p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
  >
    <GithubIcon className="w-5 h-5 text-primary" />
  </a>
  
    href="https://linkedin.com/in/dieudonne-ibikoraneza-2b4b9820b"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-can-hover p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
  >
    <LinkedInIcon className="h-5 w-5 text-primary" />
  </a>
  
    href="mailto:dieudonneibikoraneza13@gmail.com"
    className="cursor-can-hover p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
  >
    <MailIcon className="h-5 w-5 text-primary" />
  </a>
</div> */}

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="cursor-can-hover border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1Gqm--sKnGwytdE6X-RxluXN-40YueQ3I/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Dieudonne-Ibikoraneza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-can-hover p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
                >
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/dieudonne-ibikoraneza-2b4b9820b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border cursor-can-hover border-border hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="mailto:dieudonneibikoraneza13@gmail.com"
                  className="cursor-can-hover p-2 rounded-lg border border-border cursor-can-hover hover:border-primary hover:text-primary transition-all duration-300 items-center justify-center flex"
                >
                  <Mail className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Code editor preview */}
          <div
            className="lg:block animate-fade-out group"
            style={{ animationDelay: "0.2s" }}
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(249,115,22,0.6)] hover:shadow-[0_0_200px_rgba(249,115,22,0.8)] transition-all duration-500 animate-subtle-bounce hover:[animation-play-state:paused] relative">
              {/* Hover overlay */}
              <div className="absolute bottom-3 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center z-10 pointer-events-none px-6">
                <p className="text-white text-sm font-small text-start bg-[#54302c] rounded-lg px-6 py-3 backdrop-blur-sm">
                  Click on different tabs to see various aspects of full-stack
                  development!
                </p>
              </div>

              {/* Window controls */}
              <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1" />
                <button
                  onClick={togglePlayPause}
                  className="p-1.5 rounded cursor-can-hover hover:bg-secondary/80 transition-colors"
                  aria-label={isPlaying ? "Pause animation" : "Play animation"}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Play className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              {/* Tabs */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-secondary/30 w-full justify-start rounded-none border-b border-border h-auto p-0">
                  {["Frontend", "Backend", "Database", "DevOps"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="px-4 py-2 cursor-can-hover text-sm font-mono rounded-none data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-t-2 data-[state=active]:border-primary data-[state=inactive]:text-muted-foreground"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Code content */}
                {Object.keys(codeSnippets).map((tab) => (
                  <TabsContent
                    key={tab}
                    value={tab}
                    className="m-0 p-6 font-mono text-sm h-[430px] overflow-auto"
                  >
                    <pre className="text-muted-foreground whitespace-pre-wrap">
                      {displayedCode}
                      <span className="animate-pulse">|</span>
                    </pre>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
        <div
          onClick={() => scrollToSection("tech-stack")}
          className="absolute bottom-10 right-6 lg:translate-x-[50%]"
        >
          <ScrollDownIcon />
        </div>
      </div>
    </section>
  );
};
