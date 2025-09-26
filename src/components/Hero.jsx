import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-4">
              Achieve Your Dream{" "}
              <span className="text-primary">IELTS Score</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert-led preparation with AI-powered practice tests,
              personalized feedback, and proven strategies to maximize your band
              score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Start Free Trial</button>
              <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                View Courses
              </button>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-gray-600">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8.5</p>
                <p className="text-gray-600">Avg Score</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary opacity-10 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
