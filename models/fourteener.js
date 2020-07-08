module.exports = function (sequelize, DataTypes) {
    var Fourteener = sequelize.define("fourteener", {
        mountain_peak: DataTypes.STRING,
        mountain_range: DataTypes.STRING,
        elevation_ft: DataTypes.STRING,
        fourteener: DataTypes.STRING,
        lat: DataTypes.STRING,
        lng: DataTypes.STRING,
        standard_route: DataTypes.STRING,
        distance_mi: DataTypes.STRING,
        elevation_gain_ft: DataTypes.STRING,
        difficulty: DataTypes.STRING,
        traffic_low: DataTypes.STRING,
        traffic_high: DataTypes.STRING,
        photo: DataTypes.STRING
    });

    return Fourteener;
};