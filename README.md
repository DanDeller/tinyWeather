[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
<!--[![devDependency Status](https://david-dm.org/dandeller/scaffold/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)-->

# tinyWeather
A tiny weather app.

<h2>What you'll need to run the app</h2>
<ul>
  <li><a href='https://www.mongodb.com/'>MongoDB</a></li>
</ul>
<h3>Optional</h3>
<ul>
  <li><a href='https://docs.docker.com/desktop/'>Docker</a></li>
</ul> 

> NOTE: Docker with tinyWeather is still in its experimental stage. You do not need Docker to run the app.

<h2>How to use</h2>
  <ul>
    <li>Make sure MongoDB is installed</li>
    <li>Clone the repo</li>
    <li>Start client (new tab): cd into tinyWeather/api and run yarn start</li>
    <li>Start the api (new tab): cd into tinyWeather/api and run yarn start</li>
  </ul>
  
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
  <li>Update styles to use Less instead of plain CSS (Docker does not play nice with node-sass).</li>
  <li>Get Docker running properly</li>
</ul>
