// To parse this data:
//
//   import { Convert, MinimalMatch } from "./file";
//
//   const minimalMatch = Convert.toMinimalMatch(json);

export interface MinimalMatch {
    _id:        string;
    count:      number;
    name:       string;
    background: string;
    slug:       string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMinimalMatch(json: string): MinimalMatch {
        return JSON.parse(json);
    }

    public static minimalMatchToJson(value: MinimalMatch): string {
        return JSON.stringify(value);
    }
}
