import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/layout/UserLayout";
import Home from "./pages/Home";
import Estimation from "./pages/Estimation";
import FAQ from "./pages/FAQ";
import Page404 from "./pages/Page404";

import AdminLayout from "./pages/layout/AdminLayout";
import HomeAdmin from "./components/Admin/HomeAdmin";

import "./Index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<FAQ />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
