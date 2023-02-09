const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Account extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                const salt = 12;
                newUser.password = await bcrypt.hash(newUser.password, salt);
                console.log(newUser.password);
                return newUser;
            },
        },
        instanceMethods: {
            validPassword: async function(password) {
                return await bcrypt.compare(password, this.password);
            }
        },
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'account'
    }
);

module.exports = Account;