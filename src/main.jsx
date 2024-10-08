import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast'


export const Context = createContext({ isAuthenticated: false });

const Appwrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }} >
      {/* <BrowserRouter> */}
        <App />
        
      {/* </BrowserRouter> */}
    </Context.Provider>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Appwrapper />
  </React.StrictMode>,
)
