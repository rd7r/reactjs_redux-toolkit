// creamos el reducers del Home
import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_ERROR } from '../actions/actionTypes';
import { getNewState }  from '../shared/utils/frontend';
const initialState = {
    posts: [],
    isLoading: false
}

export const HomeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case FETCH_POSTS_REQUEST:{
            return getNewState(state, {isLoading: true})
        }
        case FETCH_POSTS_SUCCESS:{
            const { payload: {heroe} } = actions;
            return getNewState(state, {
                heroe,
                isLoading: false
            });
        }
        case FETCH_POSTS_ERROR: {
            return getNewState(state, {isLoading: false})
        }
        default: return state;
    }
}