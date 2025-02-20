import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://admin:admin@cluster0.0x82p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotifyAula");
