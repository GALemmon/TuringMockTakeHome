import React from 'react'
import './Form.css'

const Form = ({ setSortCriteria, sortCriteria }) => {
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }

  return (
    <form className='sort-menu'>
      <div className='sort-dropdown'>
        <label htmlFor='sort'>Sort by: </label>
        <select
          name='sort'
          onChange={(e) => handleSortChange(e)}
          value={sortCriteria}
        >
          <option value='date+'>Newest</option>
          <option value='date-'>Oldest</option>
        </select>
      </div>
    </form>
  )
}

export default Form
