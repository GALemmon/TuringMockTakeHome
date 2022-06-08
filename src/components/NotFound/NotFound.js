import React from "react";
import { Link } from "react-router-dom"
import '../NotFound/NotFound.css'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='message-404'>404 - That page does not exist.</h1>
      <Link to='/'>
        <button className='home-button'>Click to return to the main page.</button>
      </Link>
    </div>
  )
}