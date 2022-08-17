const mongoose = require('mongoose');

// configure database
const { User, Product } = require('./model.js');

mongoose.connect(process.env.DATABASE_URL).then(
  () => console.log("Database Status: " + mongoose.connection.readyState),
  err => console.error(error)
);

// const user = new User( {name: 'Kyle', age: 26} )
// user.save()
//   .then( ()=> console.log("User Saved"))
//   .catch( (error) => console.log(error) );

function writeProduct( productInJson ) {
  const product = new Product( productInJson )
  product.save()
    .then(() => console.log('user saved'))
    .catch((error) => console.error(error));
}

const readAllProducts = async function() {
  // try {
  //   let dbResponse = await User.find();
  //   return dbResponse;
  // }
  // catch (error) {
  //   console.error(error);
  //   return 'response error';
  // }
  return new Promise( (res, rej) => {
    let dbPromise = Product.find();
    dbPromise
      .then( (data) => res(data) )
      .catch( err =>{ console.error(err), rej(err)} );
  });
}

module.exports = {
  readAllProducts, writeProduct
}