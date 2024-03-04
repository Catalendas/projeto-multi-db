import { ContextStrategy } from "./db/strategies/base/contextStrategys.js"
import { MongoDb } from "./db/strategies/mongodb.js"
import { Postgres } from "./db/strategies/postgres.js"

const mongoDb = new ContextStrategy(new MongoDb())
mongoDb.create()

const postgres = new ContextStrategy(new Postgres())
postgres.create()

// postgres.read()