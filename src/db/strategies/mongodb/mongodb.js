import { ICrud } from "../interfaces/interfaceCrude.js"
import { mongoose, Schema } from "mongoose"

const STATUS = {
    0: "Disconectado",
    1: "Conectado",
    2: "Conectando",
    3: "Disconectando"
}

export class MongoDb extends ICrud {
    constructor(connection, schema) {
        super()
        this._connection = connection
        this._schema = schema
    }

    async create(item) {
        const resultCadastrar = await this._schema.create(item)
        return resultCadastrar
    }

    async read(item, skip = 0, limit = 10) {
        return await this._schema.find(item).skip(skip).limit(limit)
    }

    async update(id, item) {
        return await this._schema.updateOne({ _id: id}, {$set: item})
    }

    async delete(id) {
        return await this._schema.deleteOne(id)
    }

    static connect() {
        mongoose.connect("mongodb://admin:senhaadmin@localhost:27017/herois?authSource=admin").catch((err) => {
            if (!err) return 
            console.log("Falha na conexão", err)
        })


        const connection = mongoose.connection
        connection.once("open", () => console.log("Database rodando"))
        return connection
    }

    async isConnected() {
        const state = STATUS[this._connection.readyState]
        if (state === "Conectado") return true

        if (state !== "Conectando") return state
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        return STATUS[this._connection.readyState]
        /*

        */
    }   
}
