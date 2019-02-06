var sqlite3 = require('sqlite3').verbose();
var faker = require('faker');

var db = new sqlite3.Database('massdrop.db')

//

db.serialize(function() {
    var user = db.prepare("INSERT INTO user VALUES (?,?,?)");

    for (var i = 0 ; i < 10 ; i++){

        user.run(faker.internet.userName(), faker.image.avatar())
    }
    user.finalize();


})
// db.serialize(function() {
//     db.run("CREATE TABLE lorem (info TEXT)");
   
//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();
   
//   });



db.close((err) => {
    if (err) {
        console.log(err, 'something is wrong closing')
    }
    console.log('Close the database connection.');
});