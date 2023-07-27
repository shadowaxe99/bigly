```javascript
const compression = require('compression');
const express = require('express');
const app = express();

// Function to compress files
function compressFiles() {
    app.use(compression());
}

compressFiles();

module.exports = compressFiles;
```