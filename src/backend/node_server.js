```javascript
const http = require('http');
const app = require('./express_app');

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

module.exports = server;
```