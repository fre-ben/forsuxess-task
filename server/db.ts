import { Db, MongoClient } from "mongodb";

let client: MongoClient = null;
let db: Db = null;

const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME;

export type Job = {
  id: number;
  title: string;
  company: string;
};

export async function connectDB(url: string, dbName: string) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getJobs() {
  await connectDB(url, dbName);

  const jobs = await db.collection("jobs").find({}).toArray();

  return jobs;
}
