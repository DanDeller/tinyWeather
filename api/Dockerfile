FROM node:13-alpine

WORKDIR /www

COPY . /www/

RUN yarn install --silent

EXPOSE 3001

VOLUME ["/www"]