const { OEUVRES } = require("../models/oeuvres-models");
const uuid = require("uuid");

let EX_OEUVRES = [
  {
  titre: "La Guernica",
  description: "Une peinture emblématique de Pablo Picasso représentant les horreurs de la guerre civile espagnole.",
  },
];

// Contrôleur pour obtenir tous les oeuvres
const getOeuvres = (req, res, next) => {
  res.json({ oeuvres: OEUVRES });
};

// Contrôleur pour obtenir tous les oeuvres depuis la base de données
const getAllOeuvres = async (req, res, next) => {
  let oeuvres;
  try {
    oeuvres = await Oeuvres.find({});
  } catch (err) {
    return next(new Error("La récupération des oeuvres a échoué."));
  }
  res.json({
    oeuvres: oeuvres.map((oeuvre) => oeuvre.toObject({ getters: true })),
  });
};

// Contrôleur pour obtenir une oeuvre par son ID
const getOeuvreById = async (req, res, next) => {
  const oeuvreId = req.params.id;
  let oeuvre;
  try {
    oeuvre = await Oeuvres.findById(oeuvreId);
  } catch (err) {
    return next(new Error("La récupération de l'oeuvre a échoué."));
  }

  if (!oeuvre) {
    return next(new Error("Oeuvre non trouvée."));
  }
  res.json({ oeuvre: oeuvre.toObject({ getters: true }) });
};

// Contrôleur pour ajouter une oeuvre
const ajouterOeuvre = async (req, res, next) => {
  const { titre, genre, description, dateDeSortie } = req.body;

  const nouvelleOeuvre = new Oeuvres({
    titre,
    description,
  });

  try {
    await nouvelleOeuvre.save();
  } catch (err) {
    return next(new Error("Création de l'oeuvre échouée."));
  }

  res.status(201).json({ oeuvre: nouvelleOeuvre.toObject({ getters: true }) });
};

// Contrôleur pour modifier une oeuvre
const modifierOeuvre = async (req, res, next) => {
  const { titre, genre, description, dateDeSortie } = req.body;
  const oeuvreId = req.params.id;

  let oeuvre;
  try {
    oeuvre = await Oeuvres.findById(oeuvreId);
  } catch (err) {
    return next(new Error("Récupération de Loeuvre échouée."));
  }

  if (!oeuvre) {
    return next(new Error("Oeuvre non trouvée."));
  }

  oeuvre.titre = titre;
  oeuvre.description = description;

  try {
    await oeuvre.save();
  } catch (err) {
    return next(new Error("Modification de Loeuvre échouée."));
  }

  res.status(200).json({ oeuvre: oeuvre.toObject({ getters: true }) });
};

// Contrôleur pour supprimer une oeuvre
const supprimerOeuvre = async (req, res, next) => {
  const oeuvreId = req.params.id;

  let oeuvre;
  try {
    oeuvre = await Oeuvres.findOneAndDelete({ _id: oeuvreId });
  } catch (err) {
    return next(new Error("Suppression de Loeuvre échouée."));
  }

  if (!oeuvre) {
    return next(new Error("Oeuvre non trouvée."));
  }

  res.status(200).json({ message: "Oeuvre supprimée." });
};

module.exports = {
  getOeuvres,
  getAllOeuvres,
  getOeuvreById,
  ajouterOeuvre,
  modifierOeuvre,
  supprimerOeuvre,
};
