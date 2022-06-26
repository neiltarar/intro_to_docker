# Getting Started with Docker

This is a small cheatsheet for developers getting started with Docker.

---

Install from **[Docker](https://docs.docker.com/get-docker/)**.

>"The Docker platform runs natively on Linux (on x86-64, ARM and many other CPU architectures) and on Windows (x86-64). Docker Inc. builds products that let you build and run containers on Linux, Windows and macOS."
> 
> For more information visit:
> **https://docs.docker.com/**

<br>

### How to check your Docker Version:

Run this command on your terminal:

`$ docker version`

<br>


### Download a specific nodejs image

You can find official images on **[dockerhub](https://hub.docker.com/_/node)**.

`$ docker pull node:16.15.1-alpine3.15`

<br>


### view downloaded/built images
`$ docker images`

<br>

## Build your docker image

<details>

<summary><b>&emsp; Usage:</b></summary>

>$ docker build [OPTIONS] PATH | URL | -

 ---

`--file , -f` Name of the Dockerfile (Default is 'PATH/Dockerfile')
 
`-t, --tag` list Name and optionally a tag in the 'name:tag' format`

</details>

<br/>

### Let's build our image and give a tag name 'dev'

`$ docker build -t cat_dog_vote_server:dev ./`

<br/>

## Run a nodejs container

<details>

<summary><b> Usage: </b></summary>

> $ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

---

`-i` for interactive mode
 
`-t` for terminal
 
`-d` for detach

`--name` Assign a name to the container

`--publish , -p` Publish a container's port(s) to the host

`--rm` Automatically remove the container once it has stopped 

`--volume, -v` Allows you to bind a local directory. For more information check **[here](https://docs.docker.com/storage/bind-mounts/)**

</details>

<br/>

### Let's write our command to run our container for the image:

`$ docker run --rm -it --name cat_dog_vote_server -p 3001:3001 -v $(pwd):/app cat_dog_vote_server:dev`

<br>

## Here are some handy commands:

<details><summary><b>Commands:</b></summary>

### view running container
`docker ps`

<br>

### remote into the running container
`$ docker exec -it cat_dog_vote_server /bin/sh`

<br>

### look at container information
`$ docker inspect cat_dog_vote_server`

<br>


### look at the logs
`$ docker logs cat_dog_vote_server`

<br>


### stop container
`$ docker stop cat_dog_vote_server`

<br>


### start container again
`$ docker start cat_dog_vote_server`

<br>


### remove container
`$ docker rm cat_dog_vote_server`

<br>

### remove all stopped containers
`$ docker rm $(docker ps --filter status=exited -q)`

<br>

### remove image
`$ docker rmi cat_dog_vote_server`

</details>

<br>

### Deployment options:

---

Basically you can deploy your container on any `Containers as a service (CaaS)` cloud service provider.

#### **Heroku**:

There is an officially supported `Heroku.yml` solution offered by Heroku. You can now write a `.yml` file (with a format similar to docker-compose) and Heroku will work out your images. Just follow **[this link](https://devcenter.heroku.com/categories/deploying-with-docker)** above for details.