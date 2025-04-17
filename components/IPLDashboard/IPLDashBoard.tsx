import React from "react";
import { useIPLData } from "@/hooks/useIPLData";
import moment from "moment";
import IPLMatchCard from "@/components/IPLMatchCard/IPLMatchCard";

const IPLDashboard = () => {
    const { data, loading, error } = useIPLData();

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    const now = moment();
    const today = now.format("YYYY-MM-DD");

    const liveMatches = data?.filter(
        (match) => match.MatchStatus.toLowerCase() === "live"
    );

    const todaysMatches = data?.filter(
        (match) =>
            moment(match.MATCH_COMMENCE_START_DATE).format("YYYY-MM-DD") === today
    );

    const upcomingMatches = data?.filter(
        (match) =>
            moment(match.MATCH_COMMENCE_START_DATE).isAfter(now, 'day')
    ).slice(0,5);

    return (
        <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
            <section>
                <h1 className="text-xl font-bold mb-4">🟢 Live Matches</h1>
                {liveMatches?.length ? (
                    liveMatches.map((match, idx) => (
                        <IPLMatchCard key={idx} match={match} />
                    ))
                ) : (
                    <p className="text-gray-400 text-sm">No live matches right now.</p>
                )}
            </section>

            <section>
                <h1 className="text-xl font-bold mb-4">📅 Today's Matches</h1>
                {todaysMatches?.length ? (
                    todaysMatches.map((match, idx) => (
                        <IPLMatchCard key={idx} match={match} />
                    ))
                ) : (
                    <p className="text-gray-400 text-sm">No matches scheduled for today.</p>
                )}
            </section>

            <section>
                <div className="flex items-center justify-between gap-6 mb-4">
                    <h2 className="text-2xl font-bold">⏳ Upcoming Matches</h2>
                    <a href="/ipl">View all matches</a>
                </div>
                {upcomingMatches?.length ? (
                    upcomingMatches.map((match) => (
                        <div key={match.MatchID} className="mb-3">
                            <IPLMatchCard match={match} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No upcoming matches.</p>
                )}
            </section>
        </div>
    );
};

export default IPLDashboard;
