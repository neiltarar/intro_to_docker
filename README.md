<h1 style="font-size: 32pt; padding-bottom: 30px; border-bottom: none;"> Getting Started with Docker </h1>

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


### Download a specific nodejs image:

You can find official images on **[dockerhub](https://hub.docker.com/_/node)**.

`$ docker pull node:16.15.1-alpine3.15`

<br>


### View downloaded/built images:
`$ docker images`

<br>

### Check containers:

`$ docker ps [OPTIONS]`

<details><summary><b>Options:</b></summary>

```shell
--all , -a		# Show all containers (default shows just running)
--filter , -f		# Filter output based on conditions provided
--format		# Pretty-print containers using a Go template
--last , -n	-1	# Show n last created containers (includes all states)
--latest , -l		# Show the latest created container (includes all states)
--no-trunc		# Don't truncate output
--quiet , -q		# Only display container IDs
--size , -s		# Display total file sizes
```

</details>

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

instead of `cat_dog_vote_server` give your own name to your image. Otherwise, Docker will automatically assign a name. After `:` you can give your own tag such as `dev`, `production`, `latest` etc.

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

Again give your own name to the container you will be running. Your container name will come after `--name` tag. 

`$ docker run --rm -it --name cat_dog_vote_server -p 3001:3001 -v $(pwd):/app cat_dog_vote_server:dev`

<br>

## Docker-Compose:

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. You can learn more about it **[here](https://docs.docker.com/compose/)**.

To start your docker containers, networks with **[docker-compose](https://docs.docker.com/engine/reference/commandline/compose_down/)**:

<details><summary><b>Options:</b></summary>

```shell
--remove-orphans		# Remove containers for services not defined in the Compose file.
--rmi		                # Remove images used by services. "local" remove only images that don't have a custom tag ("local"|"all")
--timeout , -t	10	        # Specify a shutdown timeout in seconds
--volumes , -v		        # Remove named volumes declared in the volumes section of the Compose file and anonymous volumes attached to containers.
```

</details>

Build and run your images in a container:

`$ docker-compose up --build`

Run your built images in a container:

`$ docker-compose up`

To stop and remove your containers, networks:

`$ docker-compose down`

---


## Here are some handy docker commands:

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


### ExpressJS with Typescript

# Initialise the Project
```shell
mkdir my-express-ts-app
cd my-express-ts-app
npm init -y
```

# Install Dependencies
```shell
npm install --save-dev typescript ts-node @types/node nodemon 
npm install express
```

# Create a tsconfig.json file
```shell
npx tsc --init
```

# Update tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
    }
}
```

# Update package.json
```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "build": "tsc -p ."
  }
}
```

# Create a src folder and an index.ts file
```shell
mkdir src
touch src/index.ts
```

# Update index.ts
```typescript
import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

# Run the application
```shell
npm run dev
```