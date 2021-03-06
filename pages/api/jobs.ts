import { NextApiRequest, NextApiResponse } from "next";
import { getJobs, writeJobsInDB } from "../../server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const jobs = await getJobs();

    res.json(jobs);
  }

  if (req.method === "POST") {
    await writeJobsInDB(process.env.MONGODB_URL, process.env.MONGODB_NAME);
    const jobs = await getJobs();
    res.json(jobs);
  }
};
