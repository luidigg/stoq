import { createBrowserRouter } from "react-router-dom";
import Register from './pages/registro'
import Login from './pages/login'
import Inicio from './pages/inicio'
import Estoque from './pages/estoque'
import Relatorio from './pages/relatorios'
import Perfil from './pages/meu-perfil'
// import Colaboradores from "./pages/colaboradores";
//import Config from './pages/configuracoes'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Register />
    },
    {
        path: '/registro',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/inicio',
        element: <Inicio />
    },
    {
        path: '/estoque',
        element: <Estoque />
    },
    {
        path: '/relatorio',
        element: <Relatorio />
    },
    {
        path: '/meu-perfil',
        element: <Perfil />
    }
    // {
    //     path:'/colaboradores',
    //     element: <Colaboradores/>
    // },
    // {
    //     path: '/configuracoes',
    //     element: <Config/>
    // }
])

export default Router