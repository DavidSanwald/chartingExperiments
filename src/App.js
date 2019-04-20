import React, { Component } from 'react'
import { createTimeSeries, company } from './dataUtils'
import logo from './logo.svg'
import './App.css'

const test = createTimeSeries(100)
const test2 = company.generateRnd(100)
console.log(test2)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
