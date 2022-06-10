import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchArticles } from '../../APICalls'
import { NotFound } from '../NotFound/NotFound'
import { Header } from '../Header/Header'
import { ArticlesArea } from '../ArticlesArea/ArticlesArea'
import { ArticleDetail } from '../ArticleDetail/ArticleDetail'
import '../App/App.css'

const App = () => {
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [sortCriteria, setSortCriteria] = useState('date+')

  useEffect(() => {
    fetchCurrentArticles()
  }, [])

  const fetchCurrentArticles = () => {
    fetchArticles()
    .then((res) => {
      if (!res.ok) {
        setErrorMessage('Oops, something went wrong.  Please try again later.')
      } else {
        return res.json()
      }
    })
    .then((data) => {
      return data.results
    })
    .then((articlesData) => {
      setArticles(articlesData)
    })
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header
                setSortCriteria={setSortCriteria}
                sortCriteria={sortCriteria}
                currentArticle={currentArticle}
              />
              {articles && !currentArticle && (
                <ArticlesArea
                  errorMessage={errorMessage}
                  articles={articles}
                  setCurrentArticle={setCurrentArticle}
                  setSortCriteria={setSortCriteria}
                  sortCriteria={sortCriteria}
                />
              )}
              {currentArticle !== null && (
                <ArticleDetail
                  article={currentArticle}
                  setCurrentArticle={setCurrentArticle}
                />
              )}
              {!articles && !currentArticle && <h1>Loading articles.</h1>}
            </>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
