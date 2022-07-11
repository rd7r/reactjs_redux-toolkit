import { combineReducers } from '@reduxjs/toolkit';
import { HomeReducer } from '../../reducers/homeReducer';
const rootReducer = combineReducers({
    HomeReducer
});
export {rootReducer};
