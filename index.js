const http      = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss    = new WebSocket.Server({ noServer: true });
// const wss    = new WebSocket.Server({ server: server });

wss.on('connection', (ws) => {

  console.log('クライアントとの接続を確立しました');

  ws.on('message', (message) => {
    console.log(`クライアントよりメッセージを受信しました: ${message}`);
    wss.clients.forEach(function(client){
            client.send(message);
    });
  });
});

const allowedOrigins = [
  'http://localhost:8081',
  'https://socket.example.com',
  'file://'
];

/**
 * upgrade要求が来た際の処理
 */
server.on('upgrade', function (request, socket, head) {
  const origin = request.headers.origin;

  // NOTE: check origin
  if (!allowedOrigins.includes(origin)) {
    return socket.destroy();
  }

  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(8080);
