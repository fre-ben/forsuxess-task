import xml2js from "xml2js";

const parser = new xml2js.Parser();

export async function parseXml(xmlFile: Buffer) {
  return await parser.parseStringPromise(xmlFile);
}

export function cleanTitle(oldTitle: string): string {
  return oldTitle.replace(/\r\n\s/g, "").replace(/\s\r\n/g, "");
}
