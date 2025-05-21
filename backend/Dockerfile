# Use Puppeteer base image with Chrome already installed
FROM ghcr.io/puppeteer/puppeteer:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Fix permissions (important for npm install to work)
USER root
RUN chown -R pptruser:pptruser /app

# Switch back to pptruser (non-root safe user)
USER pptruser

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Start your app
CMD ["npm", "start"]
