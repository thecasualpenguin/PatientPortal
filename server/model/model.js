// Requiring module
const mongoose = require('mongoose');
    
// Course Modal Schema
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    email: String,
    password: String,
    city: String,
    state: String,
    zipcode: String,
    userType: String,
});
    
// Course Modal Schema
const productSchema = new mongoose.Schema({
  title: String,
  text: String,
  src: String,
  alt: String
});

const logEntrySchema = new mongoose.Schema({
  datetime: String,
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