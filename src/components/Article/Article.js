import React from "react";
import '../Article/Article.css'

export const Article = ({article}) => {
  return (
    <div className="article">
      <h1>{article.title || 'Unavaliable'}</h1>
      <h2>{article.byline || 'Unavaliable'}</h2>
      <p>{article.abstract || 'Unavaliable'}</p>
    </div>
  )
}