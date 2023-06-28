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

const brandControllers = require("./controllers/brandController");

router.get("/brands", brandControllers.browse);
router.get("/brands/:id", brandControllers.read);
router.put("/brands/:id", brandControllers.edit);
router.post("/brands", brandControllers.add);
router.delete("/brands/:id", brandControllers.destroy);

const modelControllers = require("./controllers/modelController");

router.get("/models", modelControllers.browse);
router.get("/models/:id", modelControllers.read);
router.put("/models/:id", modelControllers.edit);
router.post("/models", modelControllers.add);
router.delete("/models/:id", modelControllers.destroy);

module.exports = router;
