import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Add other routes here */}
  </Routes>
);

export default AppRoutes;
