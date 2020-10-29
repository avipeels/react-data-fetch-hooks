import React, { useState } from 'react';
import useApi from './Hooks/useApi';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('redux');
  const [{ data, loading, error }, fetch] = useApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  const input = <input
    type="text"
    value={query}
    onChange={e => setQuery(e.target.value)}
  />

  const searchBox = <button
    type="submit"
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
      <form
        onSubmit={(e) => {
          fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
          e.preventDefault();
        }}
      >
        {input}
        {searchBox}
      </form>
      {errorMessage}
      {loading ? loadingIndicator : hits}
    </>
  )
}

export default App;
