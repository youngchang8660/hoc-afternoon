import React, { Component } from 'react'
import './App.css'

import ExchangedCurrency from './Components/currencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <ExchangedCurrency />
      </>
    )
  }
}

export default App