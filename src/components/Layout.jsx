import React from "react";
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
        <CustomLink to="/">Home</CustomLink>{" "}
        <CustomLink to="/about">About</CustomLink>{" "}
        <CustomLink to="/posts">Blog</CustomLink>{" "}
        <CustomLink to="/posts/new">Create Blog</CustomLink>{" "}
      </header>
      <Outlet />
      <footer>
        <p align="center">Footer</p>
      </footer>
    </>
  );
};

export default Layout;
