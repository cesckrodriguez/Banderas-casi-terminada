// Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './estiles/index.css'
// Componentes
import Router from './Router'

const Raiz = createRoot(document.getElementById('root'))

Raiz.render(
  <StrictMode>
    <Router />
  </StrictMode>
)
