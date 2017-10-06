module.exports = function (sequelize, DataTypes) {
	var usertwos = sequelize.define("usertwos", {
		username: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		},
		password: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		}
	});
	return usertwos;
}
