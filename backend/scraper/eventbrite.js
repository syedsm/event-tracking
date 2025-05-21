const puppeteer = require('puppeteer-core');

async function scrapeEventbrite() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });  const page = await browser.newPage();

  console.log("Navigating to Eventbrite page...");
  await page.goto("https://www.eventbrite.com.au/d/australia--sydney/events/", {
    waitUntil: "domcontentloaded",
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

  console.log("Scraped events:", events);

  if (!events || events.length === 0) {
    console.warn("No events found. Please check the page structure or URL.");
  }

  await browser.close();
  
  return events;
}

module.exports = scrapeEventbrite;
