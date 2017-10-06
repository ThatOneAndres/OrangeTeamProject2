module.exports = function (sequelize, DataTypes) {
	var usertwos = sequelize.define("usertwos", {
		username: {
			type: DataTypes.STRING,
      		allowNull: false,
					unique: true,
      		validate: {
        		len: [1]
      		}
		},
		password: {
			type: DataTypes.STRING.BINARY,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		},
		email: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		}
	});
	return usertwos;
}
