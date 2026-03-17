const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// GET /api/characters - Retrieve all characters with island name
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT characters.*, islands.name AS island_name
       FROM characters
       LEFT JOIN islands ON characters.island_id = islands.id
       ORDER BY characters.id`
    );
    res.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching characters:", error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

// POST /api/characters - Add a new character
router.post("/", async (req, res) => {
  try {
    const { name, bounty, role, image_url, island_id, devil_fruit, description } =
      req.body;

    if (!name) {
      return res.status(400).json({ error: "Character name is required" });
    }

    const result = await pool.query(
      `INSERT INTO characters (name, bounty, role, image_url, island_id, devil_fruit, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, bounty, role, image_url, island_id, devil_fruit, description]
    );

    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.error("Error creating character:", error);
    res.status(500).json({ error: "Failed to create character" });
  }
});

// DELETE /api/characters/:id - Delete a character
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM characters WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.json({ data: { message: "Character deleted successfully" } });
  } catch (error) {
    console.error("Error deleting character:", error);
    res.status(500).json({ error: "Failed to delete character" });
  }
});

module.exports = router;
