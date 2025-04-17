import React, { memo } from "react";
import moment from "moment";
import styles from '../../styles/IPLMatch.module.css';
import SafeImage from "@/components/SafeImage/SafeImage";
import { Match } from "@/types/match";

interface Props {
    match: Match;
}

const IPLMatchCard: React.FC<Props> = ({ match }) => {
    return (
        <div
            className={`bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex gap-4 ${styles.iplmatchcard}`}
        >
            <DateContainer match={match} />
            <div className="flex flex-col justify-between flex-1/2">
                <p className="text-xs text-gray-600 font-medium">{match.GroundName}</p>

                {/* Home Team */}
                <div className="flex items-center gap-1 mt-3">
                    {match.HomeTeamLogo ? (
                        <SafeImage
                            src={match.HomeTeamLogo}
                            fallback="https://scores.iplt20.com/ipl/images/default-team-logo.png?v=3"
                            alt="HomeTeamLogo"
                            width={25}
                            height={25}
                        />
                    ) : (
                        <div
                            className="bg-gray-500"
                            style={{ width: 25, height: 25, borderRadius: 25 }}
                        />
                    )}
                    <h2
                        className={`text-sm ${
                            parseInt(match.HomeTeamID) === parseInt(match.WinningTeamID)
                                ? "font-bold text-purple-900"
                                : "font-bold text-gray-400"
                        }`}
                    >
                        {match.HomeTeamName}
                    </h2>
                    <h2
                        className={`text-sm ml-auto ${
                            parseInt(match.HomeTeamID) === parseInt(match.WinningTeamID)
                                ? "font-bold text-purple-900"
                                : "font-bold text-gray-400"
                        }`}
                    >
                        {match.FirstBattingTeamID === parseInt(match.HomeTeamID)
                            ? match.FirstBattingSummary
                            : match.SecondBattingSummary}
                    </h2>
                </div>

                <p className="text-gray-500 text-sm text-center font-bold">VS</p>

                {/* Away Team */}
                <div className="flex items-center gap-1 mb-3">
                    {match.AwayTeamLogo ? (
                        <SafeImage
                            src={match.AwayTeamLogo}
                            fallback="https://scores.iplt20.com/ipl/images/default-team-logo.png?v=3"
                            alt="AwayTeamLogo"
                            width={25}
                            height={25}
                        />
                    ) : (
                        <div
                            className="bg-gray-500"
                            style={{ width: 25, height: 25, borderRadius: 25 }}
                        />
                    )}
                    <h2
                        className={`text-sm ${
                            parseInt(match.AwayTeamID) === parseInt(match.WinningTeamID)
                                ? "font-bold text-purple-900"
                                : "font-bold text-gray-400"
                        }`}
                    >
                        {match.AwayTeamName}
                    </h2>
                    <h2
                        className={`text-sm ml-auto ${
                            parseInt(match.AwayTeamID) === parseInt(match.WinningTeamID)
                                ? "font-bold text-purple-900"
                                : "font-bold text-gray-400"
                        }`}
                    >
                        {match.FirstBattingTeamID === parseInt(match.AwayTeamID)
                            ? match.FirstBattingSummary
                            : match.SecondBattingSummary}
                    </h2>
                </div>

                <p className="text-gray-800 text-xs font-semibold">{match.Comments}</p>
            </div>
        </div>
    );
};

interface DateContainerProps {
    match: Match;
}

// eslint-disable-next-line react/display-name
const DateContainer = memo(({ match }: DateContainerProps) => {
    const matchDate = new Date(match.MATCH_COMMENCE_START_DATE);
    const dayDate = moment(matchDate).format("ddd, DD MMM");
    const time = moment(matchDate).format("hh:mm A");

    return (
        <div
            className={`items-center flex flex-col justify-center ${styles.iplmatchcarddate}`}
        >
            <p className="text-s text-gray-700 font-semibold">{dayDate}</p>
            <p className="text-xs text-gray-700 font-medium">{time} IST</p>
        </div>
    );
});

export default IPLMatchCard;
