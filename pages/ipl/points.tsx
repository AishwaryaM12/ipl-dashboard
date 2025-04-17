import IPLPointsTable from '@/components/IPLPointsTable/IPLPointsTable';
import Navbar from "@/components/Navbar/Navbar";

export default function PointsPage() {
    return (
        <main className="min-h-screen bg-blue-900">
            <Navbar />
            <section className="max-w-4xl mx-auto mt-4">
                <h1 className="text-2xl font-bold mb-4 text-center">IPL 2025 Points Table</h1>
                <IPLPointsTable/>
            </section>
        </main>
    );
}
