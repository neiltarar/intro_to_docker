# specify a base image
FROM node:18-alpine3.15

# create and use a working directory in the image
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# add app
COPY . ./

# expose port 3000 to the host
EXPOSE 3000

# start app
CMD ["npm", "start"]