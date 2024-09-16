import React, { useEffect, useState } from 'react';
import styles from "./GenreDetails.module.css";

const GenreDetails = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Retrieve the selected genres from local storage
    const storedGenres = localStorage.getItem('selectedGenres');
    if (storedGenres) {
      setGenres(JSON.parse(storedGenres));
    }
  }, []);

  return (
    <div className={styles.GenreContainer}>
      {genres.length > 0 ? (
        genres.map((genre, index) => (
          <div key={index} className={styles.GenreDetailContainer}>
            {genre}
          </div>
        ))
      ) : (
        <p style={{ color: '#fff' }}>No genres selected</p>
      )}
    </div>
  );
};

export default GenreDetails;
