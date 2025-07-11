import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const navLinks = [{ title: "Home", path: "/" }];

  return (
    <nav className="w-full bg-zinc-900 shadow-md border-b border-zinc-800/60">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link
          to="/"
          className="flex items-center gap-3 font-extrabold text-2xl tracking-wider text-zinc-100 drop-shadow-sm"
        >
          <img
            src="/Logo.svg"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          Anywhere Platform
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-zinc-100 font-medium hover:text-white transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
          {isAuthenticated ? null : (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-100 font-semibold shadow hover:bg-zinc-700 transition-colors duration-200 hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-100 focus:outline-none"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      {/* Mobile Drawer with framer-motion */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="relative w-72 h-full bg-zinc-900 shadow-lg p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="flex items-center gap-2 font-extrabold text-xl text-zinc-100">
                  <img
                    src="/Logo.svg"
                    alt="Logo"
                    className="h-8 w-8 object-contain"
                  />
                  Anywhere
                </span>
                <button
                  className="text-zinc-100 hover:text-white transition-colors"
                  onClick={() => setDrawerOpen(false)}
                >
                  <CloseIcon fontSize="large" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="text-zinc-100 font-medium hover:text-white text-lg transition-colors duration-200"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                {isAuthenticated ? null : (
                  <Link
                    to="/login"
                    className="mt-4 px-5 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-100 font-semibold shadow hover:bg-zinc-700 transition-colors duration-200 hover:scale-105"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
