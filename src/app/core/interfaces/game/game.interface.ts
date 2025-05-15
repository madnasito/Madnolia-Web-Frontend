export interface Game {
    _id:         string;
    name:        string;
    slug:        string;
    gameId:      number;
    platforms:   any[];
    background:  string;
    screenshots: any[];
    description: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toGame(json: string): Game {
        return JSON.parse(json);
    }

    public static gameToJson(value: Game): string {
        return JSON.stringify(value);
    }
}
