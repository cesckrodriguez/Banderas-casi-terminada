import useGetData from '../hooks/useGetData'
import Card from './Card'

const urlGlobal = 'https://restcountries.com/v3.1/all'

const Countries = () => {
  const { data, loading } = useGetData(urlGlobal)

  return (
    <div className='container my-4'>
      <section className='row'>
        {loading
          ? <h1 className='text-center text-white'>Cargando...</h1>
          : data.map((country, index) => <aside className='col-md-3 my-4' key={index}>
            <Card {...country} />
          </aside>)}
      </section>
    </div>
  )
}

export default Countries
