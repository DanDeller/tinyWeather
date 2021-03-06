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
    <li>Head to terminal and in the first tab start your MongoDB service.</li>
    <li>Open a second terminal tab and start the api: cd tinyWeather/api and yarn start</li>
    <li>Open a third terminal tab and start client: cd tinyWeather/client and yarn start</li>
    <li>Once the client has finised, it will automatically open a new browser tab at http://localhost:3000/#/home.</li>
  </ul>

> NOTE: Wait until the server has fully started until running yarn start. When ready the console will read "Connected to Mongoose."
  
> NOTE: If you are not using yarn, you can still use npm in its place.


<h3>If you do want to test with Docker in its current state</h3>
<p>As stated previously, Docker is in its experimental stage and isn't quite fully functioning yet. Should you want to test it or see how it currently runs, you'll need to make a few minor changes and run a few additional commands. We'll cover those in the following steps.

<ul>
  <li>First and foremost you will need to ensure that you have Docker installed. If not, head over to <a href='https://docs.docker.com/desktop/'>Docker</a> and run the installation steps. </li>
  <li>Next, since we are using Docker now, you'll need to remove "proxy": "http://localhost:3001/" from the /client package.json file.</li>
  <li>After this, since we are running mongoDB from a Docker container, we'll need to update the dot.env file. Odds are you installed without atlas, you were using mongodb://localhost:27017. For Docker we'll update that to point to the mongo container like mongodb://mongo:27017.</li>
  <li>Finally since we are no longer using the proxy in /client package.json, you'll need to prefix the /client/src/services/AuthService.js with http://localhost:3001/. Example: http://localhost:3001/register.</li>
</ul>

<p>Now we are ready to build our containers and start via docker-compose</p>

> NOTE: Make sure your MongoDB service are running

<ul>
  <li>With our MongoDB service running, cd to /api and run 'make build.'</li>
  <li>Confirm that the server has started and connected to Mongoose and cd to /client and run 'make build'.</li>
  <li>Both the containers are build for both front and backend services. Once they are built, cd to the root of the project and run 'make run-dev'. This will start the server and application containers. When ready, open up http://localhost:3000/#/home.</li>
</ul>

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
