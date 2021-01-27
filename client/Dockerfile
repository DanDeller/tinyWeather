FROM node:15-alpine

WORKDIR /www

COPY . /www/

RUN yarn install --silent
# RUN npm rebuild node-sass
# RUN yarn cache clean

CMD ["yarn", "start"]