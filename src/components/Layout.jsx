import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Outlet, useMatch } from "react-router-dom";
import { Children } from "react/cjs/react.production.min";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link to={to} {...props} style={{ color: match ? "red" : "blue" }}>
      {children}
    </Link>
  );
};

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NAv>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
      </header>
      <Outlet />
      <footer>
        <p align="center">Footer</p>
      </footer>
    </>
  );
};

export default Layout;
