const http = require('http');

const handleServer = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Travis!. This code is lint with XO.\n');
};

http.createServer(handleServer).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
