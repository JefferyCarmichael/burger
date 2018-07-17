var orm = require("../config/orm.js");

var burger = {

    selectAll: function(next) {
        orm.selectAll("burgers",function(res){
            next(res);
        });   
    },

    insertOne: function(col,val, next) {
        orm.insertOne("burgers", col,val,function(res){
         next(res);
        })
    },

    updateOne: function(obj, condition,next) {
        orm.updateOne("burgers", obj, condition, function(res){
            next(res);
        });
    }
}


module.exports = burger;