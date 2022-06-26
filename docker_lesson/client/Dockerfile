# specify a base image
FROM node:16.15.1-alpine3.15

# create and use a working directory in the image
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# copy the source code to the working directory
COPY . ./public
COPY . ./src

# expose port 3000 to the host
EXPOSE 3000

# start app
CMD ["npm", "run", "start"]