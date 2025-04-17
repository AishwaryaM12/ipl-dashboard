import { useEffect, useState } from "react";

export const useIPLData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/ipl-data");
                const json = await res.json();
                setData(json?.Matchsummary || []);
            } catch {
                setError("Failed to fetch IPL data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
};
