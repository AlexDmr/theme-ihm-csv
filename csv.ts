export type Titles = [string, string, string];
export type RecordCSV = [nom: string, taille: number, naissance: Date];
export type CSV = [titres: Titles, ...records: RecordCSV[]];

export function stringToRecord(str: string): RecordCSV {
    const [n, t, d] = str.split(";").map(t => t.trim() );
    return [n, +t, new Date(d)];
  }
  
  export function stringToCSV(str: string): CSV {
    const [titres, ...lines] = str.trim().split("\n");
    const titles = titres.split(";").map(t => t.trim()) as Titles;
    return [titles, ...lines.map( stringToRecord )];
  }
  