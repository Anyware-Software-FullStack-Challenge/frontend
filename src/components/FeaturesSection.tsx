import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import QuizIcon from "@mui/icons-material/Quiz";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

const features = [
  {
    icon: <CampaignIcon className="text-blue-600 text-4xl mb-3" />,
    title: "Instant Announcements",
    desc: "Share updates with your team or class in real time, keeping everyone in the loop instantly.",
  },
  {
    icon: <QuizIcon className="text-blue-600 text-4xl mb-3" />,
    title: "Interactive Quizzes",
    desc: "Engage users with fun, effective quizzes that make learning enjoyable and measurable.",
  },
  {
    icon: <GroupWorkIcon className="text-blue-600 text-4xl mb-3" />,
    title: "Seamless Collaboration",
    desc: "Work together from anywhere, anytime, with tools designed for easy teamwork and communication.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-zinc-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-zinc-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-zinc-600 text-center text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
