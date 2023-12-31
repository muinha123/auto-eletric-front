FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY package.* ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]