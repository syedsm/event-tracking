FROM ghcr.io/puppeteer/puppeteer:21.3.8

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /app

COPY package.json package-lock.json ./

# Fix permissions for the current directory so npm can write
RUN chmod -R 755 /app && chown -R pptruser:pptruser /app

USER pptruser

RUN npm install

COPY --chown=pptruser:pptruser . .

CMD ["node", "index.js"]
