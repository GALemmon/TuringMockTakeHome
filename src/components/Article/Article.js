import React from 'react'
import '../Article/Article.css'

export const Article = ({ id, article, setCurrentArticle }) => {
  return (
    <div
      id={id}
      className='article'
      onClick={(e) => setCurrentArticle(article)}
    >
      <h1>{article.title || 'Unavaliable'}</h1>
      <h2>{article.byline || 'Unavaliable'}</h2>
      <p>{article.abstract || 'Unavaliable'}</p>
    </div>
  )
}
