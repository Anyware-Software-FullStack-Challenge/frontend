import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Announcement as AnnouncementIcon } from "@mui/icons-material";
import { fetchAnnouncements } from "../features/announcements/api";
import type { Announcement } from "../features/announcements/api";

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnnouncements()
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load announcements.");
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8 mt-2">
        <div className="flex items-center gap-3 mb-4">
          <AnnouncementIcon className="text-blue-600" fontSize="large" />
          <h1 className="text-3xl font-bold text-zinc-900">Announcements</h1>
        </div>
        <p className="text-zinc-600">
          Stay updated with the latest announcements and news
        </p>
      </div>

      {loading && (
        <div className="text-center text-zinc-500 py-8">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 py-8">{error}</div>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((a) => (
            <motion.div
              key={a._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 border border-zinc-100"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {a.title}
                </h3>
                <span
                  className={`text-xs text-zinc-500 px-2 py-1 rounded-full bg-blue-100 text-blue-700`}
                >
                  {a.role.charAt(0).toUpperCase() + a.role.slice(1)}
                </span>
              </div>
              <p className="text-zinc-600 text-sm mb-4">{a.content}</p>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>By {a.author}</span>
                <span>{new Date(a.createdAt).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Announcements;
