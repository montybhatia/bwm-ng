const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

// setup a route for rentals call with a callback function that returns a json feed
router.get('', function(req, res) {
	Rental.find({}, function(err, foundRentals) { // .find, call back function that will be called when db returns data
		res.json(foundRentals);
	});
});

// second route, to get rental by id
router.get('/:id', function(req, res) {
	const rentalId = req.params.id; //id is from the previous line '/:id' which is generated from mongodb
	Rental.findById(rentalId, function(err, foundRental) {
		if (err) {
			res.status(422).send({errors: [{title: 'Rental Error!', detail: 'Could not find Rental!'}]});
		}
		res.json(foundRental);
	});
});

module.exports = router;