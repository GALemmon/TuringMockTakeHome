import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { fetchArticles } from '../../APICalls'
import { NotFound } from '../NotFound/NotFound'
import { mockData } from '../../mockData'
import { Header } from '../Header/Header'
import { ArticlesArea } from '../ArticlesArea/ArticlesArea'
import { ArticleDetail } from '../ArticleDetail/ArticleDetail'
import { Footer } from '../Footer/Footer'

const App = () => {
  const [articles, setArticles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchCurrentArticles()
  }, [])

  useEffect(() => {
    console.log(articles)
  }, [articles])

  const fetchCurrentArticles = () => {
    setArticles(mockData.results)
    // fetchArticles().then((res) => {
    //   if (!res.ok) {
    //     setErrorMessage('Oops, something went wrong.  Please try again later.')
    //   } else {
    //     let articleData = res.json()
    //     return setArticles(articleData)
    //   }
    // })
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header />
              <ArticlesArea errorMessage={errorMessage} articles={articles} />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/:id'
          render={({ match }) => <ArticleDetail id={match.params.id} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
