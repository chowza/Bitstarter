var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
   fs.readFileSync('index.html',function(data){
       var newstring = data.toString('utf-8');
       response.send(newstring);
   });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
