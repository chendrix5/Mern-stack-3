const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  weeks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tuition: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  minimumSkill: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scholarshipsAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Course;
