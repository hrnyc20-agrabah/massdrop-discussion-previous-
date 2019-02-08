const express = require('express');
const parser = require('body-parser') //instantiate an express object by calling it. 
const axios = require('axios');
const app = express();
const db = require('./db/index.js')



app.use(parser.json()) 
app.use(express.static(__dirname))


app.get('/users', (req, res)=>{


  db.all('SELECT username FROM user', (err,rows) =>{
    console.log(rows)
  })

})
// app.get("/user/:userid", (req, res) => {
//   const nameToLookup = req.params.userid;

//   db.all('SELECT * FROM user WHERE username=$username',
//     {$username: nameToLookup}
//   ), (err, rows) => {
//     console.log(rows)
//   }

 
// });




let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});