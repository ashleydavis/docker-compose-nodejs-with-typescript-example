# docker-compose-nodejs-example-with-typescript

An example of Nodejs and Mongodb servers built using Docker/Docker-Compose with support for TypeScript.

[Based on my previous example](https://github.com/ashleydavis/docker-compose-nodejs-example).

[With some input from my Node.js microservices exampe](https://github.com/ashleydavis/nodejs-microservices-example).

Contains both dev and prod builds:
- Dev build is optimised for fast build time and can watch and reload code modified on the host OS.
- Prod build uses a Docker multi-stage build to compile the TypeScript code and then bundle the resulting JavaScript code.

## To run the Node.js server on your dev pc:

PRE-REQ: You need MongoDB installed to run this directly on your dev PC.

Clone or download this repo, open a command line, change to the repo directory, then install dependencies and build:

    cd web
    npm install
    npm run build

Then run the server:

    npm start

You can also run it using ts-node and nodemon for live reload:

    npm run start:dev

Now navigate your browser to http://127.0.0.1:3000/ to view the app.

To view the REST API navigate your browser to http://127.0.0.1:3000/data.

## Running with Docker-Compose in the Vagrant dev VM

Ensure you have VirtualBox and Vagrant installed.

Bring the VM up:

    vagrant up

This starts an Ubuntu development VM, installs Docker and Docker-Compose.

After the dev VM has started, you can shell in and boot the system using Docker-Compose:

    vagrant ssh

Change to the shared directory:

    cd /vagrant

Run Docker Compose:

    sudo docker-compose up --build

You can also add a -d parameter to start Docker-Compose in dettached mode.

Now navigate your browser to http://127.0.0.1:4000/ to view the app.

You can connect to the MongoDB database on mongodb://127.0.0.1:4100.

To list running containers:

    sudo docker-compose ps

To kill the containers:

    sudo docker-compose kill

## To shell into a docker container

For a particular container run:

    sudo docker exec -it <container-name> bash

For example, the db container:

    sudo docker exec -it db bash

## How to delete all docker containers and images

Warning don't try this at home kids:

    #!/bin/bash
    # Delete all containers
    sudo docker rm $(sudo docker ps -a -q)
    # Delete all images
    sudo docker rmi $(sudo docker images -q)

Source: https://techoverflow.net/2013/10/22/docker-remove-all-images-and-containers/

## View logs from containers

    sudo docker-compose logs

## Resources

https://medium.freecodecamp.org/the-ups-and-downs-of-docker-compose-how-to-run-multi-container-applications-bf7a8e33017e
https://developer.okta.com/blog/2017/10/11/developers-guide-to-docker-part-3

