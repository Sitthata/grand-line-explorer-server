const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// GET /api/islands - Retrieve all islands
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM islands ORDER BY id");
    res.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching islands:", error);
    res.status(500).json({ error: "Failed to fetch islands" });
  }
});

// GET /api/islands/:id/characters - Retrieve island with its characters
router.get("/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;

    const islandResult = await pool.query(
      "SELECT * FROM islands WHERE id = $1",
      [id]
    );

    if (islandResult.rows.length === 0) {
      return res.status(404).json({ error: "Island not found" });
    }

    const charactersResult = await pool.query(
      "SELECT * FROM characters WHERE island_id = $1 ORDER BY id",
      [id]
    );

    res.json({
      data: {
        island: islandResult.rows[0],
        characters: charactersResult.rows,
      },
    });
  } catch (error) {
    console.error("Error fetching island characters:", error);
    res.status(500).json({ error: "Failed to fetch island characters" });
  }
});

module.exports = router;
