import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./News.module.css";

function News() {
  const [articles, setArticles] = useState([]); // Store news articles
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Track the current article

  const fetchNews = async () => {
    const requrl = "https://newsapi.org/v2/everything?q=tesla&from=2025-02-06&sortBy=publishedAt&apiKey=80539eb2fc2e4d4c8c5c86ec05d3c6e6";

    try {
      const response = await axios.get(requrl);
      console.log("News Data:", response.data); // Debugging
      setArticles(response.data.articles || []); // Store fetched articles
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]); // Prevent crashes by setting an empty array
    }
  };

  useEffect(() => {
    fetchNews(); // Fetch news on mount

    // Auto-refresh article every 10 seconds
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [articles]);

  const currentArticle = articles[currentArticleIndex] || {}; // Get current article safely

  return (
    <div className={styles.newsContainer}>
      <div className={styles.topContainer}>
        <img
          src={currentArticle.urlToImage || "https://via.placeholder.com/400"}
          alt={currentArticle.title || "News Image"}
        />
        <div className={styles.heading}>
          <h1>{currentArticle.title || "Loading news..."}</h1>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>{currentArticle.description || "Please wait while we load the latest news."}</p>
      </div>
    </div>
  );
}

export default News;
