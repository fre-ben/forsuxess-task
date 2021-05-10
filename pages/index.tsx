import Head from "next/head";
import { useEffect, useState } from "react";
import { Job } from "../server/db";
import styles from "../styles/Jobs.module.css";
import { fetchJobs } from "../utils/api";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function getJobData() {
      const newJobs = await fetchJobs();
      setJobs(newJobs);
    }
    getJobData();
  }, []);

  const renderJobs = (jobs: Job[]) => {
    return jobs.map((job) => (
      <div className="col-xl-4 col-md-6 mb-3" key={job.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-3">{job.title}</h5>
            <p className="m-0 mb-2">
              <span className="badge bg-light text-dark">Company:</span>
              {job.company}
            </p>
            <p className="m-0">
              <span className="badge bg-light text-dark">RefNr:</span> {job.id}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>For Suxess Task</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main className={styles.main}>
        <h1>Jobs</h1>
        <div className="row mt-3">{renderJobs(jobs)}</div>
      </main>
    </div>
  );
}
