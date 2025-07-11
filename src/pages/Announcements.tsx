import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Announcement as AnnouncementIcon } from "@mui/icons-material";
import { fetchAnnouncements } from "../features/announcements/api";
import type { Announcement } from "../features/announcements/api";
import SharedCard from "../components/SharedCard";

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
        console.log(err);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {announcements.map((a) => (
            <SharedCard
              key={a._id}
              type="announcement"
              title={a.title}
              content={a.content}
              author={a.author}
              role={a.role}
              createdAt={a.createdAt}
              onClick={() => {
                // Handle announcement click if needed
                console.log("Announcement clicked:", a.title);
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Announcements;
