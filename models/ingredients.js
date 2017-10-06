  // *G)* Navigate to the `models` folder and create a new file called `todo.js`. Create a *Todo* model with columns for _"text"_ `DataTypes.STRING`, and _"complete"_ `DataTypes.BOOLEAN`.


  module.exports = function (sequelize, DataTypes) {
	var Ingredients = sequelize.define("Ingredients", {
		username: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		},
		item: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		}
    });
    

    Ingredients.associate = function(models) {
        // We're saying that a Ingredients should belong to an Author
        // A Ingredients can't be created without an Author due to the foreign key constraint
        Ingredients.belongsTo(models.users, {
          foreignKey: {
            allowNull: false
          }
        });
      };

	return Ingredients;
}