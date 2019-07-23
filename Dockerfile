FROM node:10

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
