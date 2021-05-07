import Head from "next/head";
import styles from "../styles/Home.module.css";
import { xmlParse } from "../server/xmlParser";

export default function Home({ parsedXml }) {
  const data = parsedXml;
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
  const parsedXml = xmlParse("jobdata_1");
  return {
    props: { parsedXml },
  };
}
