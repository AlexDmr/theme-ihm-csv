export type Titles = [string, string, string];
export type RecordCSV = [nom: string, taille: number, naissance: Date];
export type CSV = [titres: Titles, ...records: RecordCSV[]];

export function stringToRecord(str: string): RecordCSV {
    return ['', NaN, new Date()];
}

export function stringToCSV(str: string): CSV {
    return [['', '', '']];
}
