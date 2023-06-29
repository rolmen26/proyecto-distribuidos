FROM node:current-alpine3.17 as builder

RUN apk add --no-cache bash git zip unzip

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]