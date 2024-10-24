const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/enviroment/.env" });

const userSchima = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchima);

const productSchima = mongoose.Schema({
    pid:    {
        type: String,
        required: true,
        unique: true
    },
    name:   {
        type: String,
        required: true
    },
    image:  {
        type: String,
    },
    description:    {
        type: String,
    },
    price:    {
        type: Number,
        required: true
    },
});

const Product = mongoose.model('product', productSchima);

const ingredientSchima = mongoose.Schema({
    pid:    {
        type: Number,
        required: true,
        unique: true
    },
    items:   [{
        type: String,
        required: true,
    }],
});

const Ingredient = mongoose.model('ingredient', ingredientSchima);

module.exports = { User, Product, Ingredient };