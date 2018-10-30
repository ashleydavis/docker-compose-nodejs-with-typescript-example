FROM node:8

# todo: Make this a multi-stage build.

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD npm config set cache-min 9999999 && npm install && npm run build && npm start
# todo: --only=production