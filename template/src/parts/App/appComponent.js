import React, { Component } from 'react'

import { Logo } from 'parts/Common'
import { Styles } from 'parts/App'

class App extends Component {
  render() {
    return (
      <div className={ Styles.app }>
        <div className={ Styles.appHeader }>
          <img src={ Logo } className={ Styles.appLogo } alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={ Styles.appIntro }>
          To get started, edit <code>src/parts/App/appComponent.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
