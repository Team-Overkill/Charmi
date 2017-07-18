const express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , massive = require('massive')
  , matchesCtrl = require('./server/matchesCtrl')
  , conversationCtrl = require('./server/conversationCtrl')
  , profileCtrl = require('./server/profileCtrl')
  , config = require('./config')
  , port = 3000
  , app = express();


app.use(bodyParser.json());
app.use(cors());


massive(config.dbURLString).then(function (db) {
  app.set('db', db)
});


app.get('/matches', matchesCtrl.getAllMatches);
app.get('/conversations', conversationCtrl.getConversations);
app.get('/profile', profileCtrl.getProfile);


app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})