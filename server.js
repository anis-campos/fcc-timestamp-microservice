// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("API Project: Timestamp Microservice")
})

app.get("/api/timestamp/:date_string?",(req,res)=>{
  
  const date = new Date(req.params.date_string);

  const [unix,utc] = [date.getTime(),date.toUTCString()];
  
  const err = isNaN(unix);
  
  let rep = err ? {error:utc}:{unix:unix,utc:utc};

  res.send(rep);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
