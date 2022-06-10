import React from 'react'
import '../ArticleDetail/ArticleDetail.css'
// import { useParams } from 'react-router-dom'

export const ArticleDetail = ({ article, setCurrentArticle }) => {
  return (
    <div className='detail'>
      <h1>{article.title}</h1>
      <h2>{article.byline}</h2>
      <h3>{article.section}</h3>
      <p>{article.abstract}</p>
      <a href={article.url}>Go to article on NYTimes.com</a><br/><br/>
      <button onClick={(e) => setCurrentArticle(null)}>
        Click here to retun home
      </button>
    </div>
  )
}
