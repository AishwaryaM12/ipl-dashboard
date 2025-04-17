export interface Match {
    Match: string;
    Team1: string;
    Team2: string;
    Venue: string;
    Date: string;
    Time: string;
    MatchNumber: string;
    Status: string;
    MatchId: string;
    MatchResult: string;
    WinningTeam: string;
    Umpire1: string;
    Umpire2: string;
    [key: string]: any; // to handle any extra properties safely
}
