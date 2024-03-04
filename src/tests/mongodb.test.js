import assert from "assert"
import { MongoDb } from "../db/strategies/mongodb/mongodb.js"
import { ContextStrategy } from "../db/strategies/base/contextStrategys.js"

let context = {}

import { herosSchema } from "../db/strategies/mongodb/schema/herosSchema.js"

const MOCK_HEROI_CADASTRAR = {
    nome: "Gavião Negro",
    poder: "Flexas"
}

const MOCK_HEROI_ATULIZAR = {
    nome: "Batman",
    poder: "Dinheiro"
}

let MOCK_HEROI_ID = ""

describe("Postgres Strategy", () => {

    before(async () => {
        const connection = MongoDb.connect()
        context = new ContextStrategy(new MongoDb(connection, herosSchema))
        const result = await context.create(MOCK_HEROI_ATULIZAR)
        MOCK_HEROI_ID = result._id
    })

    it("MongoDb isConnected", async () => {
        const result = await context.isConnected()
        assert.deepEqual(result, true)
    })

    it("MongoDb Create", async () => {
        const {nome, poder} = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
    })

    it("List", async () => {
        const [{nome, poder}] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
        assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
    })

    it("update", async () => {
        const result = await context.update(MOCK_HEROI_ID, {
            nome: "Pernalonga"
        })
        assert.deepEqual(result.modifiedCount, 1)
    })

    it("delete", async () => {
        const result = await context.delete(MOCK_HEROI_ID)
        assert.deepEqual(result.deletedCount, 1)
    })
})