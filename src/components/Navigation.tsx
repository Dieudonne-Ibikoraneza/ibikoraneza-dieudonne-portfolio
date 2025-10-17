import { useState, useEffect } from "react";
import { MenuIcon } from "./ui/MenuIcon";
import { FloatingDock } from "./FloatingDock";
import { XIcon } from "./ui/XIcon";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showFloatingDock, setShowFloatingDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleFloatingDockToggle = () => {
    setShowFloatingDock((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : ""
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-12 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold font-mono hover:text-primary transition-colors"
            >
              {"<"}
              <span className="text-primary">/</span>
              {">"}
            </button>

            <div className="hidden md:flex items-center gap-8">
              {["About", "Tech Stack", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {showFloatingDock ? (
              <XIcon
                className="md:hidden flex text-primary"
                onClick={handleFloatingDockToggle}
              />
            ) : (
              <MenuIcon
                className="md:hidden flex text-primary"
                onClick={handleFloatingDockToggle}
              />
            )}
          </div>
        </div>
      </nav>

      <FloatingDock show={showFloatingDock} />
    </>
  );
};
