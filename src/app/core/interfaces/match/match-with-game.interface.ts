import { MatchStatus } from "../../enums/match-status.enum";
import { Game } from "../game/game.interface";

export interface MatchWithGame {
    _id:         string;
    game:        Game;
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
    public static toMatchWithGame(json: string): MatchWithGame {
        return JSON.parse(json);
    }

    public static matchWithGameToJson(value: MatchWithGame): string {
        return JSON.stringify(value);
    }
}
