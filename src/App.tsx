import { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css';

import Search from './components/Search/Search';
import Grid from './components/Grid/Grid';

// Own util
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false)
        setError(true);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = useMemo(() => {
     if(!debouncedSearchTerm) {
      return userData;
    }

    return userData.filter((user) => {
      return user.firstname.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
    })
  }, [userData, debouncedSearchTerm])

  const onSearchCallback = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error loading the data</p>;
  }

  return (
    <div className="m-3">
      <Search onSearchCallback={onSearchCallback} />
      <Grid users={filteredUsers} />
    </div>
  );
}

export default App;
