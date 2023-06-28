import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../Scene";

function Estimation() {
  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex flex-col justify-center text-text_color h-full drop shadow-xl m-8 rounded-lg shadow-grey w-5/12">
        <h1 className="flex rounded-md content-center pr-5 pt-10 pl-2 text-2xl font-bold m-8">
          Enregistrement de l'appareil
        </h1>

        <form className="flex flex-col justify-center mr-10 ml-10">
          <label
            htmlFor="Marque de l'appareil"
            className="flex flex-col font-semibold"
          >
            {" "}
            Quelle est la marque de l'appareil ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option className="opacity-50">Marque</option>
              <option>Apple</option>
              <option>Samsung</option>
            </select>
          </label>
          <label htmlFor="Modèle" className="flex flex-col font-semibold">
            Quel est le modèle de l'appareil ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option value="">Modèle</option>
              <option>14 Pro</option>
              <option>S22</option>
            </select>
          </label>
          <label htmlFor="Stockage" className="flex flex-col font-semibold">
            Quelle est sa capacité de stockage ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option value="">Stockage</option>
              <option>128Go</option>
              <option>512Go</option>
            </select>
          </label>
          <label htmlFor="RAM" className="flex flex-col font-semibold">
            De combien de Ram dispose t-il ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option value="">RAM</option>
              <option>32Go</option>
              <option>128Go</option>
            </select>
          </label>
          <label htmlFor="Screen" className="flex flex-col font-semibold">
            Quelle est la taille de l'écran ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option>Taille de l'écran</option>
              <option>5.8"</option>
              <option>6.1"</option>
            </select>
          </label>
          <label htmlFor="Grading" className="flex flex-col font-semibold">
            Quel est l'état de l'appareil ?
            <select className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black ">
              <option value="">Etat de l'appareil</option>
              <option>"Bon Etat"</option>
              <option>"Comme Neuf"</option>
            </select>
          </label>
          <label htmlFor="IMEI" className="flex flex-col font-semibold">
            Quel est le numéro IMEI de votre appareil ?
            <input
              required
              type="text"
              className="border rounded-md border-cyan-700 h-10 mt-5 pl-2"
              placeholder="Renseigner l'IMEI de l'appareil"
              name="name"
              value=""
            />
          </label>

          <div className="pt-10">
            <p className="pb-5 font-bold">Accessoires fournit :</p>
            <div className="topping flex">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Ecouteurs"
              />
              <p className="pl-2">Ecouteurs</p>
            </div>
            <div className="topping flex">
              <input
                className=""
                type="checkbox"
                id="topping"
                name="topping"
                value="Chargeur"
              />
              <p className="pl-2">Chargeur</p>
            </div>
          </div>
        </form>
        <div className="flex justify-end pt-5 pb-5 pr-10 gap-10">
          <button
            type="button"
            className="items-end ml-10 rounded-full bg-rose py-3 px-6 text-white"
            name="name"
          >
            Estimation
          </button>
        </div>
      </div>
      <div className="w-5/12">
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
export default Estimation;
