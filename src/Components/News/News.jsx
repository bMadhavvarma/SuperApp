import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./News.module.css";

function News() {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const requrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80539eb2fc2e4d4c8c5c86ec05d3c6e6";

    try {
      setLoading(true);
      const response = await axios.get(requrl);

      if (response.data.status === "error") {
        throw new Error(response.data.message);
      }

      setArticles(response.data.articles || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    const interval = articles.length
      ? setInterval(() => {
          setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
        }, 10000)
      : null;

    return () => interval && clearInterval(interval);
  }, [articles]);

  const currentArticle = articles[currentArticleIndex] || {};

  return (
    <div className={styles.newsContainer}>
      {loading ? (
        <h2>Loading news...</h2>
      ) : error ? (
        <h2 style={{ color: "red" }}>Error: {error}</h2>
      ) : articles.length === 0 ? (
        <h2>No news found.</h2>
      ) : (
        <>
          <div className={styles.topContainer}>
            <img
              src={currentArticle.urlToImage || "https://via.placeholder.com/400"}
              alt={currentArticle.title || "News Image"}
            />
            <div className={styles.heading}>
              <h1>{currentArticle.title}</h1>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <p>{currentArticle.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default News;
