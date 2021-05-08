import xml2js from "xml2js";

const parser = new xml2js.Parser();

export async function parseXml(xmlFile: Buffer) {
  return await parser.parseStringPromise(xmlFile);
}
