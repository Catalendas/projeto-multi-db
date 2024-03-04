class NotImplementedException extends Error {
    constructor() {
        super("Not implemented exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(item) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }
}

class MongoDb extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Item criado em mongoDb")
    }
}

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Item criado em postgres")
    }
}

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super()
        this.__database = strategy
    }

    create(item) {
        return this.__database.create(item)
    }
}

const mongoDb = new ContextStrategy(new MongoDb())
mongoDb.create()

const postgres = new ContextStrategy(new Postgres())
postgres.create()

postgres.read()