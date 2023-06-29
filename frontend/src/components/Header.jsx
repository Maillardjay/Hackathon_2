import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="flex flex-wrap min-[320px]:flex-col min-[450px]:flex-row items-center justify-between mr-8 ml-8 ">
          <img
            src={logo}
            className="w-40 mr-3 pt-3 pb-3 max-[435px]:w-15
            "
            alt="Emmaus connect logo"
          />
          <div>
            <ul className="flex flex-row font-medium p-2 mt-2 rounded bg-gray-50">
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose focus:text-rose">
                <Link to="/">Accueil</Link>
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose focus:text-rose">
                <Link to="/estimation">Estimer un téléphone</Link>
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose focus:text-rose">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
