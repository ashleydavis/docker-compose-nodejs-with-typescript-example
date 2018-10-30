# docker-compose-nodejs-example

An example of Nodejs and Mongodb servers built using Docker Compose

Created with the help of this tutorial: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

Good info here as well: https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose

Good example here of loading a database fixture: https://stackoverflow.com/a/33397913/25868

And my previous docker example: https://github.com/ashleydavis/docker-compose-basic-example

## To run the Node.js server on your dev pc:

Clone or download this repo, open a command line, change to the repo directory, then install dependencies:

    > cd web
    > npm install

Then run the server:

    > npm start

Now navigate your browser to http://127.0.0.1:3000/ to view the app.

To view the REST API navigate your browser to http://127.0.0.1:3000/data.

## Running the Docker image in the Vagrant VM

Ensure you have VirtualBox and Vagrant installed.

Bring the VM up:

    > vagrant up

Or run the batch file to record the log to a file:

    > up.bat

This starts an Ubuntu VM, installs Docker and Docker Compose, then automatically runs `docker-compose up` to start the system.

At the end you should be able to browse to http://localhost:3000 on your **dev workstation** and see the web page it produces.

After you reboot the Vagrant VM the system will no longer be running. To restart it, first shell in:

    vagrant ssh

Then change to the shared directory:

    cd /vagrant

Then run Docker Compose:

    sudo docker-compose up -d

The -d parameter starts it detatched from the command line.

To rebuild image (say after changing the code):

    sudo docker-compose up --build -d

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

## Getting it running on Linux

- Create a Linux VM.
- Open/map/allow end points.
- Clone this repo to the VM.
- Run the script linux-provision-vm.sh inside the VM.
- You now have a running microservices system.

Note: This won't get you a production ready system. I'm still trying to figure out how to do that with Kubernetes.

## Resources

https://medium.freecodecamp.org/the-ups-and-downs-of-docker-compose-how-to-run-multi-container-applications-bf7a8e33017e
https://developer.okta.com/blog/2017/10/11/developers-guide-to-docker-part-3

