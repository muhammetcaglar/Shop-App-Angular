const jwt = require('jsonwebtoken');

const app_secret = "myappsecret";
const username = "admin";
const password = "secret";

module.exports = function (req, res, next) {
  if (req.url === '/login' && req.method === 'POST') {
    if (req.body.username === username && req.body.password === password) {
      let token = jwt.sign({ data: username, expiresIn: '1h' }, app_secret);
      res.json({ success: true, token: token });
    } else {
      console.log('Invalid credentials');
      res.json({ success: false });
    }
    res.end();
    return;
  } else {
    if ((req.url.startsWith("/products") || req.url.startsWith("/categories")) && (req.method !== 'GET')) {
      let token = req.headers['authorization'];
      if (token != null && token.startsWith('Bearer ')) { // Fix: 'Bearer ' instead of 'Bearer<'
        token = token.substring(7, token.length-1);
        try {
          jwt.verify(token, app_secret);
          next();
          return;
        } catch (err) {
          // Token verification failed
          console.log('Token verification failed:', err);
          res.statusCode = 401;
          res.json({ success: false, message: 'Unauthorized' });
          res.end();
          return;
        }
      }
    }
  }
  next();
};
