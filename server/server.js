const express = require("express");
const cors = require("cors");
const dns = require("node:dns");


require("dotenv").config();

// Force Node.js to use public DNS
dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const resultRoutes = require("./routes/resultRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/results", resultRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Online Examination System Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});