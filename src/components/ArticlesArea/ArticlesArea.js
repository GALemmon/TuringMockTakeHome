import React, { useState, useEffect } from 'react'
import { Article } from '../Article/Article'

export const ArticlesArea = ({ errorMessage, articles }) => {
  const [articleCards, setArticleCards] = useState([])

  useEffect(() => {
    makeArticleCards()
  }, [articles])

  const makeArticleCards = () => {
    let newArticles = articles.map((article) => {
      return <Article key={article.title} article={article} />
    })
    setArticleCards(newArticles)
  }
  return (
    <>
      {errorMessage && <section>errorMessage</section>}
      {!errorMessage && <div>{articleCards}</div>}
    </>
  )
}