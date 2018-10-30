FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD npm config set cache-min 9999999 && npm install --only=production && npm start