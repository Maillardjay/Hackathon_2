import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/Header";

function UserLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
export default UserLayout;
