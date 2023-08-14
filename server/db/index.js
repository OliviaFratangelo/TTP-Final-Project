"use strict";

const { db, Sequelize } = require("./db");

// Require your models and make your associations

const blogPosts = db.define("blogPosts", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  synopsis: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Comments = db.define("Comments", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  details: {
    type: Sequelize.STRING,
  },
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'blogPosts',
      key: 'id'
    }
  }
});

blogPosts.hasMany(Comments);
Comments.belongsTo(blogPosts);

module.exports = {
  db,
  blogPosts,
  Comments,
};
