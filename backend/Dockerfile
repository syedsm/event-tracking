FROM mcr.microsoft.com/playwright:focal

# Use root for setup
USER root

# Install puppeteer-core (Chromium is already included in base image)
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Use default node user
USER pwuser

# Start your app
CMD ["npm", "start"]
