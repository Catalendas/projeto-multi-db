// npm i sequelize pg-hstore pg
import { Sequelize, DataTypes } from "sequelize";

const driver = new Sequelize(
    'heros',
    "admin",
    "minhasenhasecreta",
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main() {
    const Herois = driver.define('herois', {
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
    }, {
        freezeTableName: false,
        tableName: "TB_HEROIS",
        timestamps: false
    })
    await Herois.sync()
    const result = await Herois.findAll({ raw: true, attributes: ["nome"] })
    console.log("result", result)
}

main()