import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_ERROR } from './actionTypes';
import { request,received,error } from '../shared/redux/baseActions';
import HomeService from '../services/HomeService';

export const fetchHome = () => async(dispatch) => {
    dispatch(request(FETCH_POSTS_REQUEST));
    try {
        const res = await HomeService.getHome();
        dispatch(received(FETCH_POSTS_SUCCESS, res.data));
    } catch (e) {
        dispatch(error(FETCH_POSTS_ERROR));
    }
}