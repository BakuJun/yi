import { useEffect, useState } from 'react'
import InputArea from './components/InputArea'
import ResultArea from './components/ResultArea'
import store from '@/store'
import { setPageTitle } from '@/common/utils'

function Yi() {
  useEffect(() => {
    setPageTitle('梅花易数')
  }, [])

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