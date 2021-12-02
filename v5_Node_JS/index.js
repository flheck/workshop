const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: "hello world" }));
    return;
  }

});

server.listen(port, () => {
    console.log('Server is available under http://127.0.0.1:' + port + '/');
});