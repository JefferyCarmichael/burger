var connection = require("./connections.js");

function objToSql(obj) {
    //Converting object to sql.
    var arr = [];
    //for each property in object
    for (key in obj) {
    //  Format to sql and push to array.
        arr.push(key + "=" + obj[key]);
    }
    //Push into arr return arr as a string.
    console.log(arr);
    return arr.toString();
}

var orm = {
    //Select all burgers listed in table.
    selectAll: function (table, next) {
        var query = "SELECT * FROM " + table + ";"
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            next(res);
        });
    },
    //Add Burger
    insertOne: function (table, col, val, next) {
        var query = "INSERT INTO " + table;
        query += " ( " + col.toString() + ")";
        query += "VALUES (?) ";
        connection.query(query, val, function (err, res) {
            if (err) {
                throw err;
            }
            next(res);
        });
    },
    //Update chosen burger to devoured.
    updateOne: function (table, obj, condition, next) {
        //set query
        var query = "UPDATE " + table;
        query += " SET " + objToSql(obj);
        query += " WHERE " + condition + ';';
        //connect to mysql and perform query
        connection.query(query, function (err, res) {
            //error handler
            if (err) throw err;
            //callback
            next(res);
        })
    }

};

module.exports = orm;