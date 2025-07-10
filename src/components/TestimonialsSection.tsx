import React from "react";

const testimonials = [
  {
    name: "Sarah Lee",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Anywhere Platform made our team so much more productive and connected! Highly recommended.",
  },
  {
    name: "James Smith",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The quizzes are fun and easy to use. Our students love the interactive experience!",
  },
  {
    name: "Ava Patel",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Announcements keep everyone in sync. Communication has never been easier!",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-zinc-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 shadow"
                loading="lazy"
              />
              <p className="text-zinc-700 italic text-center mb-4">
                “{t.quote}”
              </p>
              <span className="font-semibold text-blue-700 text-lg">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
