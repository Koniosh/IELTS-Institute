import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape bg-gradient-to-r from-primary to-secondary w-72 h-72 top-10 -left-20"></div>
        <div className="floating-shape bg-gradient-to-r from-secondary to-accent w-96 h-96 bottom-10 right-10 animation-delay-2000"></div>
        <div className="floating-shape bg-gradient-to-r from-accent to-primary w-64 h-64 top-1/2 right-1/3 animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Master Your
              <span className="block gradient-text">IELTS Journey</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your English skills with AI-powered learning, expert
              mentorship, and proven strategies that guarantee success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary group">
                <span className="flex items-center">
                  Start Free Trial
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn-secondary">
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "15K+", label: "Success Stories" },
                { number: "98%", label: "Pass Rate" },
                { number: "4.9★", label: "Student Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Excellent</p>
                    <p className="text-sm text-gray-600">15,000+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
