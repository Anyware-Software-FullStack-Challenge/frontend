import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 ">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-zinc-600 mb-8">
          Have a question or want to get in touch? Fill out the form below and
          we’ll get back to you soon!
        </p>
        <form className="bg-white rounded-2xl shadow-lg p-8 border border-zinc-100 flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-zinc-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-zinc-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-zinc-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-semibold text-lg shadow hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
