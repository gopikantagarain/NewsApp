import React from 'react';

const Article = ({ title, content }) => (
  <div className="article">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Article;