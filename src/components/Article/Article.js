import React from 'react'
import { Link } from 'react-router-dom'
import '../Article/Article.css'

export const Article = ({ article }) => {
  let url = `/${article.title}`
  return (
    <Link to={url} style={{ textDecoration: 'none', color: '#000' }}>
      <div className='article'>
        <h1>{article.title || 'Unavaliable'}</h1>
        <h2>{article.byline || 'Unavaliable'}</h2>
        <p>{article.abstract || 'Unavaliable'}</p>
      </div>
    </Link>
  )
}
