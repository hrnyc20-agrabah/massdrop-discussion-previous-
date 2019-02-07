var sqlite3 = require('sqlite3').verbose();
var faker = require('faker');
var moment = require('moment');

var db = new sqlite3.Database('massdrop.db')

//
db.serialize(function(){
    
    var product = db.prepare("INSERT INTO product VALUES (?,?)");
    product.run(1, "nike sneaker")
    product.finalize()
})

db.serialize(function () {
    var user = db.prepare("INSERT INTO user VALUES (?,?,?)");

    for (var i = 0; i < 10; i++) {

        user.run(Math.floor(Math.random(i) * 1000), faker.internet.userName() , faker.image.avatar())
    }
    user.finalize(

    );

})


db.serialize(function () {
    var thread = db.prepare("INSERT INTO thread VALUES(?,?)");
    for (var i = 0; i < 3; i++) {
        thread.run(Math.floor(Math.random(i) * 1000), faker.lorem.word())
    }
    thread.finalize();
})


db.serialize(function () {
    var users = db.prepare("SELECT id FROM user ")
    var messages = db.prepare("INSERT INTO messages VALUES(?,?,?,?,?)");
    var threads = db.prepare("SELECT id FROM thread")
    // console.log(typeof threads, "hello type of threads")

    function threadsf() {
        var result = []
        for (var key in threads) {
            result.push(threads[key])

        }
        result = result.forEach(id => Math.floor(Math.random(id) * 10))
        return result;
    }

    function usersf() {
        var result = []
        for (var key in users) {
            result.push(users[key])

        }
        result = result.forEach(id => Math.floor(Math.random(id) * 10))
        return result
    }
    // var result = threads().forEach(id => Math.floor(Math.random(id) * 10))

    // function usersf() {
    //     var result = users.forEach(id => Math.floor(Math.random(id) * 10))
    //     return result;
    // }

    for (var i = 0; i < 100; i++) {
        messages.run(
            (Math.floor(Math.random(i) * 1000)),
            (threadsf()),
            (faker.date.past()),
            (faker.lorem.paragraph()),
            (usersf()))
    }

    messages.finalize();
})




db.close((err) => {
    if (err) {
        console.log(err, 'something is wrong closing')
    }
    console.log('Close the database connection.');
});