[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
<!--[![devDependency Status](https://david-dm.org/dandeller/scaffold/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)-->

# tinyWeather
A tiny weather app.

<h2>What you'll need to run the app</h2>
<ul>
  <li><a href='https://nodejs.org/en/download/'>NodeJS</a></li>
  <li><a href='https://www.mongodb.com/'>MongoDB</a></li>
</ul>

> NOTE: If you do not want to go the Mongo Atlas way, you can install MongoDB with the steps listed here: https://docs.mongodb.com/manual/administration/install-community/

<h3>Optional</h3>
<ul>
  <li><a href='https://docs.docker.com/desktop/'>Docker</a></li>
</ul> 

> NOTE: Docker with tinyWeather is still in its experimental stage and is NOT fully functioning right now. You do not need Docker to run the app.

<h2>How to use</h2>
  <ul>
    <li>Make sure MongoDB is installed</li>
    <li>Clone the repo</li>
    <li>Rename sample.dot.env to dov.env and add in your MONGO_URI. Example: mongodb://localhost:27017</li>
    <li>Head to terminal and in the first tab start your MongoDB service. If you are on a Mac, you'll use: brew services start mongodb-community@4.4</li>
    <li>Open a second terminal tab and start the api: cd tinyWeather/api and yarn start</li>
    <li>Open a third terminal tab and start client: cd tinyWeather/client and yarn start</li>
    <li>Once the client has finised, it will automatically open a new browser tab at: http://localhost:3000/#/home</li>
  </ul>

> NOTE: Wait until the server has fully started until running yarn start. When ready the console will read "Connected to Mongoose."
  
> NOTE: If you are not using yarn, you can still use npm in its place.

<h2>Useful Docker commands</h2>

Check all containers: `docker ps -a`

Check all images: `docker images`

Delete containers that are not running: `docker rm $(docker ps -a -q)`

Delete containers that are still running: `docker stop $(docker ps -a -q) docker rm $(docker ps -a -q)`

Delete image: `docker rmi 'image-id'`

Delete all images: `docker rmi $(docker images -q)`

Force delete images: `docker rmi -f $(docker images -q)`

<h2>Todo list</h2>
<ul>
  <li>Update styles to use Less instead of plain CSS (Docker is not playing nice with node-sass so I had to move from sass to css for now).</li>
  <li>Get Docker configuration running properly</li>
  <li>Persist sessions</li>
  <li>Find a place to host TW version 2</li>
</ul>
