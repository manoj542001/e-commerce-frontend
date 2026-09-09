import { useState } from 'react'
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


