FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client

RUN npm ci

WORKDIR /usr/src/app/server

RUN npm ci

EXPOSE 3000

CMD ["bash", "-c", "PORT=3000 NODE_ENV=production node ./index.js"]
