# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server files
COPY server/ ./server

# Copy the client files
COPY client/ ./client

# Build the client
RUN cd client && npm install && npm run build

# Expose the port for the server
EXPOSE 3000

# Start the server
CMD [ "npm", "run", "start" ]
