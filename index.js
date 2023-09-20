ar http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var currentDate = new Date();
  var formattedDate = currentDate.toISOString(); // Format the date as an ISO string
  res.end('gabriel donattis! Current Date: ' + formattedDate);
}).listen(8033);

