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
	}, 'izzy', { expiresIn: '1h' });
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
	const { username, _id } = req.user;
	res.status(200).json({
		isAuthenticated: true,
		user: { 
			cookies: req.cookies,
			username,
			id: _id
		}
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
		// If authenticated, create a token and set the cookie with the token passed in.
		if (user) {
			const { _id, username } = user;
			const token = signToken(_id);
			
			res.cookie('access_token', token, {
				httpOnly: true,
				sameSite: true
			});

			res.status(200).json({
				isAuthenticated: true,
				user: username,
				token: token
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
		if (err) {
			res.status(500).json({
				message: {
					msgBody: 'Error has occured', 
					msgError: true
				}
			});
		};

		// Check if user exists
		if (doc) {
			res.status(400).json({
				message: {
					msgBody: 'Username is already taken',
					msgError: true
				}
			});
		};

		// If no user exists, create one
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
			});

			await newUser.save(err => {
				if (err) {
					res.status(500).json({
						message: {
							msgBody: 'Error has occured', 
							msgError: true
						}
					});
				} else {
					res.status(201).json({
						message: {
							msgBody: 'Account successfully created', 
							msgError: false
						}
					});
				};
			});
		}
	});
});

module.exports = userRoutes;