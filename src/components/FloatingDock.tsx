import { useState, useEffect } from "react";
import { Home, Code, Briefcase, Mail } from "lucide-react";

interface FloatingDockProps {
  show: boolean;
}

export const FloatingDock = ({ show }: FloatingDockProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide dock when scrolling down, show when scrolling up, but respect the show prop
      if (!show) {
        setIsVisible(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  useEffect(() => {
    if (show) {
      setIsVisible(true); // When show is true, make sure the dock is visible
    }
  }, [show]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "tech-stack", label: "Tech", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible || show
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative p-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                aria-label={item.label}
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-background px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
