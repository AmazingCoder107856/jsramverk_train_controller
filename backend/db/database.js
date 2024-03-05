/**
 * Connects to database
 */

const mongo = require("mongodb").MongoClient;
const databaseName = "trains";
const collectionName = "tickets";

const dbUser = process.env.ATLAS_USERNAME;
const dbPass = process.env.ATLAS_PASSWORD;

const database = {
    getDb: async function getDb() {
        let dsn = `mongodb+srv://${dbUser}:${dbPass}@cluster0.v8m4hqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        }

        const client = await mongo.connect(dsn);
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        return {
            db: db,
            collection: collection,
            client: client,
        };
    },

    getUserDb: async function getUserDb() {
        let dsn = `mongodb+srv://${dbUser}:${dbPass}@cluster0.v8m4hqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        }

        const client = await mongo.connect(dsn);
        const db = client.db(databaseName);
        const collection = db.collection("users");

        return {
            db: db,
            collection: collection,
            client: client,
        };
    }
};

module.exports = database;
