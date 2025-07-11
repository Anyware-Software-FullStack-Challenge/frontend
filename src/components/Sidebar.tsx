import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dashboard as DashboardIcon,
  Announcement as AnnouncementIcon,
  Quiz as QuizIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../features/auth/authSlice";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      title: "Announcements",
      path: "/dashboard/announcements",
      icon: AnnouncementIcon,
    },
    {
      title: "Quizzes",
      path: "/dashboard/quizzes",
      icon: QuizIcon,
    },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:z-auto`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <img
              src="/Logo.svg"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-xl text-zinc-900">Dashboard</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 cursor-pointer rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`
                  }
                  onClick={onClose}
                >
                  <item.icon className="text-xl" />
                  {item.title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-200">
          <div className="text-center text-sm text-zinc-500 mb-4">
            <p>Anywhere Platform</p>
            <p className="text-xs mt-1">v1.0.0</p>
          </div>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="w-full flex items-center cursor-pointer justify-center gap-2 px-4 py-2 rounded-lg border border-red-600 bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-colors duration-200 "
            >
              <LogoutIcon fontSize="small" />
              Logout
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
