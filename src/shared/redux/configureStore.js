import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

const store = configureStore({
    reducer: rootReducer
})

export {store};
// const configureStore = (initialState) => {
//     const middleware = [thunk];
//     return createReducer(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// }

// export {configureStore};

