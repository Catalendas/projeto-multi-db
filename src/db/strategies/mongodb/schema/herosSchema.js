import { mongoose, Schema } from "mongoose";

const schema = new Schema({
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

 export const herosSchema = mongoose.model("heroi", schema)