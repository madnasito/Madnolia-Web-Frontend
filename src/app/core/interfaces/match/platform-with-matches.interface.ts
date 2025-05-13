import { MinimalMatch } from "./minimal-match.interface";

export interface PlatformWithMatches {
    name:    string;
    apiId:   number;
    matches: MinimalMatch[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPlatformWithMatches(json: string): PlatformWithMatches {
        return JSON.parse(json);
    }

    public static platformWithMatchesToJson(value: PlatformWithMatches): string {
        return JSON.stringify(value);
    }
}