FROM node:20.9.0-alpine

WORKDIR /myapp
COPY package.json .
RUN npm install

COPY . .
CMD npm start