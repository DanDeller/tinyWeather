FROM node:13-alpine

WORKDIR /www

COPY . /www/

COPY package.json /www

RUN yarn install --silent

# Create Production Files
# RUN yarn build

# Add `node_modules/.bin` to $PATH
ENV PATH /www/node_modules/.bin:$PATH

EXPOSE 3001

VOLUME ["/www"]