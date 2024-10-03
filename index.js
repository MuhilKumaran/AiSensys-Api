const express = require("express");
const app = express();
const PORT = 8001; // You can use any port you prefer

// Simple route

app.get("/minimumCheck", (req, res) => {
  const MINMUM_ORDE_VALUE = 500;
  const { cartData, totalCartValue } = req.query;
  //   const { totalCartValue } = req.body;
  if (totalCartValue >= MINMUM_ORDE_VALUE) {
    return res.status(200).json({
      status: true,
      isMinimumCartAmountReached: true,
      message: "Minimum card amount has been reached",
    });
  }
  return res.status(200).json({
    status: false,
    isMinimumCartAmountReached: false,
    message: "Minimum card amount has not reached",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
