import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/layout/UserLayout";
import Home from "./pages/Home";

import AdminLayout from "./pages/layout/AdminLayout";
import HomeAdmin from "./components/Admin/HomeAdmin";

import "./Index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
