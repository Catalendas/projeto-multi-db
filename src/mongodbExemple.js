// npm i mongoose

import { mongoose, Schema } from "mongoose"

mongoose.connect("mongodb://admin:senhaadmin@localhost:27017/herois?authSource=admin").catch((err) => {
    if (!err) return 
    console.log("Falha na conexão", err)
})


const connection = mongoose.connection
connection.once("open", () => console.log("Database rodando"))

const herosSchema = new Schema({
    nome: {
        type: String,
        required: true,
    }, 
    poder: {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model("heroi", herosSchema)

async function main() {
    const resultCadastrar = await model.create({
        nome: "Batman",
        poder: "Dinheiro"
    })

    console.log("Cadastro", resultCadastrar)

    const herosList = await model.find()

    console.log("list", herosList)
}

main()