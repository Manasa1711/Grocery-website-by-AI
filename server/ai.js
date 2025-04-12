app.post("/api/estimate", async (req, res) => {
    const { product, category } = req.body;
  
    try {
      const response = await fetch("http://localhost:5001/predict-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, category }),
      });
  
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.error("AI service error:", err);
      res.status(500).send("Failed to get estimated price");
    }
  });
  