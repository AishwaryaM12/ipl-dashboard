import React, { memo, useMemo, useState } from 'react';
import { useIPLData } from '@/hooks/useIPLData';
import moment from 'moment';
import styles from '../../styles/IPLMatch.module.css';
import SafeImage from '@/components/SafeImage/SafeImage';
import { Match } from '@/types/match';
import {useRouter} from "next/router";

interface IPLMatchListProps {
    currentTab: 'fixtures' | 'results';
}

const IPLMatchList: React.FC<IPLMatchListProps> = ({currentTab}) => {
    const { data, loading, error } = useIPLData();
    const [activeTab, setActiveTab] = useState(currentTab ? currentTab : 'fixtures');
    const router = useRouter();

    const handleTabClick = (tab: 'fixtures' | 'results') => {
        setActiveTab(tab);
        router.push(`/ipl/${tab}`);
    };

    const sortedMatches = useMemo(() => {
        if (!data) return [];
        const now = new Date();

        return data
            .filter((match) => {
                const matchDate = new Date(match.MATCH_COMMENCE_START_DATE);
                if (activeTab === 'fixtures') {
                    return matchDate >= now;
                } else {
                    return matchDate < now;
                }
            })
            .sort(
                (a, b) =>
                    new Date(a.MATCH_COMMENCE_START_DATE).getTime() -
                    new Date(b.MATCH_COMMENCE_START_DATE).getTime()
            );
    }, [data, activeTab]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
                <button
                    className={`px-4 py-2 text-sm font-semibold rounded-l-full border ${
                        activeTab === 'fixtures'
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => handleTabClick('fixtures')}
                >
                    Fixtures
                </button>
                <button
                    className={`px-4 py-2 text-sm font-semibold rounded-r-full border ${
                        activeTab === 'results'
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300'
                    }`}
                    onClick={() => handleTabClick('results')}
                >
                    Results
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {sortedMatches.map((match, index) => (
                    <div
                        key={index}
                        className={`bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex gap-4 ${styles.iplmatchcard}`}
                    >
                        <DateContainer match={match} />
                        <div className="flex flex-col justify-between flex-1/2">
                            <p className="text-xs text-gray-600 font-medium">{match.GroundName}</p>
                            <div className="flex items-center gap-1 mt-3">
                                <TeamLogo src={match.HomeTeamLogo} />
                                <h2
                                    className={`text-sm ${
                                        parseInt(match.HomeTeamID) === parseInt(match.WinningTeamID)
                                            ? 'font-bold text-purple-900'
                                            : 'font-bold text-gray-400'
                                    }`}
                                >
                                    {match.HomeTeamName}
                                </h2>
                                <h2
                                    className={`text-sm ml-auto ${
                                        parseInt(match.HomeTeamID) === parseInt(match.WinningTeamID)
                                            ? 'font-bold text-purple-900'
                                            : 'font-bold text-gray-400'
                                    }`}
                                >
                                    {match.FirstBattingTeamID === parseInt(match.HomeTeamID)
                                        ? match.FirstBattingSummary
                                        : match.SecondBattingSummary}
                                </h2>
                            </div>
                            <p className="text-gray-500 text-sm text-center font-bold">VS</p>
                            <div className="flex items-center gap-1 mb-3">
                                <TeamLogo src={match.AwayTeamLogo} />
                                <h2
                                    className={`text-sm ${
                                        parseInt(match.AwayTeamID) === parseInt(match.WinningTeamID)
                                            ? 'font-bold text-purple-900'
                                            : 'font-bold text-gray-400'
                                    }`}
                                >
                                    {match.AwayTeamName}
                                </h2>
                                <h2
                                    className={`text-sm ml-auto ${
                                        parseInt(match.AwayTeamID) === parseInt(match.WinningTeamID)
                                            ? 'font-bold text-purple-900'
                                            : 'font-bold text-gray-400'
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
                ))}
            </div>
        </div>
    );
};

interface DateContainerProps {
    match: Match;
}

const DateContainer = memo(({ match }: DateContainerProps) => {
    const matchDate = new Date(match.MATCH_COMMENCE_START_DATE);
    const dayDate = moment(matchDate, 'DD MMM YYYY').format('ddd, DD MMM');
    const time = moment(matchDate, 'DD MMM YYYY').format('hh:mm A');

    return (
        <div className={`items-center flex flex-col justify-center ${styles.iplmatchcarddate}`}>
            <p className="text-s text-gray-700 font-semibold">{dayDate}</p>
            <p className="text-xs text-gray-700 font-medium">{time} IST</p>
        </div>
    );
});

DateContainer.displayName = 'DateContainer';

const TeamLogo: React.FC<{ src: string | undefined }> = ({ src }) => {
    return src ? (
        <SafeImage
            src={src}
            fallback="https://scores.iplt20.com/ipl/images/default-team-logo.png?v=3"
            alt="Team Logo"
            width={25}
            height={25}
        />
    ) : (
        <div className="bg-gray-500" style={{ width: 25, height: 25, borderRadius: 25 }}></div>
    );
};

TeamLogo.displayName = 'TeamLogo';

export default IPLMatchList;
