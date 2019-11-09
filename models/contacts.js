const mongoose = require('mongoose');

/* Creating Contact Schema */
const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);