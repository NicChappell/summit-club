// dependencies
var mongoose = require('mongoose');

// define schema
var UserSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    address1: {
        type: String,
        default: ''
    },
    address2: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    fourteeners: Array,
    fullName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordResetExpiresAt: {
        type: Date,
        default: Date.now
    },
    passwordResetToken: {
        type: String,
        default: ''
    },
    postalCode: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    state: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: true
    }
});

// export schema
module.exports = User = mongoose.model('users', UserSchema);
