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


// todo
// 1. postcss done
// 2. mobx store
// 3. antd
// 4. 64卦