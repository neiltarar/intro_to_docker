# Getting Started with Docker

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

`$ docker pull node:18-alpine3.15`

<br>


### view downloaded/built images
`$ docker images`

<br>

### build your docker image
&emsp; Usage:

>$ docker build [OPTIONS] PATH | URL | -

 ---

`--file , -f` Name of the Dockerfile (Default is 'PATH/Dockerfile')
 
`-t, --tag` list Name and optionally a tag in the 'name:tag' format`

<br>

### Let's build our image and give a tag name 'version_1.0'

`$ docker build -t cat_dog_vote_server:dev ./`

<br>

## Run a nodejs container

#### Usage:
> $ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

---

`-i` for interactive mode
 
`-t` for terminal
 
`-d` for detach

`--publish , -p` Publish a container's port(s) to the host

>$docker run -p 3001:3001 -d cat_dog_vote_server:dev

<br>

### view running container
`docker ps`

<br>

### remote into the running container
`docker exec -it cat_dog_vote_server /bin/sh`

<br>

### run nodejs (ctrl+D to exit)
`node`

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

### remove image
`$ docker rmi cat_dog_vote_server`