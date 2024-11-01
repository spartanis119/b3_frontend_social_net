import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicLayout } from '../components/layouts/public/PublicLayout';
import { PrivateLayout} from '../components/layouts/private/PrivateLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Cargamos los componentes de la ruta publica */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Login/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                </Route>
                <Route path='/rsocial' element={<PrivateLayout />}>

                </Route>

                {/* Cargamos lo componentes de la ruta privada */}
            </Routes>
        </BrowserRouter>
    )
}
