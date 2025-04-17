import IPLDashBoard from "@/components/IPLDashboard/IPLDashBoard";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
    return <main className="min-h-screen bg-blue-900">
        <Navbar />
        <IPLDashBoard/>
    </main>;
        }
