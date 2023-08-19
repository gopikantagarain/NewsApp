import React, { useState, useEffect } from 'react';
import Article from '../components/Article';
import { fetchArticles } from '../utils/firebase';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
    };

    getArticles();
  }, []);

  return (
    <div>
      <h1>News App</h1>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

export default Home;