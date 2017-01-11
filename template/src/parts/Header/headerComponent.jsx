import React, { Component } from 'react'

import { Logo } from 'parts/Common'

import { Styles } from 'parts/Header'

class Header extends Component {
  render() {
    return (
      <div className={ Styles.header }>
        <img src={ Logo } className={ Styles.headerLogo } alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default Header
