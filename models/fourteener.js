// dependencies
var mongoose = require('mongoose');

// define schema
var FourteenerSchema = new mongoose.Schema({
    mountainPeak: String,
    mountainRange: String,
    elevationFeet: Number,
    fourteener: Boolean,
    latitude: Number,
    longitude: Number,
    standardRoute: String,
    distanceMiles: Number,
    elevationGainFeet: Number,
    difficulty: String,
    trafficLow: Number,
    trafficHigh: Number,
    photo: String,
    slug: String
});

// export schema
module.exports = Fourteener = mongoose.model('fourteeners', FourteenerSchema);
