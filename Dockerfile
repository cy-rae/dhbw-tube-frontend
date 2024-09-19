FROM nginx:stable-alpine3.20-perl

# Copy the production build files from the build stage
COPY /dist/spa /usr/share/nginx/html

# Expose default Nginx server port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
