import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { fetchArticles } from '../../APICalls'
import { mockData } from '../../mockData'
import { Header } from '../Header/Header'
import { ArticlesArea } from '../ArticlesArea/ArticlesArea'
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
      <Header />
      <ArticlesArea errorMessage={errorMessage} articles={articles} />
      <Footer />
    </>
  )
}

export default App
