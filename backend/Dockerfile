FROM ghcr.io/puppeteer/puppeteer:latest

# Set working directory
WORKDIR /app

# Copy only package.json and install deps (for caching)
COPY package*.json ./

# Install only puppeteer-core (chrome is already included in image)
RUN npm install

# Copy your project files
COPY . .

# Start your app (adjust if you use something else)
CMD ["npm", "start"]
