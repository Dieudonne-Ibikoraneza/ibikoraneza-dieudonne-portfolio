import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Developer Portfolio. Built with
              React, Tailwind CSS & Three.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
