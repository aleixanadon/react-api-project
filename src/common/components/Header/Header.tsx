import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/react-api-project/">🐱 ADOPT A MEOW</Link>
      </h1>
      <nav>
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
    </header>
  )
}

export default Header