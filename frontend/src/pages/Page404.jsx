import React from "react";
import { Link } from "react-router-dom";

function page404() {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-3xl text-rose">Page Introuvable</h1>
        <p className="text-center">
          Clique{" "}
          <Link className="text-xl text-blue" to="/">
            ici
          </Link>{" "}
          pour retourner sur la page d'accueil
        </p>
      </div>
      <img
        className="flex h-2/4 w-3/5"
        src="https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80"
        alt="car"
      />
    </div>
  );
}

export default page404;
