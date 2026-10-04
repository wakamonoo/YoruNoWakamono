import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ANCESTORY_MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!global.ancestoryMongoClient) {
  client = new MongoClient(uri, options);
  global.ancestoryMongoClient = client.connect();
}

clientPromise = global.ancestoryMongoClient;
export default clientPromise;
