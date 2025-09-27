import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold font-display">
              <span className="gradient-text">IELTS</span>
              <span className="text-dark">Pro</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Features", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-dark font-medium hover:text-primary transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="btn-primary group">
              <span>Get Started</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-2xl p-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Features", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-dark hover:text-primary font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary w-full">
                <span>Get Started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
