const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// TODO: Implement the following endpoints
//
// 1. GET /api/islands
//    - Retrieve all islands from the database
//    - Return: { data: [...islands] }
//
// 2. GET /api/islands/:id/characters
//    - Retrieve a specific island and its associated characters
//    - Return: { data: { island: {...}, characters: [...] } }
//    - If island not found, return 404: { error: "Island not found" }

module.exports = router;
