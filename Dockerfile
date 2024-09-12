FROM nginx:alpine

# Copy the production build files from the build stage
COPY /dist/spa /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
