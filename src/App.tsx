import { Route, Routes } from 'react-router-dom'
import { Ignite } from './pages/Ignite'
import { SignIn } from './pages/SignIn'
import './styles/global.css'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/ignite-lab" element={<Ignite />} />
    </Routes>
  )
}