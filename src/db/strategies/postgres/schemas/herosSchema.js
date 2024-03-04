import { DataTypes } from "sequelize"


export const herosSchema = {
    name: "herois",
    schema: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        poder: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    options: {
        freezeTableName: false,
        tableName: "TB_HEROIS",
        timestamps: false
    }
}