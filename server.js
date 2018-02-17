var express = require('express');
var exec = require('child_process').exec;
var app = express();

// Return a 200 for kubernetes healthchecks
app.get('/healthz', function(req, res){
  res.status(200).end();
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT;
server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
  var databaseUrl = process.env.DATABASE_URL
  console.log('Database url ==> %s', databaseUrl);
});
