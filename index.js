const http = require("http");

http.createServer(dataControl).listen(4500);

function dataControl(req, resp) {
  resp.write("<h1>Hello this deepak yadav we are elarn node js</h1>");
  resp.end();
}
