# specify a base image
FROM node:18-alpine3.15

# create and use a working directory in the image
WORKDIR /usr/src/app

# copy required files
COPY package*.json ./
# install packages
RUN npm install
# copy source code
COPY ./client ./client/build
COPY ./server.js ./server.js

# copy source code
COPY . .

# expose port 3000 to the host
EXPOSE 3000
# run application
CMD [ "node", "server.js" ]