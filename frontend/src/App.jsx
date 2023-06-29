import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/layout/UserLayout";
import Home from "./pages/Home";
import Estimation from "./pages/Estimation";
import FAQbis from "./pages/FAQbis";
import Page404 from "./pages/Page404";
import Stock from "./pages/Stock";

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
          <Route path="/faq" element={<FAQbis />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
