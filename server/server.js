// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/estimate", async (req, res) => {
  try {
    const flaskResponse = await fetch("http://localhost:5000/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await flaskResponse.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to get price estimate" });
  }
});

app.listen(3001, () => {
  console.log("🚀 Node.js server running on http://localhost:3001");
});
