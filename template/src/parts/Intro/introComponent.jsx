import React, { Component } from 'react'

import { Styles } from 'parts/Intro'

class Intro extends Component {
  render() {
    return (
      <p className={ Styles.intro }>
        To get started, edit <code>src/parts/App/appComponent.js</code> and save to reload.
      </p>
    )
  }
}

export default Intro
