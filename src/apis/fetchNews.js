import axios from "axios";

export const fetchNews = async () => {
  const requrl = "https://newsapi.org/v2/everything?q=tesla&from=2025-02-06&sortBy=publishedAt&apiKey=80539eb2fc2e4d4c8c5c86ec05d3c6e6";
  
  try {
    const response = await axios.get(requrl);
    return response.data.articles; // Return the fetched articles
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Return an empty array in case of error
  }
};
