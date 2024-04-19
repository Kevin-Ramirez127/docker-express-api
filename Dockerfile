FROM node:20.9.0-alpine

WORKDIR /myapp
COPY package.json .
RUN npm install
RUN npm install -g nodemon

COPY . .
CMD npm start