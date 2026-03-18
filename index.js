const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const islandRoutes = require("./routes/islands");
const characterRoutes = require("./routes/characters");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(express.json());

// Routes
app.use("/api/islands", islandRoutes);
app.use("/api/characters", characterRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Grand Line Explorer API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
