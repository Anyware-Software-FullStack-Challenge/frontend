import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 h-screen mt-7 px-8 md:px-12 lg:px-28">
      <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 leading-tight">
          Welcome to <span className="text-blue-700">Anywhere Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-xl">
          Empowering your learning journey with modern tools, instant
          announcements, and interactive quizzes—all in one place.
        </p>
        <Link
          to="/login"
          className="inline-block px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold text-lg shadow hover:bg-blue-800 transition-colors duration-300 mx-auto md:mx-0"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <img
          src="/undraw_learning_qt7d.svg"
          alt="Learning Illustration"
          className="w-full max-w-[320px] h-[320px] sm:max-w-[400px] sm:h-[400px] md:max-w-[480px] md:h-[480px] lg:max-w-[600px] lg:h-[600px] drop-shadow-xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
