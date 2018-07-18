var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Diplay all burgers
router.get("/", function (req, res) {
	burger.selectAll(function (burgerdata) {
		res.render("index", { burgers: burgerdata });
	});
});

router.put("/update/:id", function (req, res) {
	//Set devoured status on burger based on id
	var condition = "id = " + req.params.id;
	burger.updateOne({ "devoured": 1 }, condition,
		//after updating devoured status, redirect to landing page
		function (data) {
			res.redirect("/")
		});
});
//Create new burger
router.post("/create", function (req, res) {
	burger.insertOne("burger_name", req.body.name, function (burgerdata) {
		//Redirect to landing page
		res.redirect("/");
	})

});

module.exports = router;