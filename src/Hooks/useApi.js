import { useState, useEffect } from 'react';
import axios from 'axios';
const useApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);
            try {
                const result = await axios.get(url)
                setData(result.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return [{ data, loading, error }, setUrl];
}

export default useApi;
