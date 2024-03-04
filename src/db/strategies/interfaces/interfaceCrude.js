class NotImplementedException extends Error {
    constructor() {
        super("Not implemented exception")
    }
}

export class ICrud {
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

    isConnected() {
        throw new NotImplementedException()
    }

    connect() {
        throw new NotImplementedException()
    }

    definemodel() {
        throw new NotImplementedException()
    }
}