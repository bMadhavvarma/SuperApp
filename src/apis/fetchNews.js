import axios from "axios";

export const fetchNews = async () => {
  const requrl = "https://newsapi.org/v2/everything?q=tesla&from=2024-08-15&sortBy=publishedAt&apiKey=1a8459d107684d2b842767b8ab805286";
  
  try {
    const response = await axios.get(requrl);
    return response.data.articles; // Return the fetched articles
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Return an empty array in case of error
  }
};
