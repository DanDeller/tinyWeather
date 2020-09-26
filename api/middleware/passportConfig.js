const localStrategy = require('passport-local').Strategy,
      JwtStrategy = require('passport-jwt').Strategy,
      User = require('./userSchema'),
      bcrypt = require('bcryptjs');

module.exports = function(passport) {
  const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['access_token'];
    };
    return token;
  };
  
  passport.use(
    new JwtStrategy({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'izzy'
    }, (payload, done) => {
      User.findById({_id: payload.sub}, (err, user) => {
        if (err) {
          return done(err, false);
        };
            
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        };
      });
    })
  );

  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({username: username}, (err, user) => {
        if (err) throw err;

        if (!user) {
          return done(null, false);
        }

        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          
          if (result === true) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({_id: id}, (err, user) => {
      if (err) throw err;
      cb(err, user);
    });
  });
};