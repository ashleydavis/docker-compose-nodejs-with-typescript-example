import * as express from 'express';
import * as mongodb from 'mongodb';
import * as fs from 'fs';

// Constants
const PORT = process.env.PORT && parseInt(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// App
const app = express();

/*async*/ function startServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err: any) => {
            if (err) {
                reject(err);
            }
            else {
                console.log(`Running on http://${HOST}:${PORT}`);
                resolve();
            }
        });
    });
}

async function main() {

    const dbHost = process.env.DBHOST || "mongodb://localhost:27017";
    const client = await mongodb.MongoClient.connect(dbHost);
    const db = client.db("mydb");

    app.get("/", (req, res) => {
        res.send('Hello world\n');
    });

    app.get("/data", (req, res) => {
        const collection = db.collection("mycollection");
        collection.find().toArray()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.error("Error retreiving data.");
                console.error(err && err.stack || err);

                res.sendStatus(500);
            });
    });

    await startServer();
}

main() 
    .then(() => console.log("Online"))
    .catch(err => {
        console.error("Failed to start!");
        console.error(err && err.stack || err);
    });
