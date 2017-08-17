// Import the ORM to implement functions that will interact with the database
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            validate: {
                len: [1]
            },
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burgers;
};