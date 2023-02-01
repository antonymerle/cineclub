var express = require("express");
var router = express.Router();

require("dotenv").config();
const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/discover/movie?api_key=";

router.get("/movies", (req, res) => {
  fetch(url + process.env.API_KEY)
    .then((response) => response.json())
    .then((data) => res.json(data));
});

module.exports = router;
