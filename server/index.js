const express = require('express');  // require is function you can call inside node environment and pass in name of package express
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI, { useNewUrlParser: true}).then(() => {
	const fakeDb = new FakeDb();
	fakeDb.seedDb();
});

const app = express();

// execute this routes when we are going to this path (called middleware)
app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001; // check if port variable available, otherwise use 3001 by default

// to listen to http requests; function is callback function
app.listen(PORT, function(){
	console.log('I am running!')
});
