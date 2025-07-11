import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import RequireAuth from "../hoc/requireAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Announcements from "../pages/Announcements";
import Quizzes from "../pages/Quizzes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>

    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route
        index
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="announcements"
        element={
          <RequireAuth>
            <Announcements />
          </RequireAuth>
        }
      />
      <Route
        path="quizzes"
        element={
          <RequireAuth>
            <Quizzes />
          </RequireAuth>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
