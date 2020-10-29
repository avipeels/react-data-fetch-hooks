import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
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

  const input = <input
    type="text"
    value={query}
    onChange={e => setQuery(e.target.value)}
  />

  const searchBox = <button
    type="button"
    onClick={() => setUrl(`http://hn.algolia.cddsdsom/api/v1/search?query=${query}`)}
  >Search</button>;

  const errorMessage = error && <div>Something went wrong ...</div>;
  const loadingIndicator = <div>Loading...</div>;

  const hits = <ul>
    {data.hits.map(hit => (
      <li key={hit.objectId}>
        <a href={hit.url}>{hit.title}</a>
      </li>
    ))}
  </ul>;

  return (
    <>
      {input}
      {searchBox}
      {errorMessage}
      {loading ? loadingIndicator : hits}
    </>
  )
}

export default App;
