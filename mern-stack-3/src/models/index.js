const Bootcamp = require('./bootcamp');
const Course = require('./course');
// import all other models here


// Initialize the models
const models = {
    Bootcamp: Bootcamp.init(sequelize, Sequelize),
    Course: Course.init(sequelize, Sequelize),
    // initialize all other models here
  };
  
  // Establish associations between models (if any)
  Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

    
    module.exports = models;
