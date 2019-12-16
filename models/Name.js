const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NameSchema = new Schema({
    first: {
        type: String, 
        required: true
    },
    last: {
        type: String,
        required: true
    }
})


module.exports = Name = mongoose.model('name',NameSchema);