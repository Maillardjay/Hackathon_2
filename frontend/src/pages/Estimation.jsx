import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";
import Scene from "../Scene";

function Estimation() {
  const phoneModel = {
    IMEI: "",
    is_loader_included: "",
    is_cable_included: "",
    model_id: "",
    network_id: "",
    RAM_id: "",
    storage_id: "",
    screen_size_id: "",
    state_id: "",
  };

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [screensizes, setScreensizes] = useState([]);
  const [states, setStates] = useState([]);
  const [oss, setOss] = useState([]);
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState({
    brand_id: "",
  });
  const [phone, setPhone] = useState(phoneModel);
  const [isChargerIncluded, setIsChargerIncluded] = useState(false);
  const [isCableIncluded, setIsCableIncluded] = useState(false);

  const handleBrand = (name, value) => {
    setBrand({ ...brand, [name]: value });
  };
  const handlePhone = (name, value) => {
    setPhone({ ...phone, [name]: value });
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "Chargeur") {
      setIsChargerIncluded(checked);
      setPhone({ ...phone, is_loader_included: checked ? "1" : "0" });
    } else if (name === "Cable") {
      setIsCableIncluded(checked);
      setPhone({ ...phone, is_cable_included: checked ? "1" : "0" });
    }
  };

  const isSalable = () => {
    return phone.RAM_id >= 5 && phone.storage_id >= 1 && phone.state_id !== 1;
  };

  const estimatePrice = () => {
    if (!isSalable()) {
      setPrice(0);
      return;
    }

    let valRam = 0;
    let valStorage = 0;
    let ponderation = 0;

    if (phone.RAM_id === 5) {
      valRam = 90;
    } else if (phone.RAM_id === 6) {
      valRam = 110;
    } else if (phone.RAM_id === 7) {
      valRam = 140;
    } else if (phone.RAM_id === 8) {
      valRam = 200;
    } else {
      valRam = 250;
    }

    if (phone.storage_id === 1) {
      valStorage = 31;
    } else if (phone.storage_id === 2) {
      valStorage = 45;
    } else if (phone.storage_id === 3) {
      valStorage = 66;
    } else if (phone.storage_id === 4) {
      valStorage = 80;
    } else if (phone.storage_id === 5) {
      valStorage = 100;
    } else if (phone.storage_id === 6) {
      valStorage = 120;
    } else {
      valStorage = 150;
    }

    if (phone.state_id === 2) {
      ponderation = 0.5;
    } else if (phone.state_id === 3) {
      ponderation = 0.9;
    } else if (phone.state_id === 4) {
      ponderation = 0.95;
    } else if (phone.state_id === 5) {
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

  const addPhone = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/phone`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...phone, price }),
    });
  };

  const notify = () => toast("Le téléphone a bien été enregistré !");

  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex flex-col justify-center text-text_color h-full drop shadow-xl m-8 rounded-lg shadow-grey w-5/12">
        <h1 className="flex rounded-md content-center pr-5 pt-10 pl-2 text-2xl font-bold m-8">
          Enregistrement de l'appareil
        </h1>

        <form
          onSubmit={addPhone}
          className="flex flex-col justify-center mr-10 ml-10"
        >
          <label htmlFor="Brand" className="flex flex-col ">
            {" "}
            Quelle est la marque de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 font-medium"
              required
              name="brand_id"
              type="text"
              onChange={(event) =>
                handleBrand(event.target.name, +event.target.value)
              }
            >
              <option className="opacity-50">Marque</option>
              {brands.map((bra) => (
                <option key={bra.id} value={bra.id}>
                  {bra.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-medium">
            Quel est le modèle de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-text_color "
              required
              name="model_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">Modèle</option>
              {models
                .filter((mod) => +mod.brands_id === +brand.brand_id)
                .map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-medium">
            Quel est le système d'exploitation de votre appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-text_color  "
              required
              name="os_id"
              type="text"
            >
              <option value="">Os</option>
              {oss.map((os) => (
                <option key={os.id} value={os.id}>
                  {os.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Model" className="flex flex-col font-medium">
            Quel est le réseau de votre appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-text_color  "
              required
              name="network_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">Réseau</option>
              {networks.map((network) => (
                <option key={network.id} value={network.id}>
                  {network.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Storage" className="flex flex-col font-medium">
            Quelle est sa capacité de stockage ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              required
              name="storage_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">Stockage</option>
              {storages.map((storage) => (
                <option key={storage.id} value={storage.id}>
                  {storage.capacity}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="RAM" className="flex flex-col font-medium">
            De combien de Ram dispose t-il ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-black "
              required
              name="RAM_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option value="">RAM</option>
              {rams.map((ram) => (
                <option key={ram.id} value={ram.id}>
                  {ram.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="Screen" className="flex flex-col font-medium">
            Quelle est la taille de l'écran ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-text_color "
              required
              name="screen_size_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              <option>Taille de l'écran</option>
              {screensizes.map((screensize) => (
                <option key={screensize.id} value={screensize.id}>
                  {screensize.size}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="State" className="flex flex-col font-medium">
            Quel est l'état de l'appareil ?
            <select
              className="border rounded-md border-black h-10 mt-5 mb-5 pl-2 text-text_color  "
              required
              name="state_id"
              type="text"
              onChange={(event) =>
                handlePhone(event.target.name, +event.target.value)
              }
            >
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="IMEI" className="flex flex-col font-medium">
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
                handlePhone(event.target.name, +event.target.value)
              }
            />
          </label>

          <div className="pt-10">
            <p className="pb-5 font-medium">Accessoires fournis :</p>
            <div className="topping flex">
              <input
                type="checkbox"
                name="Chargeur"
                value={isChargerIncluded}
                onChange={handleCheckboxChange}
              />
              <p className="pl-2">Chargeur</p>
            </div>
            <div className="topping flex">
              <input
                type="checkbox"
                name="Cable"
                value={isCableIncluded}
                onChange={handleCheckboxChange}
              />
              <p className="pl-2">Cable</p>
            </div>
          </div>
          <div className="flex justify-end pt-5 pb-5">
            <div className="items-end rounded-full pt-2 text-text_color font-semibold">
              Prix estimé : {price} €
            </div>
          </div>
          <div className="flex justify-end items-end pt-5 pb-5">
            <button
              onClick={notify}
              type="submit"
              className="items-end first-line:items-end rounded-full bg-light_blue py-3 px-6 text-white"
            >
              Enregistrer
            </button>
            <ToastContainer
              position="top-center"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </form>
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
