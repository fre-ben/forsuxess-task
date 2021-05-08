import Head from "next/head";
import styles from "../styles/Home.module.css";
import { readXml } from "../server/xmlReader";
import { parseXml } from "../utils/helpers";

type HomeProps = {
  parsedXml: any;
};

export default function Home({ parsedXml }: HomeProps) {
  const data = parsedXml;
  console.log(data.jobList.job[0]);

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

export async function getStaticProps() {
  const xmlFile = await readXml("jobdata_1");
  const parsedXml = await parseXml(xmlFile);

  return {
    props: { parsedXml },
  };
}
