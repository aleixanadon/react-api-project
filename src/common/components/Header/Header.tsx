import { Link } from 'react-router-dom'
import './header.css'
import { useState } from 'react'

const Header = () => {

  const [isNavbarOpen, setNavbarVisibility] = useState(true);
  const toggleNavbar = () => setNavbarVisibility(!isNavbarOpen);

  return (
    <header>
      <h1>
        <Link to="/react-api-project/" className='title-container'>
          <div className='icon'>🐱</div>
          <div className='app-title'>ADOPT A MEOW</div>
        </Link>
      </h1>
      <nav className={isNavbarOpen ? 'navbar-open' : ''}>
        <ul>
          <li>
            <Link to="/react-api-project/pricing">PRICING</Link>
          </li>
          <li>
            <Link to="/react-api-project/documentation">DOCUMENTATION</Link>
          </li>
          <li>
            <Link to="/react-api-project/promotion">PROMOTION</Link>
          </li>
          <li>
            <Link to="/react-api-project/support">SUPPORT</Link>
          </li>
        </ul>
      </nav>
      <button 
        className='dropdown-button'
        onClick={toggleNavbar}
      >
        ☰
      </button>
    </header>
  )
}

export default Header