// dependencies
var mongoose = require('mongoose');

// define schema
var FourteenerSchema = new mongoose.Schema({
    mountainPeak: String,
    mountainRange: String,
    elevationFeet: Number,
    fourteener: Boolean,
    latitude: mongoose.Decimal128,
    longitude: mongoose.Decimal128,
    standardRoute: String,
    distanceMiles: mongoose.Decimal128,
    elevationGainFeet: Number,
    difficulty: String,
    trafficLow: Number,
    trafficHigh: Number,
    photo: String,
    slug: String
});

// export schema
module.exports = Fourteener = mongoose.model('fourteeners', FourteenerSchema);
