```javascript
const socketIO = require('socket.io');
const server = require('./node_server.js');

const socket = socketIO(server);

socket.on('connection', (client) => {
    console.log('User connected');

    client.on('USER_CONNECTED', (data) => {
        console.log(`User connected with data: ${data}`);
    });

    client.on('TASK_CREATED', (task) => {
        console.log(`Task created: ${task}`);
    });

    client.on('TEST_COMPLETED', (test) => {
        console.log(`Test completed: ${test}`);
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });
});

module.exports = socket;
```