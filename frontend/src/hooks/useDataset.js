import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function useDataset() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, error } = await supabase.from('cards').select('*');
      if (error) {
        setError(error.message || 'Error fetching data');
        setData([]);
      } else {
        setData(data);
        setError(null);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
