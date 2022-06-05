const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');
const wss = new WebSocket.Server({ port: 5501 });

let userOnServer = [];

wss.on('connection', function connection(ws) {
	const clientId = uuidv1();
	userOnServer = [...userOnServer, clientId];

	ws.on('message', function incoming(message) {
		const request = JSON.parse(message);
		console.log(request);
	});
});
