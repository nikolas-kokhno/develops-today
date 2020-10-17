import { combineReducers } from 'redux';
import {
    SET_POSTS,
    CREATE_POST,
    SET_POST,
    IS_LOADING
} from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: true
}

const postsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_POST:
            return {
                ...state,
                post: action.payload
            }
        case CREATE_POST: 
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({ posts: postsReducer });
