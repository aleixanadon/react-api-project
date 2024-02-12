import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './common/components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
