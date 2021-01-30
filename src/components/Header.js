import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './Button'
const Header = ({ title, onAdd, showAdd }) => {
  return (
        <header className = "header">
            <h1>{ title }</h1>
            <Button onClick = {onAdd}
                color = {showAdd ? 'red' : 'green'}
                text = { showAdd ? 'Close' : 'Add' }
            />
        </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showAdd: PropTypes.func
}

export default Header
