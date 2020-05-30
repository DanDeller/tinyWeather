const firebaseConfig = require('../firebase.config.js'),
			firebase = require('@firebase/app').default,
			express = require('express'),
			router = express.Router();			

require('@firebase/firestore');
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

router.get('/currentWeather', (req, res) => {
	db.collection('recentCities')
	.get()
	.then(snapshot => {
		const recentCities = [];
		snapshot.forEach(doc => {
			recentCities.push(doc.data());
		});

		return res.json(recentCities);
	})
	.catch(err => console.log(err));
});

router.post('/currentWeather', (req, res) => {
	const data = {
		city: req.body.city,
		id: req.body.id
	};

	db.collection('recentCities')
	.add(data)
	.then(()=> {
		return res.json(data);
	})
	.catch(err => console.log(err));
});

router.delete('/currentWeather', (req, res) => {
	const currentId = req.body.source.id;

	db.collection('recentCities')
	.where('id', '==', currentId)
	.get()
	.then(snapshot => {
		snapshot.forEach(doc => {
			doc.ref.delete();
		});

		return res.json(currentId);
	})
	.catch(err => console.log(err));
});

module.exports = router;