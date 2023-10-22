import { Suspense, lazy } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom"


const Yi = lazy(() => import('@/pages/yi'))
const Clock = lazy(() => import('@/pages/clock'))
const JingLuo = lazy(() => import('@/pages/jingluo'))


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      }>
        <Route index element={<Clock />} />
        <Route path="/jingluo/:pName" element={<JingLuo />} />
        <Route path="yi" element={<Yi />} />
      </Route>
    </Routes>
  )
}

export default App