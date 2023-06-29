import React, { useState, useEffect } from "react";

function Stock() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/phone`)
      .then((res) => res.json())
      .then((data) => setPhones(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="mt-8 mb-2 text-center block text-lg font-semibold text-primary">
        Voici les téléphones actuellement disponibles :
      </h1>
      <div className="flex flex-wrap">
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-8"
          >
            <img
              className="w-full"
              src={phone.phone_image_src}
              alt={phone.phone_image_alt}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {phone.phone_model} | {phone.phone_brand}
              </div>
              <div className="font-bold text-l mb-2">{phone.phone_state}</div>
              <p className="text-text-color text-base">
                Taille de l'écran {phone.phone_size}'' || RAM {phone.phone_ram}
                Go || N°IMEI {phone.phone_IMEI}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-light_blue rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {phone.phone_network}
              </span>
              <span className="inline-block bg-light_blue rounded-full px-3 py-1 text-sm font-semibold textbg-light_blue-700] mr-2 mb-2">
                {phone.phone_os}
              </span>
              <span className="inline-block bg-light_blue rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {phone.phone_storage} Go
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stock;
