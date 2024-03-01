import { Link } from 'react-router-dom'
import CatCard from '../../../../common/components/CatCard/CatCard'
import catPhoto from '../../../../assets/cat.png'
import './availableCatsSection.css'
import useCatApi from '../../../../common/hooks/useCatApi'
import { useEffect } from 'react'

const AvailableCatsSection = () => {
  const { catApiData, fetchData, loading } = useCatApi();

  useEffect(() => {
    fetchData(16)
  }, []);

  return (
    <section>
      <h2 className='available-cats-h2'>AVAILABLE CATS</h2> 
      <article className='list-of-cats'>
        {
          loading ? (
            <>loading</>
          ) : (
            <>
              {
                catApiData.map((value, _index) => (
                  <CatCard src={value.url} description='Encantador gato egipcio, juguetón y curioso, tiene 4 meses de edad.' />
                ))
              }
            </>
          )
        }
      </article>
      <Link to="">See more</Link>
    </section>
  )
}

export default AvailableCatsSection