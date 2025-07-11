import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get the intended destination from location state, or default to dashboard
  const from = (location.state as any)?.from?.pathname || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-zinc-100"
      >
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex flex-1 items-center justify-center bg-white p-8"
        >
          <img
            src="/undraw_secure-login_m11a.svg"
            alt="Login Illustration"
            className="w-full max-w-md drop-shadow-xl"
            loading="lazy"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center md:text-left">
            Login to Anywhere
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-zinc-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-black transition bg-zinc-50"
                placeholder="you@email.com"
                autoComplete="email"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-zinc-800 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-black transition bg-zinc-50"
                placeholder="Your password"
                autoComplete="current-password"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-[-8px]">
                email or password is incorrect
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-black text-white font-semibold text-lg shadow hover:bg-zinc-800 transition-colors duration-200 cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
