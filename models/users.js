  // *G)* Navigate to the `models` folder and create a new file called `todo.js`. Create a *Todo* model with columns for _"text"_ `DataTypes.STRING`, and _"complete"_ `DataTypes.BOOLEAN`.


module.exports = function (sequelize, DataTypes) {
	var users = sequelize.define("users", {
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

	users.associate = function(models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		users.hasMany(models.Ingredient, {
		  onDelete: "cascade"
		});

		users.hasMany(models.favorites, {
			onDelete: "cascade"
		});
		
	};

	return users;
}