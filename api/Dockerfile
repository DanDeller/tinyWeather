FROM node:13-alpine

WORKDIR /www

COPY . /www/

COPY package.json /www

RUN yarn install
RUN npm rebuild node-sass

ENV PATH /www/node_modules/.bin:$PATH

EXPOSE 3001

VOLUME ["/www"]

# CMD ["yarn", "start"]