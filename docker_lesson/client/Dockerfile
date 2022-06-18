# specify a base image
FROM node:18-alpine3.15

# create and use a working directory in the image
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy required files
COPY package.json ./
COPY package-lock.json ./

# install app dependencies
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]