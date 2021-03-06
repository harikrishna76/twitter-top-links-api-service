var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send(' World');
});

app.get('/tweets', function(req, res) {
  res.send('Hello World');
});

app.listen(app.get('port'), function() {
  console.log(
    'http Express server(worker) listening on port ' + app.get('port')
  );
});
