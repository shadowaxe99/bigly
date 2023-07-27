```javascript
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useSocket = (messageName, callback) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    socket.on(messageName, (data) => {
      setData(data);
      if (callback) callback(data);
    });

    return () => {
      socket.off(messageName);
    };
  }, [messageName, callback]);

  return data;
};

export const emitMessage = (messageName, data) => {
  socket.emit(messageName, data);
};
```