FROM node:14-alpine

WORKDIR /www

COPY . /www/

COPY package.json /www

RUN yarn install --silent

# Add `node_modules/.bin` to $PATH
ENV PATH /www/node_modules/.bin:$PATH

EXPOSE 3001

VOLUME ["/www"]