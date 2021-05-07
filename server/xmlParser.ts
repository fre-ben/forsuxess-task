import fs from "fs";
import xml2js from "xml2js";

const parser = new xml2js.Parser();

export function xmlParse(fileName: string) {
  fs.readFile(
    process.cwd() + `/public/resource/${fileName}.xml`,
    (err, data) => {
      parser.parseString(data, (err, result) => {
        console.log(JSON.stringify(result, null, 4));
        console.log(result);
      });
    }
  );
}
