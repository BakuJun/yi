import { useState } from 'react'
import './App.css'
import InputArea from './components/InputArea'
import ResultArea from './components/ResultArea'
import store from './store'

function App() {
  return (
    <div className="App">
      <InputArea divination={store.divination} />
      <h1 />
      <ResultArea />
    </div>
  )
}

export default App