import fs from "fs/promises";

export async function readXml(fileName: string) {
  const xmlFile = await fs.readFile(
    process.cwd() + `/public/resource/${fileName}.xml`
  );

  return xmlFile;
}
