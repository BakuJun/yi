import { useState } from 'react'
import InputArea from './components/InputArea'
import ResultArea from './components/ResultArea'
import store from '@/store'

function Yi() {
  return (
    <>
      {
        // @ts-ignore 
        <InputArea divination={store.divination} />
      }
      <h1 />
      <ResultArea />
    </>
  )
}

export default Yi