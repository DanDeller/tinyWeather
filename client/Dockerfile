FROM node:13-alpine

# Set a working directory
WORKDIR /www

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY yarn.lock ./
RUN yarn install --silent
RUN npm rebuild node-sass --silent
RUN yarn global add react-scripts@3.4.1 --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]