import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom"
import Yi from '@/pages/yi';
import Clock from '@/pages/clock';


function App() {
  return (
    // <div className="App">
    //   <InputArea divination={store.divination} />
    //   <h1 />
    //   <ResultArea />
    // </div>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={< Yi/>} />
        <Route path="clock" element={<Clock />} />
      </Route>
    </Routes>
  )
}

export default App