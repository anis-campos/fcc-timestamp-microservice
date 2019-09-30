// server.js
// where your node app starts

// init project
const fs = require("fs");
const express = require('express');
const app = express();
const showdown = require("showdown");
const converter = new showdown.Converter();

app.get("/",(req,res)=>{
  fs.readFile('README.md', 'utf8', function(err, contents) {
      res.send(converter.makeHtml(contents))
    }    
  );
});

app.get("/api/timestamp/:date_string?",(req,res)=>{
  
  //parsing date
  const date = new Date(req.params.date_string);
  
  //getting utc anf unix/NaN values
  const [unix,utc] = [date.getTime(),date.toUTCString()];
  
  //if error (NaN) return utc as error (Invalid Date) otherwise return unix and utc
  const rep = isNaN(unix) ? {error:utc} : {unix:unix,utc:utc};

  res.send(rep);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
