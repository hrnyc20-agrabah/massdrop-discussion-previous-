const express = require('express');
const parser = require('body-parser') //instantiate an express object by calling it. 
const axios = require('axios');
const app = express();
const sqlite3 = require('sqlite3');

const db = require('./db/index.js')
// console.log(db)


app.use(parser.json())
app.use(express.static(__dirname ))


app.get('/users', (req, res) => {
  db.all('SELECT username FROM user', (err, rows) => {

    console.log(rows)
    res.send(rows)
  })

})

app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages', (err, rows) => {

    console.log(rows)
    res.send(rows)
  })

})

app.get("/users/:username", (req, res) => {
  const nameToLookup = req.params.username;

  db.all('SELECT * FROM user WHERE username=$username',
    {$username: nameToLookup}), (err, rows) => {
    const allUsernames = rows.map(e => e.username);
    console.log(allUsernames)
    res.send(allUsernames)
  }

});




let port = 3002;

app.listen(port, function () {
  console.log(`listening on port ${port}`);











  // app.get('/users', (req, res) => {
  //   // db.all() fetches all results from an SQL query into the 'rows' variable:
  //   db.all('SELECT name FROM users_to_pets', (err, rows) => {
  //     console.log(rows);
  //     const allUsernames = rows.map(e => e.name);
  //     console.log(allUsernames);
  //     res.send(allUsernames);
  //   });
  // });
});


// seed -> indexedDB