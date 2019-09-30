// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("API Project: Timestamp Microservice")
})

app.get("/api/timestamp/:date_string?",(req,res)=>{

  const date_string = req.params.date_string || "";

  const date = new Date(date_string);

  
  let rep = err!=null ? {error:"Invalid Date"}:{unix:date.getTime(),utc:date.toUTCString()};

  
  res.send(rep);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
