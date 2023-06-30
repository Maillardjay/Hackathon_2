import React, { useState, useEffect } from "react";

function Stock() {
  const [phone, setPhone] = useState({
    phone_state: "",
  });
  const [phones, setPhones] = useState([]);

  const [states, setStates] = useState([]);

  const handleState = (name, value) => {
    setPhone({ ...phone, [name]: value });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/phone`)
      .then((res) => res.json())
      .then((data) => setPhones(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/states`)
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="mt-8 mb-2 text-center block text-xl font-semibold text-text_color">
        Voici les téléphones actuellement disponibles :
      </h1>
      <label htmlFor="Brand" className="flex justify-around ">
        {" "}
        <select
          value={phone.phone_state}
          className=" text-xl flex border rounded-md border-cyan-500 h-8 w-3/12 mt-5 mb-5 pl-2 text-cyan-500 "
          required
          name="phone_state"
          type="text"
          onChange={(event) =>
            handleState(event.target.name, event.target.value)
          }
        >
          <option className="opacity-50" value="">
            Statut du téléphone
          </option>
          {states.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-wrap text-center justify-center text-text_color">
        {phones
          .filter(
            (phoneState) =>
              phone.phone_state === "" ||
              phoneState.phone_state === phone.phone_state
          )
          .map((p) => (
            <div
              key={p.id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-8"
            >
              <div className="flex justify-center">
                <img
                  className="w-1/2"
                  src={p.phone_image_src}
                  alt={p.phone_image_alt}
                />
              </div>
              <div className="flex flex-col justify-end">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {p.phone_model} | {p.phone_brand}
                  </div>
                  <div className="font-bold text-l mb-2">{p.phone_state}</div>
                  <p className="text-text-color text-base">
                    Taille de l'écran {p.phone_size}'' || RAM {p.phone_ram}
                    Go || N°IMEI {p.phone_IMEI}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block border border-cyan-500 rounded-full px-3 py-1 text-sm font-semibold text-cyan-500 mr-2 mb-2">
                    {p.phone_network}
                  </span>
                  <span className="inline-block border border-cyan-500 rounded-full px-3 py-1 text-sm font-semibold text-cyan-500 mr-2 mb-2">
                    {p.phone_os}
                  </span>
                  <span className="inline-block border border-cyan-500 rounded-full px-3 py-1 text-sm font-semibold text-cyan-500 mr-2 mb-2">
                    {p.phone_storage} Go
                  </span>
                  <span className="inline-block border border-cyan-500 rounded-full px-3 py-1 text-sm font-semibold text-cyan-500 mr-2 mb-2">
                    {p.phone_price} €
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Stock;
