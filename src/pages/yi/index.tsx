import { useState } from 'react'
import './index.scoped.css'
import InputArea from './components/InputArea'
import ResultArea from './components/ResultArea'
import store from '@/store'

function Yi() {
  return (
    <div className="App">
      <InputArea divination={store.divination} />
      <h1 />
      <ResultArea />
    </div>
  )
}

export default Yi