import { Db, MongoClient } from "mongodb";
import {
  cleanTitle,
  mapCompanyName,
  parseXml,
  postJobToCollection,
} from "../utils/helpers";
import { readXml } from "./xmlReader";

let client: MongoClient = null;
let db: Db = null;

const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME;

export type Job = {
  id: string;
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

  const xmlFileTwo = await readXml("jobdata_2");
  const parsedXmlTwo = await parseXml(xmlFileTwo);

  const parsedXmlTwoJobPath =
    parsedXmlTwo.envEnvelope.envBody[0].ns2getAdvertisementsByPageResponse[0]
      .ns2advertisementResult[0].advertisements[0].advertisement;

  const newJobsXmlOne: Job[] = parsedXml.jobList.job.map((job) => {
    return {
      id: job.$.refno,
      title: cleanTitle(
        job.languageSpecificElements[0].languageSpecificElement[0].posTitle[0]._
      ),
      company: mapCompanyName(job.Organization[0]),
    };
  });

  const newJobsXmlTwo: Job[] = parsedXmlTwoJobPath.map((job) => {
    return {
      id: job.jobNumber[0],
      title: job.jobTitle[0],
      company: job.organizations[0].organization[1].value[0],
    };
  });

  await postJobToCollection(newJobsXmlOne, jobsCollection);
  await postJobToCollection(newJobsXmlTwo, jobsCollection);
}
