import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login'
import Inicio from './pages/inicio'
import Estoque from './pages/estoque'
import Relatorio from './pages/relatorios'
import Perfil from './pages/meu-perfil'
import Administracao from "./pages/administracao";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
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
    },
    {
        path:'/administracao',
        element: <Administracao/>
    }
])

export default Router