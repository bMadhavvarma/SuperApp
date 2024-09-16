import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from "../Card/Card"
import TextArea from '../TextArea/TextArea'
import Weather from '../Weather/Weather'
import News from "../News/News"
import styles from "./Home.module.css"
function Home() {
  const navigate = useNavigate();
  function handleNextPage() {
   
    navigate('/movie');
   
  }
  return (
    <div className={styles.homepage}>
    <div style={{display:"flex"}}>
   <Card/>
   <TextArea/>
   <Weather/>
   <News/>

    </div>
    <button className={styles.but} onClick={handleNextPage}>Next Page</button>
  </div>
  )
}

export default Home