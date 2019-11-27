'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    text: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId'
    });
  };
  return Question;
};
