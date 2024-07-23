# Just Another Text Editor (JATE)

## Description

**Just Another Text Editor (JATE)** is a text editor that runs in the browser as a Progressive Web Application (PWA). This application allows users to create notes or code snippets with or without an internet connection, making it ideal for developers on the go. The editor features a clean, polished user interface that provides a seamless user experience across all devices.

## Features

- **Offline Functionality:** Edit and save your text or code snippets without an internet connection.
- **Installable:** Install this application on your desktop or mobile device for quick and easy access.
- **IndexedDB Integration:** Uses IndexedDB for data persistence, ensuring that your data is saved across sessions.
- **Progressive Web Application:** Fully functional as a PWA, including a manifest file and service worker for asset caching.

## Technologies Used

- HTML
- CSS
- JavaScript
- Webpack
- Babel
- Workbox for service workers
- IndexedDB
- Node.js
- Express.js

## Installation

To run **JATE** locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Install the necessary node modules with `npm install`.
4. Build the project with `npm run build`.
5. Start the server with `npm start`.
6. Open your browser and go to `http://localhost:8080`.

## Usage

Once installed, the application can be accessed via a web browser or its desktop icon (if installed). Users can enter any text or code into the editor. The application automatically saves the entries to IndexedDB when the user clicks outside the text area or changes focus.

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your updates.



