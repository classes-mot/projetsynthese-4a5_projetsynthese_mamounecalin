const express = require('express');
const oeuvresRoutes = require('./routes/oeuvres-routes');
const artistesRoutes = require('./routes/artistes-routes');
// Importer le gestionnaire d'erreurs
const errorHandler = require('./handler/error-handler');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/projetsynthese-4a5_projetsynthese_mamounecalin";
//Parse le code entrant pour ajouter une propriété body sur la request
app.use(express.json());
// ce middleware ne rtourne pas de reponse mais va ajoute run header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // header et value * quels domaines peuvent acceder a notre serveur
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  ); //quel header sont autorisés ( pourait etre * pour tout)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); // quelles methodes HTTP sont autorisées
  next();
});

app.use('/api/oeuvres', oeuvresRoutes);

app.use('/api/artistes', artistesRoutes);

app.use((req, res, next) => {
  const error = new Error('Route non trouvée');
  error.code = 404;
  next(error);
});

app.use(errorHandler);

app.listen(5000);
