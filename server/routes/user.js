const User = require('../../middleware/userSchema'),
			passport = require('passport'),
			JWT = require('jsonwebtoken'),
			bcrypt = require('bcryptjs'),
			express = require('express'),
			userRoutes = express.Router();

/**
 * signToken
 * 
 * @param userID
 */
const signToken = userID => {
	return JWT.sign({
		iss: 'izzy',
		sub: userID
	}, 'izzy', {expiresIn: '1h'});
};

/**
 * GET /logout - log user out
 * 
 * @param req
 * @param res
 */
userRoutes.get('/logout', passport.authenticate('jwt', {session : false}), (req, res) => {
	res.clearCookie('access_token');
	res.json({
		user: {
			username: ''
		}, 
		success: true
	});
});

/**
 * GET /user - get current user
 * 
 * @param req
 * @param res
 */
userRoutes.get('/user', passport.authenticate('jwt', {session: false}), (req,res) => {
	const { username } = req.user;
	res.status(200).json({
		isAuthenticated: true, 
		user: { username }
	});
});

/**
 * POST /login - login users
 * 
 * @param req
 * @param res
 * @param next
 */
userRoutes.post('/login', (req, res, next) => {
	passport.authenticate('local', {session: false}, (err, user, info) => {
		if (err) throw err;

		// Check if user has been authenticated.
		// If authenticated, create a token and set the cookie with token passed in.
		if (user) {
			const { _id, username } = user;
			const token = signToken(_id);
			
			res.cookie('access_token', token, {
				httpOnly: true,
				sameSite: true
			});

			res.status(200).json({
				isAuthenticated: true,
				user: username
			});
		} else {
			res.send('No User Exists');
		};
	})(req, res, next);
});

/**
 * POST /register - add a new users
 * 
 * @param req
 * @param res
 */
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
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
			});

			await newUser.save(err => {
				console.log(err);
			});

			res.send('User Created');
		}
	});
});

module.exports = userRoutes;