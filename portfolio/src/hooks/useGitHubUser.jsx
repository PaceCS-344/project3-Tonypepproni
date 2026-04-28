import { useState, useEffect } from "react";

function useGitHubUser(username) {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const fetchUser = async () => {
            try {
                setLoading(true);

                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) throw new Error('Failed to fetch user');
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    return { user, loading, error };
}

export default useGitHubUser