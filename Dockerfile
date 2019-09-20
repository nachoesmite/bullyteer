FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client

RUN npm ci
RUN cat package.json
RUN npm run build

WORKDIR /usr/src/app/server

RUN npm ci

EXPOSE 3001

CMD ["sh", "-c", "NODE_ENV=production node ./index.js"]
