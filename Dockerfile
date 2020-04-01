FROM node:13-alpine

WORKDIR /www
COPY . /www/

RUN yarn install

EXPOSE 3000

VOLUME ['/www']