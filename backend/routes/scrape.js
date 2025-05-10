// routes/scrape.js
const express = require("express");
const router = express.Router();
const scrapeEventbrite = require("../scraper/eventbrite");

router.get("/", async (req, res) => {
  try {
    const events = await scrapeEventbrite();
    console.log("Scraped events:", events);
    res.json(events);
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: "Failed to scrape events" });
  }
});

module.exports = router;
