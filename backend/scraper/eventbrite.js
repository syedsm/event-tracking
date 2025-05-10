const puppeteer = require("puppeteer");

async function scrapeEventbrite() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new", // Use 'true' if older Node.js version
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // For most production environments
      timeout: 30000,
    });

    const page = await browser.newPage();

    console.log("Navigating to Eventbrite Sydney events page...");
    await page.goto("https://www.eventbrite.com.au/d/australia--sydney/events/", {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    console.log("Scraping events...");
    const events = await page.evaluate(() => {
      const cards = document.querySelectorAll(".discover-vertical-event-card");

      return Array.from(cards).map(card => {
        const linkElement = card.querySelector("a.event-card-link");
        const titleElement = card.querySelector("a.event-card-link h3");
        const dateElement = card.querySelector("p");
        const imageElement = card.querySelector("img");

        return {
          title: titleElement?.innerText.trim() || "Untitled Event",
          date: dateElement?.innerText.trim() || "Unknown",
          link: linkElement?.href || "#",
          image: imageElement?.src || "#",
        };
      });
    });

    if (!events || events.length === 0) {
      console.warn("⚠️ No events found. The page structure may have changed.");
    } else {
      console.log(`✅ Successfully scraped ${events.length} events.`);
    }

    return events;

  } catch (error) {
    console.error("❌ Scraping failed:", error.message);
    return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = scrapeEventbrite;
