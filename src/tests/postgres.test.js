import assert from "assert"
// import { describe, it } from "mocha"
import { Postgres } from "../db/strategies/postgres/postgres.js"
import { ContextStrategy } from "../db/strategies/base/contextStrategys.js"

import { herosSchema } from "../db/strategies/postgres/schemas/herosSchema.js"

const MOCK_HEROI_CADASTRAR = {
    nome: "Gavião Negro",
    poder: "Flexas"
}

const MOCK_HEROI_ATULIZAR = {
    nome: "Batman",
    poder: "Dinheiro"
}

let context = {}

describe("Postgres Strategy", () => {

    before(async () => {
        const connection = await Postgres.connect()
        const model = await Postgres.defineModel(connection, herosSchema)
        context = new ContextStrategy(new Postgres(connection, model))
        await context.delete()
        await context.create(MOCK_HEROI_ATULIZAR)
    })

    it("PostgresSQL connection", async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it("Create", async () => {
        const herois = await context.create(MOCK_HEROI_CADASTRAR)
        delete herois.dataValues.id
        const result = herois.dataValues
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })

    it("Read", async () => {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })

    it("Update", async () => {
        const [hero] = await context.read({ nome: MOCK_HEROI_ATULIZAR.nome })
        const newNameHero = {
            ...MOCK_HEROI_ATULIZAR,
            nome: "Mulher maravaliha"
        }

        const [result] = await context.update(hero.id, newNameHero)
        const [updateHero] = await context.read({ id: hero.id})
        assert.deepEqual(result, 1)
        assert.deepEqual(updateHero.nome, newNameHero.nome)
    })

    it("Remove by id", async () => {
        const [hero] = await context.read({})
        const result = await context.delete(hero.id)
        assert.deepEqual(result, 1)
    })
})