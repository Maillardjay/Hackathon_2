import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../Scene";

function Estimation() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [screensizes, setScreensizes] = useState([]);
  const [states, setStates] = useState([]);
  const [oss, setOss] = useState([]);

  const [phone, setPhone] = useState({
    brand: "",
    model: "",
    os: "",
    network: "",
    storage: "",
    ram: "",
    screensize: "",
    state: "",
    IMEI: "",
  });

  const [price, setPrice] = useState(0);

  const handlePhone = (name, value) => {
    setPhone({ ...phone, [name]: value });
  };

  const isSalable = () => {
    return phone.ram >= 6 && phone.storage >= 16 && phone.state !== "DEEE";
  };

  const estimatePrice = () => {
    if (!isSalable()) {
      console.info("non vendable");
      return;
    }

    let valRam = 0;
    let valStorage = 0;
    let ponderation = 0;

    if (phone.ram <= 6) {
      valRam = 90;
    } else if (phone.ram <= 8) {
      valRam = 110;
    } else if (phone.ram <= 12) {
      valRam = 140;
    } else if (phone.ram <= 16) {
      valRam = 200;
    } else {
      valRam = 250;
    }

    if (phone.storage === 16) {
      valStorage = 31;
    } else if (phone.storage <= 32) {
      valStorage = 45;
    } else if (phone.storage <= 64) {
      valStorage = 66;
    } else if (phone.storage <= 128) {
      valStorage = 80;
    } else if (phone.storage <= 256) {
      valStorage = 100;
    } else if (phone.storage <= 512) {
      valStorage = 120;
    } else if (phone.storage <= 1000) {
      valStorage = 150;
    }

    if (phone.state === "Réparable") {
      ponderation = 0.5;
    } else if (phone.state === "Bloqué") {
      ponderation = 0.9;
    } else if (phone.state === "Reconditionnable") {
      ponderation = 0.95;
    } else if (phone.state === "Reconditionné") {
      ponderation = 1;
    }

    setPrice((valRam + valStorage) * ponderation);
  };

  useEffect(() => {
    estimatePrice();
  }, [phone]);

  const getBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
  };

  const getModels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/models`)
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  };

  const getNetworks = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/networks`)
      .then((res) => res.json())
      .then((data) => setNetworks(data))
      .catch((err) => console.error(err));
  };

  const getRam = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/ram`)
      .then((res) => res.json())
      .then((data) => setRams(data))
      .catch((err) => console.error(err));
  };

  const getStorages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/storages`)
      .then((res) => res.json())
      .then((data) => setStorages(data))
      .catch((err) => console.error(err));
  };

  const getScreensizes = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/screensize`)
      .then((res) => res.json())
      .then((data) => setScreensizes(data))
      .catch((err) => console.error(err));
  };

  const getStates = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/states`)
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error(err));
  };

  const getOss = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/os`)
      .then((res) => res.json())
      .then((data) => setOss(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getBrands();
    getModels();
    getNetworks();
    getStorages();
    getRam();
    getScreensizes();
    getStates();
    getOss();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex flex-col justify-center text-text_color h-full drop shadow-xl m-8 rounded-lg shadow-grey w-5/12">
        <h1 className="flex rounded-md content-center pr-5 pt-10 pl-2 text-2xl font-bold m-8">
          Enregistrement de l'appareil
        </h1>

        <form className="flex flex-col justify-center mr-10 ml-10">
          <label htmlFor="Brand" className="flex flex-col font-semibold">
            {" "}
            Quelle est la marque de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="brand"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            >
              <option className="opacity-50">Marque</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-semibold">
            Quel est le modèle de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="model"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            >
              <option value="">Modèle</option>
              {models.map((model) => (
                <option key={model.id} value={model.name}>
                  {model.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-semibold">
            Quel est le système d'exploitation de votre appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="os"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            >
              <option value="">Os</option>
              {oss.map((os) => (
                <option key={os.id} value={os.name}>
                  {os.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-semibold">
            Quel est le réseau de votre appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="network"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            >
              <option value="">Réseau</option>
              {networks.map((network) => (
                <option key={network.id} value={network.name}>
                  {network.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Storage" className="flex flex-col font-semibold">
            Quelle est sa capacité de stockage ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="storage"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">Stockage</option>
              {storages.map((storage) => (
                <option key={storage.id} value={storage.capacity}>
                  {storage.capacity}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="RAM" className="flex flex-col font-semibold">
            De combien de Ram dispose t-il ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="ram"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">RAM</option>
              {rams.map((ram) => (
                <option key={ram.id} value={ram.name}>
                  {ram.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Screen" className="flex flex-col font-semibold">
            Quelle est la taille de l'écran ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="screensize"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option>Taille de l'écran</option>
              {screensizes.map((screensize) => (
                <option key={screensize.id} value={screensize.size}>
                  {screensize.size}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="State" className="flex flex-col font-semibold">
            Quel est l'état de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              name="state"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            >
              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="IMEI" className="flex flex-col font-semibold">
            Quel est le numéro IMEI de votre appareil ?
            <input
              required
              type="text"
              className="border rounded-md border-cyan-700 h-10 mt-5 pl-2"
              placeholder="Renseigner l'IMEI de l'appareil"
              minLength={15}
              maxLength={15}
              name="IMEI"
              value={phone.IMEI}
              onChange={(event) =>
                handlePhone(event.target.name, event.target.value)
              }
            />
          </label>

          <div className="pt-10">
            <p className="pb-5 font-bold">Accessoires fournis :</p>
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
            <div className="topping flex">
              <input
                className=""
                type="checkbox"
                id="topping"
                name="topping"
                value="Cable"
              />
              <p className="pl-2">Cable</p>
            </div>
          </div>
        </form>
        <div className="flex justify-end pt-5 pb-5 pr-10 gap-10">
          <button
            type="button"
            className="items-end ml-10 rounded-full bg-rose py-3 px-6 text-white"
            name="name"
            value={price}
            onClick={(event) => estimatePrice(event.target.value)}
          >
            Estimer
          </button>
        </div>
        {isSalable() && phone.IMEI !== "" && (
          <div className="flex justify-end pt-5 pb-5 pr-10 gap-10">
            <button
              type="button"
              className="items-end ml-10 rounded-full bg-rose py-3 px-6 text-white"
            >
              Ajouter
            </button>
          </div>
        )}
        {!isSalable() && phone.IMEI !== "" && (
          <div className="flex justify-end pt-5 pb-5 pr-10 gap-10">
            <button
              type="button"
              className="items-end ml-10 rounded-full bg-rose py-3 px-6 text-white"
            >
              Recycler
            </button>
          </div>
        )}
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
