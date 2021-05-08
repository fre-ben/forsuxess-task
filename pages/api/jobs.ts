import { NextApiRequest, NextApiResponse } from "next";
import { getJobs } from "../../server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await getJobs();

  res.json(jobs);
};
