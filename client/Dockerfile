FROM node:13-alpine

# Set a working directory
WORKDIR /www

# install app dependencies
RUN yarn install
RUN yarn cache clean

# start app
CMD ["yarn", "start"]