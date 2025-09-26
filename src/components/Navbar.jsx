import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              IELTS<span className="text-secondary">Pro</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-dark hover:text-primary"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-dark hover:text-primary"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-dark hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-dark hover:text-primary"
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 btn-primary">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
