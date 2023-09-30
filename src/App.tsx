import { lazy } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom"


const Yi = lazy(() => import('@/pages/yi'))
const Clock = lazy(() => import('@/pages/clock'))


function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Clock />} />
        <Route path="yi" element={<Yi />} />
      </Route>
    </Routes>
  )
}

export default App