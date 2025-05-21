# Use official Puppeteer image (Chrome pre-installed)
FROM ghcr.io/puppeteer/puppeteer:21.3.8

# Set env to skip Chromium download (already included)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set working directory
WORKDIR /app

# Copy package files and install
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Start your script
CMD ["node", "index.js"]
