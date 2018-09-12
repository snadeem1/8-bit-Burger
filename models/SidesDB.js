var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

//mimic whats in the database

var Side = sequelize.define("sides",
{
    id:{
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4

    },
    product: {
      type: Sequelize.STRING,
      allowNull : false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    image: {
      type: Sequelize.BLOB,
      allowNull : false
    },
    chosen: {
      type: Sequelize.BOOLEAN,
      allowNull : false
    }
  },
  {
      freezeTableName: true,
    timestamps: false
  });

  Side.sync();

  module.exports = Side;
