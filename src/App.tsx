import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import RequireAuth from "./hoc/requireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import Quizzes from "./pages/Quizzes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected routes with DashboardLayout */}
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
    </Router>
  );
};

export default App;
