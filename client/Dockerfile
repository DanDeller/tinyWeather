FROM node:14-alpine

# Set a working directory
WORKDIR /www

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn cache clean --force
RUN npm rebuild node-sass --force
RUN yarn global add react-scripts@3.4.1 --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]