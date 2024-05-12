const express = require("express");
const router = express.Router();
const oeuvresController = require("../controllers/oeuvres-controllers");
const { post } = require("./artistes-routes");

// LEs routes pour les oeuvres
router.get("/", oeuvresController.getOeuvres);
router.get("/", oeuvresController.getAllOeuvres);
router.get("/:id", oeuvresController.getOeuvreById);
router.post("/", oeuvresController.ajouterOeuvre);
router.patch("/:id", oeuvresController.modifierOeuvre);
router.delete("/:id", oeuvresController.supprimerOeuvre);

module.exports = router;