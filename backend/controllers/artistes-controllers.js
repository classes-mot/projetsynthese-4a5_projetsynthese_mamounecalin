const { Artistes } = require("../models/artistes-models");
const uuid = require("uuid");

// Données de démonstration
let EX_ARTISTES = [
  {
    nom: 'Leonardo da  PICCO',
    email: 'leonardo@gmail.com',
    motDePasse: 'Jleonaerd'
  }
];

// Obtenir tous les artistes
const getArtistes = (req, res, next) => {
    res.json({ artistes: EX_ARTISTES });
};

// Obtenir un artiste par son ID
const getArtisteById = async (req, res, next) => {
    const artisteId = req.params.id;
    let artiste;
    try {
        artiste = await Artistes.findById(artisteId);
    } catch (err) {
        return next(new Error('La récupération de l\'artiste a échoué.'));
    }

    if (!artiste) {
        return next(new Error('Artiste non trouvé.'));
    }
    res.json({ artiste: artiste.toObject({ getters: true }) });
};

// Ajouter un artiste
const ajouterArtiste = async (req, res, next) => {
    const { nom, email,  motDePasse} = req.body;

    const nouvelArtiste = new Artistes({
        nom,
        email,
        motDePasse
    });

    try {
        await nouvelArtiste.save();
    } catch (err) {
        return next(new Error('Création de l\'artiste échouée.'));
    }

    res.status(201).json({ artiste: nouvelArtiste.toObject({ getters: true }) });
};

// Modifier un artiste
const modifierArtiste = async (req, res, next) => {
    const { nom, email, motDePasse } = req.body;
    const artisteId = req.params.id;

    let artiste;
    try {
        artiste = await Artistes.findById(artisteId);
    } catch (err) {
        return next(new Error('Récupération de l\'artiste échouée.'));
    }

    if (!artiste) {
        return next(new Error('Artiste non trouvé.'));
    }

    artiste.nom = nom;
    artiste.email = email;
    artiste.motDePasse =  motDePasse;

    try {
        await artiste.save();
    } catch (err) {
        return next(new Error('Modification de l\'artiste échouée.'));
    }

    res.status(200).json({ artiste: artiste.toObject({ getters: true }) });
};

exports.getArtistes = getArtistes;
exports.getArtisteById = getArtisteById;
exports.ajouterArtiste = ajouterArtiste;
exports.modifierArtiste = modifierArtiste;
