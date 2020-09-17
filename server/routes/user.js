const User = require('../../middleware/userSchema'),
			passport = require('passport'),
			bcrypt = require('bcryptjs'),
			express = require('express'),
			userRoutes = express.Router();

/**
 * GET /logout - log user out
 * @param req
 * @param res
 */
userRoutes.get('/logout', (req, res) => {
	req.logout();
	res.send('User logged out');
});

/**
 * GET /user - get current user
 * @param req
 * @param res
 */
userRoutes.get('/user', (req, res) => {
	res.send(req.user);
});

/**
 * POST /login - login users
 * @param req
 * @param res
 */
userRoutes.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

/**
 * POST /register - add a new users
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
      await newUser.save();
      res.send("User Created");
    }
	});
});

module.exports = userRoutes;