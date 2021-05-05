FROM node:14.16.1-alpine

RUN apk add bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

COPY . .