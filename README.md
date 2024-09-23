# DHBW Tube: Frontend
The DHBW Tube Frontend is a Quasar Framework-based application that serves as the user interface for the DHBW Tube platform.
This frontend allows users to upload, search, and view videos.
It interacts with the `upload` and `stream` microservices of the DHBW-Tube application to provide a seamless video streaming experience.

<br>

## Features
- **Video Upload**: Users can upload videos to the platform.
- **Video Search**: Users can search for videos based on various criteria.
- **Video Streaming**: Users can stream videos directly from the platform.
- **Internationalization**: The application is available in english and german.

<br>

## Setup
### Prerequisites
You should have `yarn` or `npm` installed.

### Installation
Install the dependencies:
```bash
yarn install
```
```bash
npm install
```

### Development
To start the app in development mode with hot-code reloading and error reporting:
```bash
quasar dev
```

### Production Build
To build the app for production:
```bash
quasar build
```
The production-ready files will be available in the `/dist` folder.

<br>

## Deployment
The application can be deployed on a Kubernetes cluster. A Dockerfile is provided in the root directory which can be used in Kubernetes resource configurations.

The Dockerfile installs a nginx server which hosts the web app. Only the production build files are copied to the nginx server to reduce the image size and improve build times.
Therefore, `quasar build` must be executed before building the Docker image.
The Docker file also exposes port 80 so that the web application can be accessed from outside the container.

A nginx configuration file should be provided by the Kubernetes pod so that outbound REST API requests are redirected to the correct backend services.
The following paths must be redirected to the corresponding backend services:
- `/upload-api/`: Upload microservice
- `/stream-api/`: Stream microservice

You can find the base URL's settings in `/src/boot/axios.ts`.

<br>

## Project Structure
The web app consists of multiple pages:
```
App.vue                       ' The root component of the application. Dependencies are provided here so that child components can inject them.
└── MainLayout.vue            ' Main layout of the application which contains the navigation drawer and wraps to the pages.
    ├── SearchPage.vue        ' The user can search for videos on this page.
    ├── UploadPage.vue        ' The user can upload videos on this page.
    ├── StreamPage.vue        ' The user can stream videos on this page.
    └── ErrorNotFound.vue     ' The user will be redirected to this page if the requested page does not exist.
```

You can find the router configuration in the `/src/router` directory.
The router configuration maps the URL paths to the corresponding pages.

There are more components in the `/src/components` directory which are used in the pages.
The components implement the elements of the UI and are reusable, so that they can be used in other pages as well.

You can find multiple service classes in the `/src/services` directory.
These services implement specific functionality, such as REST API requests, and are used in the UI components.
