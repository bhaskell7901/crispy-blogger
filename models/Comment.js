const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'comment'
    }
);

module.exports = Comment;