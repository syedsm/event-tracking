# Use Puppeteer base image (with Chrome preinstalled)
FROM ghcr.io/puppeteer/puppeteer:21.3.8

# Avoid downloading Chromium again
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Create app directory
WORKDIR /app

# Switch to root to avoid permission issues
USER root

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy remaining files
COPY . .

# Give all files to puppeteer user
RUN chown -R pptruser:pptruser /app

# Switch to puppeteer user (safe to run browser)
USER pptruser

# Run your script
CMD ["node", "index.js"]
