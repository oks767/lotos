let WSServer = require('ws').Server;
let server = require('http').createServer();
let app = require('./index');

// Create web socket server on top of a regular http server
let wss = new WSServer({

  server: server
});

// Also mount the app here
server.on('request', app);

wss.on('connection', function connection(ws) {
 
  ws.on('message', function incoming(message) {
    
    console.log(`received: ${message}`);
    
    ws.send(JSON.stringify({

      answer: 42
    }));
  });
});


server.listen(4200, function() {

  console.log(`http/ws server listening on 4200`);
});