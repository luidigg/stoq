import { createBrowserRouter } from "react-router-dom";
import Register from './pages/register'
import Login from './pages/login'
import Inicio from './pages/inicio'
import Estoque from './pages/estoque'
import Relatorio from './pages/relatorios'
import Colaboradores from "./pages/colaboradores";
import Perfil from './pages/MeuPerfil'
import Config from './pages/configuracoes'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/> 
    },
    {
        path: '/inicio',
        element: <Inicio/>
    },
    {
        path: '/estoque',
        element: <Estoque/>
    },
    {
        path: '/relatorio',
        element: <Relatorio/>
    },
    {
        path:'/colaboradores',
        element: <Colaboradores/>
    },
    {
        path: '/meu-perfil',
        element: <Perfil/>
    },
    {
        path: '/configuracoes',
        element: <Config/>
    }
])

export default router 