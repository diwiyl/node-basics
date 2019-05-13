var http = require('http');

function requestHandler(req, res) {
  console.log("== Got a request:");
  console.log("  -- req.method:", req.method);
  console.log("  -- req.url:", req.url);
  console.log("  -- req.headers:", req.headers);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); /* text/css, application/javascript, image/jpeg */
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Hello world!</h1>");
  res.write("<p>");
  res.write("You requested this resource: " + req.url);
  res.write("</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
}

var server = http.createServer(requestHandler);
server.listen(3001, function () {
  console.log("== Server is listening on port 3001");
});
