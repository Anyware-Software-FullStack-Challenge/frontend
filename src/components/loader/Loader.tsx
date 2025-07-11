import React from "react";
import { motion } from "framer-motion";

const randomParticles = () =>
  Array.from({ length: 12 }).map((_, i) => {
    const size = Math.random() * 8 + 4;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 3 + Math.random() * 4;
    const delay = Math.random() * 2;
    return (
      <div
        key={i}
        className="absolute rounded-full bg-zinc-400 opacity-30 animate-ping"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center z-[3000] overflow-hidden ">
      <div className="absolute w-full h-full pointer-events-none">
        {randomParticles()}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-col items-center px-10 py-12 "
      >
        <div className="relative w-[180px] h-[140px] mb-8 flex items-center justify-center">
          <img
            src="/books.svg"
            alt="Loading books"
            className="w-full h-full drop-shadow-2xl animate-bounce"
            style={{ transformOrigin: "center" }}
          />
        </div>

        <h2 className="font-extrabold tracking-wider text-slate-800 text-[34px] mb-3 text-center">
          Welcome to Anywhere Platform
        </h2>
        <p className="text-slate-600 opacity-85 font-medium text-lg tracking-wide text-center animate-pulse">
          Loading your experience...
        </p>

        <div className="w-72 h-1.5 bg-blue-200/20 rounded mt-6 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-full bg-zinc-600 animate-pulse" />
        </div>

        <div className="flex gap-2 mt-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-zinc-900 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.16}s`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
