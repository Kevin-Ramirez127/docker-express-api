#	Docker - Express API

## Description
This backend service is written on Node JS + Express + Sequelize + MySql

### What it's for

This repository is for practice with Docker containers and make a standard docker image for my next projects with __Node__, __Express__, __MySql__, __Sequelize__.

## Installation
### Git
Clone this repository `https://github.com/Kevin-Ramirez127/docker-express-api.git`

### Software
Previously you have to install __Node JS__ and __Docker desktop__ for Windows

### Environment configuration
You need to ask for the .env file, and fill the items.

Environment variables:
- MYSQL_ROOT_PASSWORD=password `Change`
- MYSQL_HOST=mysqldb `default`
- MYSQL_DB=docker `default`

- MYSQL_LOCAL_PORT=3307 `default`
- MYSQL_DOCKER_PORT=3306 `default`

- NODE_LOCAL_PORT=3000 `default`
- NODE_DOCKER_PORT=3000 `default`

### Run
To run this application you should put the __docker compose up__ command.