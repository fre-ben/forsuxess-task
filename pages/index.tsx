import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { updateJobs } from "../utils/api";

export default function Home() {
  useEffect(() => {
    updateJobs();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>For Suxess Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
