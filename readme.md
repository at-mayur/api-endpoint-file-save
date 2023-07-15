# API endpoint (simulated server response) that saves the file.
An API endpoint that saves the file and responds with the path of the file and status of the upload process.


## Functionalities
1.  An API endpoint to save file.

    This API endpoint saves the file coming with request.

    Returns response with status of upload process and path of the file.

    > Username and PDF file as form data within request body is mandatory for getting successful response.

    > URL [POST] http://localhost:8000/api/v1/upload-bill



## Getting Started with API

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies for App that are present in package.json file.

### `npm start`

Runs the app in the development mode.
You can send **POST** request to [http://localhost:8000/api/v1/upload-bill](http://localhost:8000/api/v1/upload-bill) with username and file as form data in request body.
