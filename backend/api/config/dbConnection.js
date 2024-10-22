import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = 'notes_db';
let db;

try {
    await client.connect();
    db = client.db(dbName);
} catch (err) {
    db = null;
}

export default db;