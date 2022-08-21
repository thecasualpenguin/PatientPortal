// Requiring module
const mongoose = require('mongoose');
    
// Course Modal Schema
const userSchema = new mongoose.Schema({
    dateCreated: {type: Date, unique: true},
    fname: String,
    lname: String,
    age: Number,
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true} ,
    city: String,
    state: String,
    zipcode: String, 
    userType: {type: String, required: true},
});
    
// Course Modal Schema
const productSchema = new mongoose.Schema({
  title: String,
  text: String,
  src: String,
  alt: String
});

const logEntrySchema = new mongoose.Schema({
  ISODate: Date,
  dateString: String,
  ipAddress: String,
  location: Object,
  method: String,
  resource: String,
});
     
// Creating model objects
const User = mongoose.model('users', userSchema);
const Product = mongoose.model('products', productSchema);
const LogEntry = mongoose.model('logs', logEntrySchema);
    
// Exporting our model objects
module.exports = {
    User, Product, LogEntry
}