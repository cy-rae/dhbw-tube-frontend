## Step 1: Build the Quasar app in a Node.js environment
#FROM node:20 AS build-stage
#
#WORKDIR /app
#
## Copy package.json and package-lock.json to install dependencies
#COPY package.json yarn.lock ./
#
### Set proxy environment variables for Bosch environment
#ENV http_proxy=http://rb-proxy-de.bosch.com:8080
#ENV https_proxy=http://rb-proxy-de.bosch.com:8080
#
## Install dependencies
#RUN yarn install
#
## Copy all source files
#COPY . .
#
## Build the app for production using Quasar CLI
#RUN quasar build

# Step 2: Use Nginx to serve the built static files
#FROM nginx:alpine AS production-stage
FROM nginx:alpine

# Copy the production build files from the build stage
#COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
COPY /dist/spa /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
