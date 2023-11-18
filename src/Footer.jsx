import React from "react";
import "./index.css";
import { SiReactrouter } from "react-icons/si";

const Footer = ({ length }) => {
  // console.log(length);
  const year = new Date();
  return (
    <footer className="footer">
      <SiReactrouter className="sireactrouter" />
      <p className="totoal-items">
        Всего &ensp; {length}
        {/* {length <= 1 ? "элемента" : "элементов"} */}
      </p>
      <h4 className="year">{year.getFullYear()}</h4>
    </footer>
  );
};

export default Footer;
