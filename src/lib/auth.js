import dns from "node:dns";
dns.setServers(['8.8.8.8' ,'8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let client;
let db;

if (process.env.MONGODB_URI) {
  client = new MongoClient(process.env.MONGODB_URI);
  db = client.db();
}

export const auth = betterAuth({
  database: db ? mongodbAdapter(db, {
    client
  }) : undefined,
  emailAndPassword: { 
    enabled: true, 
  },
});