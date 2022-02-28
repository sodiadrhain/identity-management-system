# IDENTITY MANAGEMENT SYSTEM

a simple identity management system

## Development Environment

### Setup

Ensure you have the following softwares installed:

- [Node](https://nodejs.org)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Docker](https://docs.docker.com/install/) (if you need to run as container)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

Clone the [repository](https://github.com/sodiadrhain/identity-management-system) and proceed with the instructions below.

### Running App locally

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run dev
```

### Open browser and visit

```
http://localhost:4000
```

## Running as Docker Container

**From within the project directory run the following:**

```
yarn docker:bash
```

to build image and container for app

when this is done, app will basically start on port `4000`.

### Viewing the running ports

Open a new terminal window and run the following command:

```
docker ps
```

You will be given a printout showing your running containers. Part of the printout should contain something like this:

```
.....   0.0.0.0:4000->4000/tcp,     identity_man_sys

```

This tells you that the various machines exist "locally" at 0.0.0.0 and that the exposed web port have been mapped to port 4000.

### Stopping Container

To stop the docker development environment, issue the following command from the project root:

```
yarn docker:down
```

This will stop all the container and related to this project.

### Starting Container

To start the docker development environment another time run:

```
yarn docker:up
```

This will start the container again.

### View the Home Page

To load the homepage of the app, visit the url below in a browser:

    http://0.0.0.0:4000

The app is up and running...

## App Details

### Endpoints

```
Register User - [POST] http://localhost:4000/api/auth/register (Public)

Login User - [POST] http://localhost:4000/api/auth/login (Public)

User fetch profile data - [GET] http://localhost:4000/api/user (Private)

User update profile data - [PUT] http://localhost:4000/api/user/:user_id (Private)

Admin Fetch All Users - [GET] http://localhost:4000/api/admin/users (Private)

Admin Fetch A User - [GET] http://localhost:4000/api/admin/users/:user_id (Private)

Admin Update A User - [PUT] http://localhost:4000/api/admin/users/:user_id (Private)

```

1. If endpoint (Private), pass HEADERS with key: identity-auth-token and value: user_access_token to access it, i.e user must be suthenticated/logged in
2. (Public), it can be accessed by anyone

## Other Information

NAME: ADESOJI AWOBAJO
EMAIL: ADESOJIAWOBAJO@GMAIL.COM
POSITION: BACKEND ENGINEER