import React from "react";

function Estimation() {
  return (
    <div className="flex-1">
      <h1 className="text-center pr-5 pt-5 text-2xl font-bold">
        Estimation du téléphone
      </h1>

      <form className="ml-10">
        <label
          htmlFor="Marque de l'appareil"
          className="flex flex-col font-semibold w-80"
        >
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Système d'exploitation de l'appareil</option>
            <option>IOS</option>
            <option>Android</option>
          </select>
        </label>
        <label
          htmlFor="Marque de l'appareil"
          className="flex flex-col font-semibold w-80"
        >
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Marque de l'appareil</option>
            <option>Apple</option>
            <option>Samsung</option>
          </select>
        </label>
        <label htmlFor="Modèle" className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Modèle</option>
            <option>14 Pro</option>
            <option>S22</option>
          </select>
        </label>
        <label htmlFor="Stockage" className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Stockage</option>
            <option>128Go</option>
            <option>512Go</option>
          </select>
        </label>
        <label htmlFor="RAM" className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">RAM</option>
            <option>32Go</option>
            <option>128Go</option>
          </select>
        </label>
        <label htmlFor="Screen" className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Taille de l'écran</option>
            <option>5.8"</option>
            <option>6.1"</option>
          </select>
        </label>
        <label htmlFor="Grading" className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10 text-black">
            <option value="">Etat de l'appareil</option>
            <option>"Bon Etat"</option>
            <option>"Comme Neuf"</option>
          </select>
        </label>
        <label htmlFor="IMEI" className="flex flex-col font-semibold w-80">
          <input
            required
            type="text"
            className="border border-black h-7 mt-10"
            placeholder="Renseigner l'IMEI de l'appareil"
            name="name"
            value=""
          />
        </label>

        <div className="Accesories">
          Accessoires fournis :
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Ecouteurs"
            />
            Ecouteurs
          </div>
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Chargeur"
            />
            Chargeur
          </div>
        </div>

        <div className="flex justify-end pb-5 pr-10 gap-10">
          <button type="submit" className="bg-black text-white py-2 px-4">
            Ajouter
          </button>
        </div>
      </form>
      <div className="flex justify-end pb-5 pr-10 gap-10">
        <button
          type="button"
          className="bg-black text-white py-2 px-4"
          name="name"
        >
          Modifier
        </button>

        <button
          type="button"
          className="bg-black text-white py-2 px-4"
          name="name"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default Estimation;
