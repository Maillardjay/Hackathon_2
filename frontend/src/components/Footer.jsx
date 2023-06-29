import React from "react";

function Footer() {
  return (
    <div className="w-full bg-rose min-[320px]:flex-col flex min-[450px]:flex-row items-center justify-between">
      <div className="p-4">
        <p className="text-sm text-gray-500 sm:text-center text-white">
          © 2023 Emmaüs Connect™ All Rights Reserved.
        </p>
      </div>
      <div>
        <ul className="flex sm:flex-row items-center m-3 pl-3 text-sm font-medium text-white">
          <li className="mr-4 hover:underline">About</li>
          <li className="mr-4 hover:underline">Privacy</li>
          <li className="mr-4 hover:underline">Licensing</li>
          <li className="mr-4 hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
