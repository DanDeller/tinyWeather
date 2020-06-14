const functions = require('firebase-functions');
const firebaseConfig = require('./firebase.config.js');
const firebase = require('@firebase/app').default;	

require('@firebase/firestore');
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const cors = require("cors")({
  origin: true,
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "Accept"
  ],
  methods: ["POST", "OPTIONS"],
  credentials: true
});

exports.getRecentCities = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    db.collection('recentCities')
    .get()
    .then(snapshot => {
      const recentCities = [];
      snapshot.forEach(doc => {
        recentCities.push(doc.data());
      });

      return res.status(200).send(recentCities);
    })
    .catch(err => console.log(err));
  });
});

exports.postRecentCity = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const data = {
      city: req.body.city,
      id: req.body.id
    };
  
    db.collection('recentCities')
    .add(data)
    .then(()=> {
      return res.status(200).send(data);
    })
    .catch(err => console.log(err));
  });
});

exports.deleteRecentCity = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const currentId = req.body.source.id;

    db.collection('recentCities')
    .where('id', '==', currentId)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        doc.ref.delete();
      });

      return res.status(200).send(currentId);
    })
    .catch(err => console.log(err));
  });
});
