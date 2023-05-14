import React from "react";
import {Outlet} from "react-router-dom";
import HospitalDashboard from "./HospitalDashboard";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;