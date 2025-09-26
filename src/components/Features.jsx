import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🎤",
      title: "Speaking Practice",
      description:
        "AI-powered speaking sessions with instant feedback on pronunciation, fluency, and vocabulary.",
      color: "bg-blue-100",
    },
    {
      icon: "📝",
      title: "Mock Tests",
      description:
        "Full-length IELTS practice tests that simulate real exam conditions with detailed analytics.",
      color: "bg-green-100",
    },
    {
      icon: "🤖",
      title: "AI Band Score",
      description:
        "Get instant AI-evaluated band scores with personalized improvement suggestions.",
      color: "bg-purple-100",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Tutors",
      description:
        "Learn from certified IELTS instructors with proven track records of student success.",
      color: "bg-yellow-100",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Why Choose IELTSPro?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with
            expert guidance to ensure your IELTS success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${feature.color} card-hover cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
