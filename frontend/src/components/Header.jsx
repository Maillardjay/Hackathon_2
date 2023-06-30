import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="flex flex-wrap min-[320px]:flex-col min-[635px]:flex-row items-center justify-between m-10 p-2 underline-offset-8 ">
          <Link to="/">
            <img
              src={logo}
              className="w-40 mr-3 pt-3 pb-3 max-[435px]:w-15
            "
              alt="Emmaus connect logo"
            />
          </Link>
          <div>
            <ul className="flex flex-row text-center font-medium p-2 mt-2 rounded bg-gray-50 ">
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose font-bold underline underline-offset-8 decoration-2"
                      : ""
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose">
                <NavLink
                  to="/estimation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose font-bold underline underline-offset-8 decoration-2"
                      : ""
                  }
                >
                  Estimer un téléphone
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose">
                <NavLink
                  to="/stock"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose font-bold underline underline-offset-8 decoration-2"
                      : ""
                  }
                >
                  Consulter le stock
                </NavLink>
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose">
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose font-bold underline underline-offset-8 decoration-2"
                      : ""
                  }
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="h-0.5 bg-cyan-400 border-0 mx-10" />
    </div>
  );
}

export default Header;
