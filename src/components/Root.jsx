import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-manrope">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
