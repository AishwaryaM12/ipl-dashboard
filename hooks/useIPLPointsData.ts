import { useEffect, useState } from "react";

export const useIPLPointsData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/ipl-points-data");
                const json = await res.json();
                setData(json?.points || []);
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
