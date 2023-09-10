var path = require('path');
var http = require('http');
var fs = require('fs');

const host = "127.0.0.1"; 
const port = 4000;


var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    
    css: 'text/css',
   
    jpg: 'image/jpeg',
    png: 'image/png',
    json: 'application/json',
    js: 'application/javascript'
};

var server = http.createServer(function (req, res) {


    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
    var reqpath = req.url.toString().split('?')[0];
   
    var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
  
    var type = mime[path.extname(file).slice(1)];
    var s = fs.createReadStream(file);
 
    
    s.on('open', function () {
        res.setHeader('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end(`<h1>404 Error</h1><p>Content not found</p>`);
    });
});





server.listen(port, host, () => {
  console.log(`node.js API Server is running on http://${host}:${port}`);
});

