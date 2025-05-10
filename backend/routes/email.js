const express = require("express");
const router = express.Router();
const Email = require("../models/Email");

// POST: Save email
router.post("/", async (req, res) => {
  const { email, eventTitle } = req.body;
  if (!email || !eventTitle) return res.status(400).json({ error: "Missing data" });

  const entry = new Email({ email, eventTitle });
  await entry.save();
  res.status(201).json({ message: "Email saved successfully" });
});

module.exports = router;
