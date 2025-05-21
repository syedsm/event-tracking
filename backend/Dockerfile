FROM ghcr.io/puppeteer/puppeteer:21.3.8

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /app

# Copy package files first for caching layer
COPY package.json package-lock.json ./

# Install dependencies as root (default user)
RUN npm install

# Copy rest of app
COPY . .

# Fix permissions so pptruser can access /app
RUN chown -R pptruser:pptruser /app

# Switch to non-root user for security
USER pptruser

CMD ["npm", "start"]
