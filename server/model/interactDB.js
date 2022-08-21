const mongoose = require("mongoose");

// configure database
const { User, Product, LogEntry } = require("./model.js");

mongoose.connect(process.env.DATABASE_URL).then(
	() => console.log("Database Status: " + mongoose.connection.readyState),
	(err) => console.error(error)
);

// const user = new User( {name: 'Kyle', age: 26} )
// user.save()
//   .then( ()=> console.log("User Saved"))
//   .catch( (error) => console.log(error) );

function writeProduct(productInJson) {
	const product = new Product(productInJson);
	product
		.save()
		.then(() => console.log("user saved"))
		.catch((error) => console.error(error));
}

const readAllProducts = function () {
	// try {
	//   let dbResponse = await User.find();
	//   return dbResponse;
	// }
	// catch (error) {
	//   console.error(error);
	//   return 'response error';
	// }
	return new Promise((res, rej) => {
		let dbPromise = Product.find();
		dbPromise
			.then((data) => res(data))
			.catch((err) => {
				console.error(err), rej(err);
			});
	});
};

const writeLogEntry = function (logEntryJSON) {
  const product = new LogEntry(logEntryJSON);
	product
		.save()
		.then(() => console.log("log entry saved"))
		.catch((error) => console.error(error));
}

const writeUser = function(userJSON) {
  const product = new User(userJSON);
	let statusPromise = product
		.save()
		.then(() => {
      console.log("user entry saved")
      console.log(userJSON)
      return 0  // for success following C convention
    })
		.catch((error) => {
      console.error(error)
      return 1;
    });
  
    return statusPromise 
};

module.exports = {
	readAllProducts,
	writeProduct,
  writeLogEntry,
  writeUser,
};
