FROM node:23-alpine AS builder

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]