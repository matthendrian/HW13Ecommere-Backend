//double check default values.
//Firing!

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    product_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 10,
      Validate: {isNumeric: true}  
    }, 
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
      validate: {isDecimal: true}
    },
    category_id: {
      references: {
        model: 'category',
        key: 'id'
      },
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
