import { ICrud } from "../interfaces/interfaceCrude.js"

export class ContextStrategy extends ICrud {
    constructor(strategy) {
        super()
        this.__database = strategy
    }

    create(item) {
        return this.__database.create(item)
    }

    read(item) {
        return this.__database.read(item)
    }

    update(id, item) {
        return this.__database.update(id, item)
    }

    delete(id) {
        return this.__database.delete(id)
    }

    isConnected() {
        return this.__database.isConnected()
    }

    static connect() {
        return this.__database.connect()
    }
}