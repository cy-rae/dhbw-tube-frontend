# DHBW Tube Frontend (dhbw-tube-frontend)

This project realizes the frontend for the DHBW Tube Application.

## Overview
The DHBW Tube Frontend is a Quasar Framework-based application that serves as the user interface for the DHBW Tube platform. This frontend allows users to upload, search, and view videos. It interacts with various backend microservices to provide a seamless video streaming experience.

## Features
- **Video Upload**: Users can upload videos to the platform.
- **Video Search**: Users can search for videos based on various criteria.
- **Video Streaming**: Users can stream videos directly from the platform.

## Setup
### Prerequisites
Node.js
Yarn or npm

### Installation
Install the dependencies:
```bash
yarn
# or
npm install
```

### Development
To start the app in development mode with hot-code reloading and error reporting:
```bash
quasar dev
```

### Linting
To lint the files:
```bash
yarn lint
# or
npm run lint
```

### Formatting
To format the files:
```bash
yarn format
# or
npm run format
```

### Production Build
To build the app for production:
```bash
quasar build
```

## Docker Deployment
The application can be deployed using Docker. The provided Dockerfile uses Nginx to serve the production build.

1. Build the Docker image:
    ```bash
    docker build -t dhbw-tube-frontend .
    ```
2. Run the Docker container:
    ```bash
    docker run -p 80:80 dhbw-tube-frontend
    ```

## Configuration
The application can be customized by modifying the `quasar.config.js` file. For more details, see [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Services
The frontend interacts with several backend services, which are provided using Vue's dependency injection system:

- **UploadVideoApi**: Handles video uploads.
- **GetVideoMetadataApi**: Retrieves video metadata.
- **SearchVideosApi**: Searches for videos.
- **DateService**: Provides date-related utilities.
- **RuleService**: Provides validation rules.
