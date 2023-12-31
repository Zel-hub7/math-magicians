import React, { useEffect, useState } from 'react';
import './quotes.css';

function Quotes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-key': 'y7y+TjrvdE97ECwfFUcgGQ==MXJnbsVOvq7sABp3',
            },
          },
        );
        const json = await res.json();
        setQuote(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setLoading, setError, setQuote]);

  if (loading) return <div className="loading">Quote is loading...</div>;
  if (error) return <div>Error!!!</div>;
  return (
    <div className="main-body">
      {quote.map((item) => (
        <div key={item.id} className="quotes-container">
          <p className="quote">{item.quote}</p>
          <p className="author">{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
