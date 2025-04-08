# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port and start server
EXPOSE 4000
CMD ["npm", "start"]
