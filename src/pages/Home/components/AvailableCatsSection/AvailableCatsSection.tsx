import { Link } from 'react-router-dom'
import CatCard from '../../../../common/components/CatCard/CatCard'
import catPhoto from '../../../../assets/cat.png'
import './availableCatsSection.css'

const AvailableCatsSection = () => {
  return (
    <section>
      <h2 className='available-cats-h2'>AVAILABLE CATS</h2> 
      <article className='list-of-cats'>
        <CatCard src={catPhoto} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
        <CatCard src={catPhoto} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
        <CatCard src={catPhoto} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
        <CatCard src={catPhoto} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
        <CatCard src={catPhoto} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
      </article>
      <Link to="">See more</Link>
    </section>
  )
}

export default AvailableCatsSection