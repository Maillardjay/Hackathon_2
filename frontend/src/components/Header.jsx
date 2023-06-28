import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div>
      <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <img
            src={logo}
            className="w-40 mr-3 pt-3 pb-3"
            alt="Emmaus connect logo"
          />
          <div className="md:block md:w-auto" id="navbar">
            <ul className="flex flex-row font-medium p-2 mt-2 rounded bg-gray-50">
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose focus:text-rose">
                Ajouter un smartphone
              </li>
              <li className="block py-2 pl-3 pr-2 text-text_color rounded hover:text-rose focus:text-rose">
                FAQ
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <hr className="border-t-2 border-dark_blue mr-6 ml-6 " />
      </div>
    </div>
  );
}

export default Header;
