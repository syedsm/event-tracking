# Use slim Node.js base image
FROM node:18-slim

# Install system dependencies required for Chrome
RUN apt-get update && apt-get install -y \
  wget \
  ca-certificates \
  fonts-liberation \
  libappindicator3-1 \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdbus-1-3 \
  libxss1 \
  libnss3 \
  libxcomposite1 \
  libxrandr2 \
  libxdamage1 \
  libgbm1 \
  libgtk-3-0 \
  --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# Install Google Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install -y ./google-chrome-stable_current_amd64.deb && \
    rm google-chrome-stable_current_amd64.deb

# Set working directory
WORKDIR /app

# Copy your app files
COPY . .

# Install Node dependencies
RUN npm install

# Start the app
CMD ["npm", "start"]
