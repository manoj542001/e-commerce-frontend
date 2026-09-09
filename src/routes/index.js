
import { useRoutes } from 'react-router-dom'
<<<<<<< HEAD
import Login from '../pages/auth/Login.jsx'
=======
>>>>>>> 1380236b6b0b1b834569464387484f6661213afe
import AuthRoutes from './authRoutes.js'

export default  function Router(){
    return useRoutes([
        AuthRoutes, 
        // {path:'*', element:<Login/>}
])
}