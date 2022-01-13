import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Blog</Link>
      </header>
      <Outlet />
      <footer>
        <p align="center">Footer</p>
      </footer>
    </>
  );
};

export default Layout;
