import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      score: "8.5",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "IELTSPro's AI feedback helped me improve my speaking from 6.5 to 8.5 in just 2 months!",
    },
    {
      name: "Ahmed Hassan",
      score: "8.0",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The mock tests were incredibly accurate. My actual score matched the AI predictions perfectly.",
    },
    {
      name: "Emily Rodriguez",
      score: "9.0",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Expert tutors and structured learning path made achieving band 9 possible for me.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Join thousands who achieved their target scores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary font-bold">
                    Band {testimonial.score}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
