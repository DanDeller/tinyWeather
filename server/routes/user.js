const User = require('../../middleware/userSchema'),
			passport = require('passport'),
			bcrypt = require('bcryptjs'),
			express = require('express'),
			userRoutes = express.Router();

userRoutes.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) throw err;

		// Check if user exists.
		// If user exists, log them in
		if (!user) {
			res.json({
				message: `User ${user} does not exist.`
			});
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.json({
					message: `Successfully authenticated ${user}.`
				});
			});
		};
	})(req, res, next);
});

userRoutes.post('/register', (req, res) => {
	const { username } = req.body;

	User.findOne({username: username}, async (err, doc) => {
		if (err) throw err;

		// Check if user exists
		if (doc) res.json({
			message: `User ${username} already exists.`
		});

		// If no user exists, create one
		if (!doc) {
			bcrypt.genSalt(10, function(err, salt) {
				if (err) throw err;
				bcrypt.hash('izzy', salt, async function(err, hash) {
					if (err) throw err;
					req.body.password = hash;

					const newUser = new User({
						username: req.body.username,
						password: req.body.password
					});

					await newUser.save();

					res.send({
						success: true, 
						message: `successfully created ${username}.`
					});
				});
			});
		};
	});
});

module.exports = userRoutes;