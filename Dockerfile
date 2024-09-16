FROM nginx:alpine

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production build files from the build stage
COPY /dist/spa /usr/share/nginx/html

# Expose default Nginx server port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
