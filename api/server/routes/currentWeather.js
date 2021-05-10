const MongoClient = require('mongodb').MongoClient,
      passport = require('passport'),
      express = require('express');

const currentWeatherRoutes = express.Router();

MongoClient.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(client => {
  const db = client.db(process.env.DB);
  const collection = db.collection(process.env.COLLECTIONS_CURRENTWEATHER);

  /**
   * GET /currentWeather - get all items from the collection
   * 
   * @param req
   * @param res
   */
  currentWeatherRoutes.get('/currentWeather', (req, res) => {
    const id = req.query.userId;

    collection
    .find({ 
      userId: id 
    })
    .toArray()
    .then(result => {
      return res.send(result);
    })
    .catch(err => console.log(err));
  });
  
  /**
   * POST /currentWeather - send data to the collection
   * 
   * @param req
   * @param res
   */
  currentWeatherRoutes.post('/currentWeather', (req, res) => {
    const { city, id, userId } = req.body;

    collection.insertOne({
      userId: userId,
      city: city, 
      id: id
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
  });
  
  /**
   * DELETE /currentWeather - delete an item from the collection
   * 
   * @param req
   * @param res
   */
  currentWeatherRoutes.delete('/currentWeather', (req, res) => {
    const { id } = req.body.source;

    collection.deleteOne({
      id: id
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
  });
})
.catch(err => console.log(err));

module.exports = currentWeatherRoutes;