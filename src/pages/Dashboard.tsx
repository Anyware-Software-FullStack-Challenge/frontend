import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Security as SecurityIcon,
  Announcement as AnnouncementIcon,
  Quiz as QuizIcon,
} from "@mui/icons-material";
import { fetchAnnouncements } from "../features/announcements/api";
import { fetchQuizzes } from "../features/quizzes/api";
import type { Announcement } from "../features/announcements/api";
import type { Quiz } from "../features/quizzes/api";
import { BarChart, PieChart } from "@mui/x-charts";

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchAnnouncements(), fetchQuizzes()])
      .then(([announcementsData, quizzesData]) => {
        setAnnouncements(announcementsData);
        setQuizzes(quizzesData);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dashboard data.");
        setLoading(false);
      });
  }, []);

  // Recent activity: last 2 announcements and last quiz
  const recentAnnouncements = announcements.slice(-2).reverse();
  const recentQuizzes = quizzes.slice(-1).reverse();

  // Only show these two stats
  const stats = [
    {
      title: "Total Announcements",
      value: announcements.length,
      icon: AnnouncementIcon,
      color: "text-blue-600",
    },
    {
      title: "Total Quizzes",
      value: quizzes.length,
      icon: QuizIcon,
      color: "text-green-600",
    },
  ];

  // --- MUI X Charts Data ---
  // Quizzes per course (bar chart)
  const quizzesByCourse: Record<string, number> = {};
  quizzes.forEach((q) => {
    quizzesByCourse[q.course] = (quizzesByCourse[q.course] || 0) + 1;
  });
  const quizBarData = Object.entries(quizzesByCourse).map(
    ([course, count]) => ({ course, count })
  );

  // Announcements per role (pie chart)
  const annByRole: Record<string, number> = {};
  announcements.forEach((a) => {
    annByRole[a.role] = (annByRole[a.role] || 0) + 1;
  });
  const annPieData = Object.entries(annByRole).map(([role, value]) => ({
    id: role,
    value,
    label: role.charAt(0).toUpperCase() + role.slice(1),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      {loading && (
        <div className="text-center text-zinc-500 py-8">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 py-8">{error}</div>}
      {!loading && !error && (
        <>
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-zinc-900 my-2">
              Welcome back!
            </h1>
            <p className="text-zinc-600">
              Here's what's happening with your account today.
            </p>
          </motion.div>

          {/* Stats Grid: Only two cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-lg shadow-md p-6 border border-zinc-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-zinc-900">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Quizzes Bar Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Quizzes by Course
              </h3>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: quizBarData.map((d) => d.course),
                    label: "Course",
                  },
                ]}
                series={[
                  { data: quizBarData.map((d) => d.count), label: "Quizzes" },
                ]}
                height={300}
              />
            </div>
            {/* Announcements Pie Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Announcements by Role
              </h3>
              <PieChart
                series={[
                  {
                    data: annPieData,
                    innerRadius: 40,
                    outerRadius: 100,
                    paddingAngle: 2,
                  },
                ]}
                height={300}
              />
            </div>
          </div>

          {/* User Info and Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Authentication Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6 border border-zinc-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <SecurityIcon className="text-green-600" fontSize="large" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Account Status
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isAuthenticated ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="text-sm text-zinc-600">
                    {isAuthenticated ? "Authenticated" : "Not Authenticated"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <EmailIcon className="text-zinc-400" fontSize="small" />
                  <span className="text-sm text-zinc-600">
                    admin@anywhere.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PersonIcon className="text-zinc-400" fontSize="small" />
                  <span className="text-sm text-zinc-600">Administrator</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 border border-zinc-100"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentAnnouncements.map((a) => (
                  <div key={a._id} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-zinc-600">
                      New announcement: {a.title}
                    </span>
                    <span className="text-zinc-400 ml-auto">
                      {new Date(a.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {recentQuizzes.map((q) => (
                  <div key={q._id} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-zinc-600">
                      Quiz: {q.course} - {q.topic}
                    </span>
                    <span className="text-zinc-400 ml-auto">
                      {new Date(q.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Dashboard;
