# Use Node.js LTS version as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app for production
RUN ng build --prod

# Expose port 80 to the outside world
EXPOSE 80

# Run Angular CLI's development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
