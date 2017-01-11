import React, { Component } from 'react'

import { Header } from 'parts/Header'
import { Intro } from 'parts/Intro'

import { Styles } from 'parts/App'


class App extends Component {
  render() {
    return (
      <div className={ Styles.app }>
        <Header />
        <Intro />
      </div>
    )
  }
}

export default App
