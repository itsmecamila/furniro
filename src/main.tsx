import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

import Router from './Router.tsx'
import { persistor, store } from './redux/index.ts'

///Função que renderiza todos componentes da aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/> {/* Componente das rotas */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
