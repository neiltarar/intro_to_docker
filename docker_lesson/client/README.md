# Getting Started with Docker

Mac users need to install [Docker](https://docs.docker.com/get-docker/).

<br>

### How to check your Docker Version:

You can run this command on your terminal:
### `$ docker version`

<br>


### download nodejs image
`$ docker pull node:18-alpine3.15`

<br>


### view downloaded image
`$ docker images`

<br>

### build your docker image
- Usage:

>`$ docker build [OPTIONS] PATH | URL | -` 
>
> ----------------------------------------------------
`--file , -f` Name of the Dockerfile (Default is 'PATH/Dockerfile')
 
`-t`, --tag list Name and optionally a tag in the 'name:tag' format`

<br>

### Let's build our image and give a tag name 'version_1.0'

`$ docker build -t cat_dog_vote_image:version_1.0 ./`

<br>

## Run a nodejs container

#### Usage:
> $ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
> 
----------------------------------------------------

`-i` for interactive mode
 
`-t` for terminal
 
`-d` for detach

`--publish , -p` Publish a container's port(s) to the host

>$docker run -p 3000:3000 -d cat_dog_vote_image 

<br>

### view running container
`docker ps`

<br>

### remote into the running container
`docker exec -it learning_docker /bin/sh`

<br>

### run nodejs (ctrl+D to exit)
`node`

<br>

### look at container information
`$ docker inspect learning_docker`

<br>


### look at the logs
`$ docker logs learning_docker`

<br>


### stop container
`$ docker stop learning_docker`

<br>


### start container again
`$ docker start learning_docker`

<br>


### remove container
`$ docker rm learning_docker`

<br>

### remove all stopped containers
`$ docker rm $(docker ps --filter status=exited -q)`

### remove image
`$ docker rmi node:16-alpine3.12`