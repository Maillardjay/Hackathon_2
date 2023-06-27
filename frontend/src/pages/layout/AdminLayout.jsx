import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/Admin/NavBarAdmin";

function AdminLayout() {
  return (
    <div className="max-w-100s">
      <div className="flex h-screen">
        <NavBarAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
