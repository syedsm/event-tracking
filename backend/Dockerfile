FROM ghcr.io/puppeteer/puppeteer:21.3.8

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json ./

# Install dependencies as root (default user)
RUN npm install

# Copy rest of the app files
COPY . .

# Switch to pptruser for running your app (security best practice)
USER pptruser

CMD ["node", "index.js"]
