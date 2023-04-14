import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [schemes, setSchemes] = useState([]);
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  const [showAllSchemes, setShowAllSchemes] = useState(false);

  useEffect(() => {
    const fetchSchemes = async () => {
      const res = await axios.get('http://localhost:5000/api/schemes');
      setSchemes(res.data);
    };
    fetchSchemes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSchemeIndex(currentIndex => (currentIndex + 1) % schemes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [schemes]);

  const handleMoreClick = () => {
    setShowAllSchemes(true);
  };

  return (
    <div className="App">
      {schemes.length > 0 && (
        <div>
          {!showAllSchemes && (
            <div>
              <h2>{schemes[currentSchemeIndex].title}</h2>
              <p>{schemes[currentSchemeIndex].description}</p>
              <button onClick={handleMoreClick}>More</button>
            </div>
          )}
          {showAllSchemes && (
            <div>
              {schemes.map((scheme) => (
                <div key={scheme.id}>
                  <h2>{scheme.title}</h2>
                  <p>{scheme.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
