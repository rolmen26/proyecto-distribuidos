FROM node:current-alpine3.17

RUN apk add --no-cache bash git zip unzip

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]