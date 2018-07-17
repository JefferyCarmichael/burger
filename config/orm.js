var connection = require("./connections.js");

function objToSql(obj){
	//stores converted object properties
	var arr = [];
	//for each property in object
	for (key in obj){
		// push sql syntax to arr ex: objectProperty = objectPropertyValue ;
		arr.push(key + "=" + obj[key]);
	}
	//when all properties in object have been pushed to arr return arr as a string
	return arr.toString();
}

var orm = {

selectAll: function(table, next ){ 
    var query = "SELECT * FROM " + table + ";"
connection.query(query, function(err,res ){ 
    if(err){
        throw err;
    }
    next(res);
});
},
insertOne: function(table,col,val,next){
    var query = "INSERT INTO "+table;
    query+= " ( "+col.toString() + ")";
    query+= "VALUES (?) " ;
    connection.query(query,val,function(err,res){
        if(err) {
            throw err;
        }
        next(res);
    });      
 },
 //update one function *update*
 updateOne: function( table, obj, condition, next){
    //set query
    var query = "UPDATE " + table;
    query += " SET " + objToSql(obj);
    query += " WHERE " + condition + ';';
    //connect to mysql and perform query
    connection.query(query, function(err,res){
        //error handler
        if (err) throw err;
        //callback
        next(res);
    })
}

};

module.exports = orm;