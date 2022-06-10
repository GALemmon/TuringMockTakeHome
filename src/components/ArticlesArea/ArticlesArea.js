import React, { useState, useEffect } from 'react'
import '../ArticlesArea/ArticlesArea.css'
import { Article } from '../Article/Article'

export const ArticlesArea = ({
  errorMessage,
  articles,
  setCurrentArticle,
  sortCriteria
}) => {
  const [articleCards, setArticleCards] = useState([])
  const [sortedArticles, setSortedArticles] = useState([])

  useEffect(() => {
    sortArticles(articles, sortCriteria)
  }, [articles])

  useEffect(() => {
    sortArticles(articles, sortCriteria)
  }, [sortCriteria])

  useEffect(() => {
    makeArticleCards(sortedArticles)
  }, [sortCriteria, sortedArticles])

  const makeArticleCards = (sortedArticles) => {
    let newArticles = sortedArticles.map((article) => {
      return (
        <Article
          key={article.title}
          id={article.uri.slice(15)}
          article={article}
          setCurrentArticle={setCurrentArticle}
        />
      )
    })
    setArticleCards(newArticles)
  }

  const sortArticles = (articles, sortCriteria) => {
    if (sortCriteria === 'date+') {
      let newSort = sortByNewest(articles)
      setSortedArticles(newSort)
    } else if (sortCriteria === 'date-') {
      let newSort = sortByOldest(articles)
      setSortedArticles(newSort)
    }
  }

  const sortByNewest = (articles) => {
    let sortedArticlesDate = articles.sort((a, b) => {
      return +new Date(a.published_date) - +new Date (b.published_date)
    })
    return sortedArticlesDate
  }

  const sortByOldest = (articles) => {
    let sortedArticlesDate = articles.sort((a, b) => {
      return +new Date(b.published_date) - +new Date(a.published_date)
    })
    return sortedArticlesDate
  }

  return (
    <>
      {errorMessage && <section>errorMessage</section>}
      {!errorMessage && <div className='article-area'>{articleCards}</div>}
    </>
  )
}
