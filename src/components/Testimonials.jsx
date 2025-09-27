import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      score: "8.5",
      country: "China",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "The AI speaking coach transformed my pronunciation! I went from 6.5 to 8.5 in just 8 weeks. The real-time feedback was a game-changer.",
      achievement: "Got into Cambridge University",
    },
    {
      name: "Ahmed Hassan",
      score: "8.0",
      country: "Egypt",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The mock tests were incredibly accurate. My actual score matched the AI predictions perfectly. Best investment for IELTS prep!",
      achievement: "Secured job at Google",
    },
    {
      name: "Emily Rodriguez",
      score: "9.0",
      country: "Spain",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Expert tutors and structured learning path made achieving band 9 possible. The personalized study plan was exactly what I needed.",
      achievement: "Scholarship at Harvard",
    },
    {
      name: "Michael Park",
      score: "8.0",
      country: "South Korea",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "The writing feedback system helped me understand exactly where I was going wrong. My writing score improved from 5.5 to 8.0!",
      achievement: "PhD at Oxford University",
    },
    {
      name: "Priya Sharma",
      score: "8.5",
      country: "India",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      text: "IELTSPro's comprehensive approach covered all aspects. The daily practice routine they suggested was perfect for my schedule.",
      achievement: "Medical residency in Canada",
    },
    {
      name: "Carlos Martinez",
      score: "7.5",
      country: "Mexico",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      text: "From struggling with 5.5 to achieving 7.5 - the structured learning path and AI-powered feedback made all the difference.",
      achievement: "MBA at London Business School",
    },
  ];

  // Function to go to next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Handle dot hover - start auto-scrolling
  const handleDotHover = () => {
    setIsPaused(false);
  };

  // Handle testimonial area hover - pause auto-scrolling
  const handleTestimonialHover = (hovering) => {
    setIsPaused(hovering);
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-display mb-6">
            Real Success
            <span className="block gradient-text">Real Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who achieved their dreams with IELTSPro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => handleTestimonialHover(true)}
            onMouseLeave={() => handleTestimonialHover(false)}
          >
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-32 h-32 rounded-full object-cover shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center">
                        {testimonial.score}
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-lg text-gray-700 mb-6 italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <div>
                          <h4 className="font-semibold text-dark">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.country}
                          </p>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                        <div className="text-center sm:text-left">
                          <p className="text-sm font-medium text-primary">
                            {testimonial.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator with hover area */}
          <div
            className="flex justify-center mt-8 space-x-2 py-4"
            onMouseEnter={handleDotHover}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 h-3 bg-primary rounded-full"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary group" onClick={nextTestimonial}>
            <span>Read More Success Stories</span>
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Click to see the next story or hover over the dots to auto-scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
