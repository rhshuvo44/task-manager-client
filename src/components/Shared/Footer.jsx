import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-16 flex items-center px-4 md:px-10">
      <p className="text-secondary">
        Copyright © <Link to="/" className="text-primary font-bold">Task Manager</Link> All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
