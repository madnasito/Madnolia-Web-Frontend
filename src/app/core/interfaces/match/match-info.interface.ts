import { MatchStatus } from "../../enums/match-status.enum";

export interface MatchInfo {
    _id:         string;
    game:        string;
    platform:    number;
    date:        number;
    user:        string;
    inviteds:    string[];
    title:       string;
    description: string;
    duration:    number;
    joined:      string[];
    private:     boolean;
    tournament:  boolean;
    status:      MatchStatus;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMatchInfo(json: string): MatchInfo {
        return JSON.parse(json);
    }

    public static matchInfoToJson(value: MatchInfo): string {
        return JSON.stringify(value);
    }
}
