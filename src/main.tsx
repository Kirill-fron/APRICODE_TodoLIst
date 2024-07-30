import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'mobx-react'
import { todoStore } from './store/TodoStore'
import './styles/reset.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider todoStore={todoStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
