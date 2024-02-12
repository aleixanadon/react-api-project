import { useEffect } from "react";
import useCatApi from "../../hooks/useCatApi"

const Main = () => {

  const { loading, catApiData, fetchData } = useCatApi();

  return (
    <main>
      <button onClick={ () => { fetchData() } }>hola</button>
      {
        loading ? (
          <>loading</>
        ) : (
          <>
            {
              catApiData[0] && <img src={catApiData[0].url} alt="" />
            }
          </>
        )
      }
      
    </main>
  )
}

export default Main