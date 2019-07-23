'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    movie_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    ip_address: DataTypes.STRING,
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};