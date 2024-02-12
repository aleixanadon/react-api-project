import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './common/components/Header/Header'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
