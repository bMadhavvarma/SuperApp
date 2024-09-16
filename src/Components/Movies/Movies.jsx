import React from 'react'
import styles from './Movies.module.css'
import MoviesList from '../MoviesList/MoviesList'
import profile from "../../assets/image 14.png"
import { useNavigate } from 'react-router-dom'
function Movies() {
  const navigate=useNavigate();
  function NavigatetoHome(){
   navigate('/home')
  }
  return (
    <div className={styles.container}>
      <h1>Super app</h1>
      <p>Entertainment according to your choice</p>
      <img src={profile} alt="profile image" onClick={NavigatetoHome}/>
    <div className={styles.movieListContainer}>
      <MoviesList/>
    </div>
</div>
  )
}

export default Movies