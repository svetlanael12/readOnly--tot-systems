import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootStoreContext } from "./hooks/root-store-context"
import { RootStore } from './store/globalStore'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>  
      <RootStoreContext.Provider value={new RootStore()}>
        <App/>
      </RootStoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
