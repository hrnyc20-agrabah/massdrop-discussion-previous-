const express = require('express');
const app = express();
const parser = require('body-parser') //instantiate an express object by calling it. 

app.use(parser.json()) 
app.use(express.static(__dirname))



let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});