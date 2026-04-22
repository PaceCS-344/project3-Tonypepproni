import { useState, useEffect } from "react";

function useGitHubRepos(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const fetchRepos = async () => {
            try {
                setLoading(true);

                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) throw new Error('Failed to fetch repo');
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
}

export default useGitHubRepos