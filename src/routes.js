import { Routes, Route } from 'react-router-dom';

import {App} from './components/App';
import {Home} from './components/Home/Home.jsx';
import {Products} from './components/Products/Products';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Products' element={<Products/>}/>
        </Routes>
    </App>
);

export {AppRoutes};

