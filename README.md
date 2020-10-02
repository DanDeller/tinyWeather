[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![devDependency Status](https://david-dm.org/dandeller/scaffold/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)

# tinyWeather
A little weather app.

<h2>What you'll need to run the app</h2>
<ul>
  <li><a href='https://www.mongodb.com/'>MongoDB</a></li>
</ul>
<h3>Optional: Docker</h3>
<ul>
  <li><a href='https://docs.docker.com/desktop/'>Docker</a></li>
</ul> 

<h2>How to use</h2>
<h4>With Docker:</h4>
<ul>
  <li>Make sure Docker and MongoDB are both set up</li>
  <li>Clone the repo</li>
  <li>Launch Docker</li>
  <li>Start the api: docker-compose up --build</li>
  <li>Start client: yarn start (new tab)</li>
</ul>

<h4>Without Docker:</h4>
<ul>
  <li>Make MongoDB is set up</li>
  <li>Clone the repo</li>
  <li>Start the api: cd into tinyWeather/api and run `yarn start`</li>
  <li>Start client: cd into tinyWeather/api and run `yarn start` (new tab)</li>
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
