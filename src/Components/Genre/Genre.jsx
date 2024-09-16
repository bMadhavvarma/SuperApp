import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import styles from "./Genre.module.css";
import action from "../../assets/image 2.png";
import drama from "../../assets/image 3.png";
import romance from "../../assets/image 4.png";
import thriller from "../../assets/image 6.png";
import western from "../../assets/image 7.png";
import horror from "../../assets/image 8.png";
import fantacy from "../../assets/image 9.png";
import music from "../../assets/image 10.png";
import fiction from "../../assets/image 11.png";
import BlockCard from "../BlockCard/BlockCard";
import Chips from "../Chips/Chips";

function Genre() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const Genre = [
    {
      id: "Action",
      color: "#FF5209",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={action}
          alt="Action genre"
        />
      ),
    },
    {
      id: "Drama",
      color: "#D7A4FF",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={drama}
          alt="Drama genre"
        />
      ),
    },
    {
      id: "Romance",
      color: "#11B800",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={romance}
          alt="Romance genre"
        />
      ),
    },
    {
      id: "Thriller",
      color: "#84C2FF",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={thriller}
          alt="Thriller genre"
        />
      ),
    },
    {
      id: "Western",
      color: "#902500",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={western}
          alt="Western genre"
        />
      ),
    },
    {
      id: "Horror",
      color: "#7358FF",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={horror}
          alt="Horror genre"
        />
      ),
    },
    {
      id: "Fantacy",
      color: "#FF4ADE",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={fantacy}
          alt="Fantacy genre"
        />
      ),
    },
    {
      id: "Music",
      color: "#E61E32",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={music}
          alt="Music genre"
        />
      ),
    },
    {
      id: "Fiction",
      color: "#6CD061",
      image: (
        <img
          style={{ width: "120px", height: "80px" }}
          src={fiction}
          alt="Fiction genre"
        />
      ),
    },
  ];
  useEffect(()=>{
    let userDetails=localStorage.getItem("registerFormData");
    if(!userDetails){
      userDetails=JSON.parse(userDetails);
      navigate("/")
    }
  })
  
  function handleNextPage() {
    // Store the selected categories in localStorage
    localStorage.setItem("selectedGenres", JSON.stringify(categories));
    navigate('/home');
    console.log("Selected Genres:", categories);
    // You can add navigation logic here if needed
  }

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh" }}>
          {categories.map((category) => (
            <Chips
              key={category}
              category={category}
              categoriesList={categories}
              setCategories={setCategories}
            />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {Genre.map((genre) => (
          <BlockCard
            genreDetails={genre}
            key={genre.id}
            categoriesList={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleNextPage}>
        Next page
      </button>
    </div>
  );
}

export default Genre;
