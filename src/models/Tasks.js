const mongoose = require('mongoose');
const {Schema} = mongoose;

const Tasks = new Schema({
    title: String,
    description: String
});


module.exports = mongoose.model('Tasks', Tasks);