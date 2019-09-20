FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["bash", "-c", "PORT=3000 NODE_ENV=production node ./index.js"]
