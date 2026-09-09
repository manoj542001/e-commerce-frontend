
import { useRoutes } from 'react-router-dom'
import Login from '../pages/auth/Login.jsx'
import AuthRoutes from './authRoutes.js'

export default  function Router(){
    return useRoutes([
        AuthRoutes, 
        // {path:'*', element:<Login/>}
])
}