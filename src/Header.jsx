import React from "react";
// import logoreact from "./logo.svg";
import { SiReactivex } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <FaReact className="logoreact" />
        <p>Список &ensp; дел</p>
        <SiReactivex className="sireactivex" />
      </div>
    </header>
  );
};

export default Header;
