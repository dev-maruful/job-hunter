import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-manrope">
      <Header />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;
