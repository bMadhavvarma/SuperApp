import React from 'react'
import styles from "./MoviesList.module.css"
import action1 from "../../assets/image 20.png"
import action2 from "../../assets/image 21.png"
import action3 from "../../assets/image 22.png"
import action4 from "../../assets/image 23.png"
import thriller1 from "../../assets/image 32.png"
import thriller2 from "../../assets/image 33.png"
import thriller3 from "../../assets/image 34.png"
import thriller4 from "../../assets/image 35.png"
import horror1 from "../../assets/image 36.png"
import horror2 from "../../assets/image 37.png"
import horror3 from "../../assets/image 38.png"
import horror4 from "../../assets/image 39.png"



function MoviesList() {
  return (
    <div className={styles.container} >
      <h1>Action</h1>
      <div className= {styles.specificGenre}>
     <img src={action1} alt="" />
     <img src={action2} alt="" />
     <img src={action3} alt="" />
     <img src={action4} alt="" />
      </div>
      <h1>Thriller</h1>
      <div className= {styles.specificGenre}>
     <img src={thriller1} alt="" />
     <img src={thriller2} alt="" />
     <img src={thriller3} alt="" />
     <img src={thriller4} alt="" />
      </div>
      <h1>Horror</h1>
      <div className= {styles.specificGenre}>
     <img src={horror1} alt="" />
     <img src={horror2} alt="" />
     <img src={horror3} alt="" />
     <img src={horror4} alt="" />
      </div>
    </div>
  )
}

export default MoviesList