import { NavLink } from 'react-router-dom'

const Card = ({ name = {}, cca3 = '', flags = {}, capital = [] }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={flags.svg} className='card-img-top' alt={name.common} />
      <div className='card-body'>
        <h5 className='card-title'>{name.common}</h5>
        <p className='card-text'>{capital[0]} </p>
        <p className='card-text'>{cca3} </p>
        <NavLink to={cca3} className='btn btn-primary'>Go Info</NavLink>
      </div>
    </div>
  )
}

export default Card
