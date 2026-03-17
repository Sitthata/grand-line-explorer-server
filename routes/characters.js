const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// TODO: Implement the following endpoints
//
// 1. GET /api/characters
//    - Retrieve all characters with their island name
//    - Hint: Use LEFT JOIN to get island_name
//    - Return: { data: [...characters] }
//
// 2. POST /api/characters
//    - Create a new character
//    - Required body: { name, bounty, role, image_url, island_id, devil_fruit, description }
//    - Return 201: { data: newCharacter }
//    - If name is missing, return 400: { error: "Character name is required" }
//
// 3. DELETE /api/characters/:id
//    - Delete a character by ID
//    - Return: { data: { message: "Character deleted successfully" } }
//    - If character not found, return 404: { error: "Character not found" }

module.exports = router;
