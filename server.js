// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("API Project: Timestamp Microservice")
})

app.get("api/timestamp/:date_string?")

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
