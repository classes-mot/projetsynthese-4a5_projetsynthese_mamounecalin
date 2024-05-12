const express = require("express");
const router = express.Router();
const artisteController = require("../controllers/artistes-controllers");

//Les routes pour les artistes
router.get("/", artisteController.getArtistes);
router.get("/:id", artisteController.getArtisteById);
router.post("/", artisteController.ajouterArtiste);
router.patch("/:id", artisteController.modifierArtiste);
router.delete("/:id");

module.exports = router;