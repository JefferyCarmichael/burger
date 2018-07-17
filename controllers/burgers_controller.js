var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/",function(req,res) {
burger.selectAll(function(burgerdata){
res.render("index",{burgers: burgerdata});
});
});

router.put("/update/:id",function(req,res){
	//set condition to id of burger
	var condition = "id = " + req.params.id;
	//use burger model to set devoured bool to true where condition is true
	burger.updateOne({"devoured": 1}, condition,
	//after updating devoured bool redirect to landing page
	 function(data){
		res.redirect("/")
	});
});

router.post("/create", function(req,res){
    burger.insertOne("burger_name", req.body.name, function(burgerdata){
        res.redirect("/");
    })
    
});

module.exports = router;