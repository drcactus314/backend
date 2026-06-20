const mongoose = require('mongoose');

const imageUserSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: (true, "fullname is required")
    },
    photo:{
        type: String,
        default: null,
    },
});

const imageUser = mongoose.model('imageUser', imageUserSchema);

module.exports = imageUser;