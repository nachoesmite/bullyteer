FROM node:10.16-alpine as builder

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client

RUN npm ci
RUN npm run build

WORKDIR /usr/src/app/server

RUN npm ci

CMD ["sh", "-c", "NODE_ENV=production node ./index.js"]


FROM node:10.16-alpine

COPY --from=builder usr/src/app/server /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add bash

RUN apk update && apk upgrade && apk add bash

WORKDIR /usr/src/app

RUN ls

CMD ["sh", "-c", "NODE_ENV=production node ./index.js"]
