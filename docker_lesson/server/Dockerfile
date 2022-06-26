# specify a base image
FROM node:16.15.1-alpine3.15

# create and use a working directory in the image
WORKDIR /app

# copy required files
COPY package.json ./
COPY package-lock.json ./

# install packages
RUN npm install

# copy source code
COPY server.js ./

COPY build ./

# copy source code
#COPY . .

# expose port 3001 to the host
EXPOSE 3001
# run application
CMD [ "npm", "run", "dev" ]