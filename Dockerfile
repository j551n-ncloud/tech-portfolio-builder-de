
# Use Node 18 as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 8080 (matching vite.config.ts port)
EXPOSE 8080

# Start the application in development mode
CMD ["npm", "run", "dev"]
