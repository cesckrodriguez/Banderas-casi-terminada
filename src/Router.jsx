import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App'
import Countries from './components/Countries'
import Country from './components/Country'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Countries />} />
          <Route path=':code' element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
