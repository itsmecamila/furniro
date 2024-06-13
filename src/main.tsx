import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'
import './index.css'

///Função que renderiza todos componentes da aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router/> {/* Componente das rotas */}
  </React.StrictMode>
)
