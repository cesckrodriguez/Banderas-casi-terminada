import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { code } = useParams()
  const urlIndividual = `https://restcountries.com/v3.1/alpha/${code}`
  const { data, loading } = useGetData(urlIndividual)
  return (
    <div className='container my-4'>
      <section className='row'>
        {loading
          ? <h1 className='text-center text-white'>Cargando...</h1>
          : <div>
            <img src={data[0].flags.svg} alt={data[0].name.common} height='100' />
            <h1>Pais : {data[0].name.common}</h1>
            <h2>Capital : {data[0].capital}</h2>
            <h3>Codigo : {data[0].cca3} </h3>
            </div>}
      </section>
    </div>
  )
}

export default Country
