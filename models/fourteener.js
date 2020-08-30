// dependencies
var mongoose = require('mongoose');

// define schema
var FourteenerSchema = new mongoose.Schema({
    mountainPeak: String,
    mountainRange: String,
    elevationFeet: Number,
    fourteener: Boolean,
    latitude: Decimal128,
    longitude: Decimal128,
    standardRoute: String,
    distanceMiles: Decimal128,
    elevationGainFeet: Number,
    difficulty: String,
    trafficLow: Number,
    trafficHigh: Number,
    photo: String,
    slug: String
});

// export schema
module.exports = Fourteener = mongoose.model('fourteeners', FourteenerSchema);
