import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { fetchNews } from "../../apis/fetchNews"; // Import the fetchNews function

function News() {
  const [newsTitle, setNewsTitle] = useState(""); // State to store the news title
  const [newsImageUrl, setNewsImageUrl] = useState(""); // State to store the news image URL
  const [newsContent, setNewsContent] = useState(""); // State to store the news content
  const [articles, setArticles] = useState([]); // State to store the fetched articles
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // State to track the current article

  useEffect(() => {
    // Fetch the news when the component mounts
    const fetchData = async () => {
      const newsData = await fetchNews(); // Call fetchNews from the separate file
      setArticles(newsData); // Set the fetched articles to the state
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Automatically change article every 10 seconds
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 10000); // 10000ms = 10 seconds

      return () => clearInterval(interval); // Clear interval on unmount
    }
  }, [articles]);

  useEffect(() => {
    // Update the displayed article
    if (articles.length > 0) {
      const article = articles[currentArticleIndex];
      setNewsTitle(article.title);
      setNewsContent(article.description);
      setNewsImageUrl(article.urlToImage);
    }
  }, [currentArticleIndex, articles]);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.topContainer}>
        <img src={newsImageUrl} alt="news image" />
        <div className={styles.heading}>
          <h1>{newsTitle ? newsTitle : "Loading..."}</h1> {/* Display the title or loading message */}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>{newsContent}</p>
      </div>
    </div>
  );
}

export default News;
