[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![devDependency Status](https://david-dm.org/dandeller/scaffold/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)

# tinyWeather
A quick little weather app.

<h2>What you'll need:</h2>
<ul>
  <li>Docker - https://docs.docker.com/docker-for-mac/install/ (Mac user)</li>
  <li>RethinkDB - https://rethinkdb.com/docs/install/</li>
</ul>

<h2>How to use:</h2>
<ul>
  <li>Make sure Docker and RethinkDB are installed</li>
  <li>Clone the repo</li>
  <li>Build the app - docker-compose build</li>
  <li>Start the app - docker-compose up</li>
</ul>

<h2>Test the app</h2>
<p>tinyWeather can be tested with jest</p>
<pre>npm test</pre>

<h2>Useful Docker commands</h2>
<p><Check all containers:</p>
<pre>docker ps -a</pre>

<p>Check all images:</p>
<pre>docker images</pre>

<p>Delete containers that are not running:</p>
<pre>docker rm $(docker ps -a -q)</pre>

<p>Delete containers that are still running:</p>
<pre>docker stop $(docker ps -a -q) docker rm $(docker ps -a -q)</pre>

<p>Delete images:</p>
<pre>docker rmi 'image-id'</pre>

<p>Delete all images:</p>
<pre>docker rmi $(docker images -q)</pre>

<p>Delete all images:</p>
<pre>docker rmi -f $(docker images -q)</pre>
