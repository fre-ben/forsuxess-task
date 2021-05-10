import { Db, MongoClient } from "mongodb";
import { cleanTitle, mapCompanyName, parseXml } from "../utils/helpers";
import { readXml } from "./xmlReader";

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

export async function getJobs(): Promise<Job[]> {
  await connectDB(url, dbName);

  const jobs: Job[] = await db.collection("jobs").find({}).toArray();

  return jobs;
}

export async function writeJobsInDB(url: string, dbName: string) {
  await connectDB(url, dbName);
  const jobsCollection = db.collection("jobs");

  const xmlFile = await readXml("jobdata_1");
  const parsedXml = await parseXml(xmlFile);

  const newJobs: Job[] = parsedXml.jobList.job.map((job) => {
    return {
      id: +job.$.refno,
      title: cleanTitle(
        job.languageSpecificElements[0].languageSpecificElement[0].posTitle[0]._
      ),
      company: mapCompanyName(job.Organization[0]),
    };
  });

  newJobs.forEach(async (job) => {
    if (await jobsCollection.findOne({ id: job.id })) {
      return;
    } else {
      console.log("Job posted");
      return jobsCollection.insertOne(job);
    }
  });
}
