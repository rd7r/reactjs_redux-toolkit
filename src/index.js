import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './shared/redux/configureStore';
import './index.css';
import { AppRoutes }  from './routes';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import 'admin-lte/dist/css/adminlte.min.css';
// import 'admin-lte/dist/js/adminlte.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = (Component) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>  
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}
renderApp(AppRoutes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
