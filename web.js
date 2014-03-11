var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(20);
app.use(express.logger());

app.get('/', function(request, response) {
   fs.readFileSync('index.html',function(data){
       buffer.write(data,'utf-8');
       response.send(buffer.toString);
   });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
