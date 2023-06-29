const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const phoneControllers = require("./controllers/phoneControllers");

router.get("/phone", phoneControllers.browse);
router.get("/phone/:id", phoneControllers.read);
router.put("/phone/:id", phoneControllers.edit);
router.post("/phone", phoneControllers.add);
router.delete("/phone/:id", phoneControllers.destroy);

const brandControllers = require("./controllers/brandControllers");

router.get("/brands", brandControllers.browse);
router.get("/brands/:id", brandControllers.read);
router.put("/brands/:id", brandControllers.edit);
router.post("/brands", brandControllers.add);
router.delete("/brands/:id", brandControllers.destroy);

const modelControllers = require("./controllers/modelControllers");

router.get("/models", modelControllers.browse);
router.get("/models/:id", modelControllers.read);
router.put("/models/:id", modelControllers.edit);
router.post("/models", modelControllers.add);
router.delete("/models/:id", modelControllers.destroy);

const networkControllers = require("./controllers/networkControllers");

router.get("/networks", networkControllers.browse);
router.get("/networks/:id", networkControllers.read);
router.put("/networks/:id", networkControllers.edit);
router.post("/networks", networkControllers.add);
router.delete("/networks/:id", networkControllers.destroy);

const osControllers = require("./controllers/osControllers");

router.get("/os", osControllers.browse);
router.get("/os/:id", osControllers.read);
router.put("/os/:id", osControllers.edit);
router.post("/os", osControllers.add);
router.delete("/os/:id", osControllers.destroy);

const storageControllers = require("./controllers/storageControllers");

router.get("/storages", storageControllers.browse);
router.get("/storages/:id", storageControllers.read);
router.put("/storages/:id", storageControllers.edit);
router.post("/storages", storageControllers.add);
router.delete("/storages/:id", storageControllers.destroy);

const ramControllers = require("./controllers/ramControllers");

router.get("/ram", ramControllers.browse);
router.get("/ram/:id", ramControllers.read);
router.put("/ram/:id", ramControllers.edit);
router.post("/ram", ramControllers.add);
router.delete("/ram/:id", ramControllers.destroy);

const stateControllers = require("./controllers/stateControllers");

router.get("/states", stateControllers.browse);
router.get("/states/:id", stateControllers.read);
router.put("/states/:id", stateControllers.edit);
router.post("/states", stateControllers.add);
router.delete("/states/:id", stateControllers.destroy);

const screensizeControllers = require("./controllers/screensizeControllers");

router.get("/screensize", screensizeControllers.browse);
router.get("/screensize/:id", screensizeControllers.read);
router.put("/screensize/:id", screensizeControllers.edit);
router.post("/screensize", screensizeControllers.add);
router.delete("/screensize/:id", screensizeControllers.destroy);

module.exports = router;
