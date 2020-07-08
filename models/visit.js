module.exports = function (sequelize, DataTypes) {
    var Visit = sequelize.define("visit", {
        route: DataTypes.STRING
    });

    return Visit;
};