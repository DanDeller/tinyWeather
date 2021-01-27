FROM node:13-alpine

WORKDIR /www

COPY . /www/

RUN yarn install --silent --production=false

EXPOSE 3001

VOLUME ["/www"]