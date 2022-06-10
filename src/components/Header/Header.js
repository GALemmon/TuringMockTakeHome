import React from 'react'
import Form from '../Form/Form.js'

export const Header = ({ setSortCriteria, sortCriteria, currentArticle }) => {
  return (
    <div className='header'>
      <h1>NY Times Top Stories</h1>
      {!currentArticle && (
        <Form setSortCriteria={setSortCriteria} sortCriteria={sortCriteria} />
      )}
    </div>
  )
}
