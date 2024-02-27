import { Link } from 'react-router-dom'
import './catCard.css'
import React from 'react'

interface CatCardProps {
  src: string
  description: string;
}

const CatCard: React.FC<CatCardProps> = (props) => {
  const { src, description } = props;
  return (
    <div className='card'>
      <img src={src} alt="" className='card-cat-photo' />
      <div className='card-content'>
        <p className='description'>{description}</p>
        <Link to={""} className='meet-cat-link'>Meet cat</Link>
      </div>
    </div>
  )
}

export default CatCard