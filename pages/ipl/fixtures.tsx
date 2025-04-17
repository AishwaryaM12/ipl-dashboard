import IPLMatchList from '@/components/IPLMatch/IPLMatchList';
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function FixturesPage() {
    return <main className="min-h-screen bg-blue-900">
        <Navbar />
        <h1 className="text-3xl font-bold text-center mb-6 mt-4">IPL Match Schedule</h1>
        <IPLMatchList currentTab={'fixtures'}/>
    </main>;
}
