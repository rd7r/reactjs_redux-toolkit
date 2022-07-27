import { Routes, Route } from 'react-router-dom';

import {App} from './components/App';
import {Home} from './components/Home/Home.jsx';
import {Products} from './components/Products/Products';
import { CreateUser } from './components/CreateUser/CreateUser';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='Usuarios' element={<CreateUser/>}/>
        </Routes>
    </App>
);

export {AppRoutes};

