import './heroSection.css'
import { Link } from "react-router-dom"
import cat from '../../../../assets/cat.jpg'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <article>
        <div>
          <h2 className='h2-title'>ADOPT MEOW!</h2>
          <p className='h2-subtitle'>Everyday's a purrfect day to adopt your new kitty friend!</p>
        </div>
        <div className='adopt-now-div'>
          <Link to={""} className="">
            ADOPT NOW
          </Link>
        </div>
        <img src={cat} alt="" className='cat-photo' />
      </article>
    </section>
  )
}

export default HeroSection