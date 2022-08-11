import { Routes, Route } from 'react-router-dom';

import {App} from './components/App';
import { Principal } from './components/Home/Principal';
import {Products} from './components/Products/Products';
import { CreateUser } from './components/CreateUser/CreateUser';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='Usuarios' element={<CreateUser/>}/>
        </Routes>
    </App>
);

export {AppRoutes};

