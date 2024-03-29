import { DataTypes, Sequelize } from "sequelize"
import { ICrud } from "../interfaces/interfaceCrude.js"

export class Postgres extends ICrud {
    constructor(connection, schema) {
        super()
        this._connection = connection
        this._schema = schema
    }

    static async connect() {
        const connection = new Sequelize(
            "heros",
            "admin",
            "minhasenhasecreta",
            {
                host: 'localhost',
                dialect: 'postgres',
                port: 5432,
                quoteIdentifiers: false,
                operatorsAliases: false,
                logging: false
            }
        )

        return connection
    }

    async isConnected() {
        try {
            await this._connection.authenticate()
            return true
        } catch (err) {
            console.log("fail", err)
            return false
        }
    }

    static async defineModel(connection, schema) {
        const model = connection.define(schema.name, schema.schema, schema.options)
        await model.sync()
        return model
    }

    async create(item) {
        const result =  this._schema.create(item)
        return result
    }

    async read(item) {
        return this._schema.findAll({ where: item, raw: true })
    }

    async update(id, item) {
        return this._schema.update(item, { where: {id: id}})
    }

    async delete(id) {
        const query = id ? { id } : {}
        return this._schema.destroy({where: query})
    }
}
