const express = require('express');
const routes = require('./routes');

// Import sequelize connection
const sequelize = require('./config/connection');

// Imported models
const { Product, Category, Tag, ProductTag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  console.log(`\n----- DATABASE SYNCED -----\n`);
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});