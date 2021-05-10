import xml2js from "xml2js";

const parser = new xml2js.Parser();

export async function parseXml(xmlFile: Buffer) {
  return await parser.parseStringPromise(xmlFile);
}

export function cleanTitle(oldTitle: string): string {
  return oldTitle.replace(/\r\n\s/g, "").replace(/\s\r\n/g, "");
}

const companyMapping = {
  50275472: "OSRAM Licht AG, Munich, Germany",
  50130479: "OSRAM GmbH, Munich, Germany",
  50130586: "OSRAM Opto Semiconductors GmbH, Regensburg, Germany",
  50130558: "Traxon Technologies Ltd., Hongkong",
  50240921: "OSRAM Opto Semiconductors (China) Co., Ltd., Wuxi",
  50130490: "Traxon Technologies LLC., Wilmington, USA",
  50130491: "OSRAM Opto Semiconductors, Inc., Sunnyvale, USA",
  50130480: "OSRAM SYLVANIA INC., Wilmington, USA",
  50130608: "OSRAM Ceská republika s.r.o., Bruntál",
  50130563: "P.T. OSRAM Indonesia, Jakarta",
  50130564: "OSRAM (Malaysia) Sdn. Bhd., Petaling Jaya",
  50130557: "OSRAM Kunshan Display Optic Co., Ltd., CHN",
  50669646: "Clay Paky S.p.A., Seriate, Italy",
  50832735: "OSRAM Lighting S.A.S.U., Molsheim, France",
  50832750: "OSRAM Lighting Private Limited, Gurgaon, India",
  50835334: "OSRAM Servicios Administrativos, S.A. de C.V., Naupalcan, Mexico",
  50835335: "OSRAM Ltd., Markham, Canada",
  50835340: "OSRAM Comercio de Solucoes de Iluminacao Ltda., Barueri, Brazil",
  50836230: "OSRAM Lighting Services GmbH, Wipperfürth, Germany",
  51003810: "OSRAM Innovation Hub GmbH, Berlin, Germany",
  51012343: "Vixar Inc., Plymouth, USA",
  50130562: "OSRAM (Thailand) Co., Ltd., Bangkok",
  50130620: "OSRAM S.p.A. - Società Riunite OSRAM Edison Clerici, Milano, Italy",
  50286171: "OSRAM Asia Pacific Management Company Ltd., Shanghai, China",
  50395644: "not relevant anymore",
  50131319: "OSRAM a.s. Zweigniederlassung Österreich, Vienna",
  50131320: "OSRAM a.s., Hungarian Branch Office, Budapest",
  50130617: "OSRAM Romania S.R.L., Bucharest",
  50249416: "OSRAM Asia Pacific Ltd., Hongkong",
  50834705: "OSRAM Lighting S.L., Madrid, Spain",
  50130556: "OSRAM China Lighting Ltd., Foshan",
  50130561: "OSRAM Guangzhou Lighting Technology Limited, China",
  50130568: "OSRAM Ltd., Yokohama, Japan",
  50130576: "OSRAM Opto Semiconductors (Malaysia) Sdn. Bhd., Penang",
  50130570: "OSRAM Taiwan Company Ltd., Taipei",
  50130494: "OSRAM de Colombia Iluminaciones S.A.S. Bogotá",
  50130577: "OSRAM Opto Semiconductors Asia Ltd., Hongkong",
  50995911: "OSRAM Opto Semiconductors (Japan) Ltd., Yokohama",
  50995912: "OSRAM Opto Semiconductors Korea Ltd., Seoul",
  50995913: "OSRAM Opto Semiconductors (Taiwan) Ltd., Taipei",
  51017143: "BAG electronics GmbH, Arnberg, Germany",
  50999000: "Digital Lumens, Inc., Boston, USA",
  51013145: "Fluence Bioengineering, Inc., Austin, USA",
  50837029: "OSRAM S.A., Buenos Aires, Argentina",
  50832730: "OSRAM d.o.o., Zagreb, Croatia",
  51022734: "Ring Automotive Limited, Leeds, UK",
  50832731: "OSRAM Sales EOOD, Trud, Bulgaria",
  50836025: "OSRAM EOOD, Trud, Bulgaria",
  50834702: "OSRAM AB, Stockholm, Sweden",
  50130630: "OSRAM, a.s., Nové Zámky, Slovakia",
  50832733: "OSRAM Oy, Vantaa, Finland",
  50834707: "OSRAM Ltd., Reading, Great Britain",
  50834701: "OSRAM AS, Lysaker, Norway",
  50834704: "OSRAM Benelux B.V., Rotterdam, Netherlands",
  50834703: "OSRAM, Lda, Carnaxide, Portugal",
  50834706: "OSRAM Lighting AG, Winterthur, Switzerland",
  50832732: "OSRAM A/S, Taastrup, Denmark",
  50832667: "OSRAM Sp. z o.o., Warsaw, Poland",
  50832668: "OOO OSRAM, Moscow, Russia",
  50832669: "OSRAM Lighting Middle East FZE, Dubai, UAE",
  50832670: "OSRAM Teknolojileri Ticaret Anonim Sirketi, Istanbul, Turkey",
  50834708: "OSRAM Lighting Pte. Ltd., Singapore",
  50832673: "OSRAM Lighting (Pty) Ltd., Midrand, South Africa",
  50832753: "OSRAM Pty. Ltd., Sydney, Australia",
  50832752: "OSRAM Co., Ltd., Seoul, South Korea",
};

export function mapCompanyName(companyID: string): string {
  return companyID.replace(companyID, companyMapping[companyID]);
}
