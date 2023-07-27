```javascript
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

function generateToken(user) {
  const payload = {
    id: user._id,
    username: user.username,
  };

  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, jwtSecret, options);
}

function authenticate(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        reject(err);
      } else {
        resolve(decodedToken);
      }
    });
  });
}

module.exports = {
  generateToken,
  authenticate,
};
```