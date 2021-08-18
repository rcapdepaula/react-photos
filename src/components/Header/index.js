import React from 'react'
import { Wrapper, Inner } from './Header.styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Link to='/'>
          <span>React-Photos</span>
        </Link>
      </Inner>
    </Wrapper>
  )
}

export default Header
