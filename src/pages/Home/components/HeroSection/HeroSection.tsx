import './heroSection.css'
import { Link } from "react-router-dom"
import catPhoto from '../../../../assets/cat.png'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <article className='left-side-article'>
        <div className='titles-div'>
          <h2 className='h2-title'>LIVE TOGETHER</h2>
          <p className='p-slogan'>Everyday's a purrfect day to adopt your new kitty friend!</p>
        </div>
        <div className='links-div'>
          <Link to="" className='adopt-link'>I WANT TO ADOPT!</Link>
          <Link to="" className='terms-link'>READ OUR TERMS</Link>
        </div>
      </article>
      <article className='right-side-article'>
        <img src={catPhoto} alt="" className='cat-photo' />
      </article>
    </section>
  )
}

export default HeroSection