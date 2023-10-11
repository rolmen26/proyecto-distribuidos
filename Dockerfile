FROM node:19.9.0-alpine3.17

RUN apk add --no-cache bash git

WORKDIR /app

COPY ./ /app