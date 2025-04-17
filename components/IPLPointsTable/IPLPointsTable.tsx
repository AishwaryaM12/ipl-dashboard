import React from 'react';
import { useIPLPointsData } from '@/hooks/useIPLPointsData';
import Image from 'next/image';

const IPLPointsTable: React.FC = () => {
    const { data, loading, error } = useIPLPointsData();

    if (loading) return <p className="text-center py-4">Loading...</p>;
    if (error) return <p className="text-center text-red-500 py-4">{error}</p>;

    return (
        <div className="overflow-x-auto px-4">
            <table className="min-w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden text-sm">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                    <th className="py-2 px-4 text-left">#</th>
                    <th className="py-2 px-4 text-left">Team</th>
                    <th className="py-2 px-2 text-center">M</th>
                    <th className="py-2 px-2 text-center">W</th>
                    <th className="py-2 px-2 text-center">L</th>
                    <th className="py-2 px-2 text-center hidden md:table-cell">FOR</th>
                    <th className="py-2 px-2 text-center hidden md:table-cell">AGAINST</th>
                    <th className="py-2 px-2 text-center">PTS</th>
                    <th className="py-2 px-2 text-center hidden lg:table-cell">NRR</th>
                    <th className="py-2 px-4 text-center">FORM</th>
                </tr>
                </thead>
                <tbody>
                {data?.map((team, index) => (
                    <tr key={team.TeamID} className="text-gray-800 border-t border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-4">{index + 1}</td>
                        <td className="py-2 px-4 flex items-center gap-2">
                            <Image
                                src={team.TeamLogo}
                                alt={team.TeamName}
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                            <span className="font-medium truncate">{team.TeamName}</span>
                        </td>
                        <td className="py-2 px-2 text-center">{team.Matches}</td>
                        <td className="py-2 px-2 text-center">{team.Wins}</td>
                        <td className="py-2 px-2 text-center">{team.Loss}</td>
                        <td className="py-2 px-2 text-center hidden md:table-cell whitespace-nowrap">{team.ForTeams}</td>
                        <td className="py-2 px-2 text-center hidden md:table-cell whitespace-nowrap">{team.AgainstTeam}</td>
                        <td className="py-2 px-2 text-center font-bold">{team.Points}</td>
                        <td className="py-2 px-2 text-center hidden lg:table-cell">{team.NetRunRate}</td>
                        <td className="py-2 px-4 text-center">
                            <div className="flex justify-center gap-1">
                                {team.Performance.split(',').reverse().map((res: any, idx: number) => (
                                    <span
                                        key={idx}
                                        className={
                                            `w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ` +
                                            (res === 'W'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-red-500 text-white')
                                        }
                                    >
                                            {res}
                                        </span>
                                ))}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default IPLPointsTable;
