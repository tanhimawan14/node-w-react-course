const mongoose = require('mongoose');

// Destructuring
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: String
});

// name, and function object
mongoose.model('users', userSchema);