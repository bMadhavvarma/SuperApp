import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import profileimage from "../../assets/image 15.png";
import GenreDetails from '../GenreDetails/GenreDetails';

const Card = () => {
    const [userData, setUserData] = useState({ name: '', email: '', username: '' });

    useEffect(() => {
      // Retrieve and parse the data from local storage
      const storedData = localStorage.getItem('registerFormData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setUserData({
          name: parsedData.name || 'Unknown Name',
          email: parsedData.email || 'Unknown Email',
          username: parsedData.username || 'Unknown Username',
        });
      }
    }, []);
  return (
    <div className={styles.profileDetail}>
        <img src={profileimage} alt="profile" />
        <h1>{userData.name}</h1>
        <p>{userData.email}</p>
        <p style={{ fontSize: '25px', fontWeight: '607' }}>{userData.username}</p>
        <div className={styles.genreDetail}>
          <GenreDetails/>
        </div>
      </div>
  )
}

export default Card
