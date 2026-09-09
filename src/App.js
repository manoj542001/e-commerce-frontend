<<<<<<< HEAD
import { useState } from 'react'
=======
>>>>>>> 1380236b6b0b1b834569464387484f6661213afe
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Toaster} from 'react-hot-toast';

function App() {

  return (
    // <>
  <BrowserRouter>
  <Toaster/>
  <Router/>
  </BrowserRouter>
    // </>
  )
}

export default App


