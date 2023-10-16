// Importar el módulo de MongoDB
const mongoose = require("mongoose");

// Crear una conexión a la base de datos
const connection = mongoose.connect("mongodb://localhost:27017/my_database");

// Crear la base de datos
const database = mongoose.connection.db;
database.createCollection("articles", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Base de datos creada");
  }
});

// Crear la base de datos
const database = mongoose.connection.db;
database.createCollection("tickets", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Base de datos creada");
  }
});

