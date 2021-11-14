const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const User = require("../models/User");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tarifJ: {
    type: Number,
    required: true,
  },
  tarifS: {
    type: Number,
    required: true,
  },
  tarifM: {
    type: Number,
    required: true,
  },
  caution: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    enum: [
      "Ariana",
      "Béja",
      "Ben Arous",
      "Bizerte",
      " Gabes",
      "Gafsa",
      " Jendouba",
      "Kairouan",
      "Kasserine",
      "Kebili",
      "La Manouba",
      "Le Kef",
      "Mahdia",
      "Médenine",
      "Monastir",
      "Nabeul",
      "Sfax",
      "Sidi Bouzid",
      "Siliana",
      "Sousse",
      "Tataouine",
      "Tozeur",
      "Tunis",
      "Zaghouan",
    ],
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Véhicules",
      "pour la maison et jardin",
      "Emploi et Services",
      "Entreprises",
      "Informatique et Multimedia",
      "Emploi et Services",
      "Entreprises",
      "Habillement et Bien Etre",
      "Loisirs",
      "AUtres",
    ],
    required: true,
  },
 pic: {
      type: String,
      
    },

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

module.exports = mongoose.model("Product", productSchema);