import { PostType, IdType } from './../../types/post';
import axios from 'axios';
import {
    SET_POSTS,
    SET_POST,
    CREATE_POST,
    IS_LOADING
} from '../types';

const baseURL = 'https://simple-blog-api.crew.red';

const getPosts = (posts: PostType) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

const getPost = (post: PostType) => {
    return {
        type: SET_POST,
        payload: post
    }
}

const createPost = (post: PostType) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

const isLoading = () => {
    return {
        type: IS_LOADING,
        payload: true
    }
}

const isLoaded = () => {
    return {
        type: IS_LOADING,
        payload: false
    }
}

export const getPostsList = () => (dispatch: any) => {
    dispatch(isLoading());

    axios.get(`${baseURL}/posts`)
        .then(data => {
            if (data.status === 200) {
                dispatch(getPosts(data.data));
                dispatch(isLoaded());
            }
        })
        .catch(errors => {
            console.error(errors);
        }
    );
}

export const fetchPost = (postID: IdType) => (dispatch: any) => {
    dispatch(isLoading());

    axios.get(`${baseURL}/posts/${postID}`)
        .then(data => {
            dispatch(getPost(data.data));
            dispatch(isLoaded());
        })
        .catch(errors => {
            console.error(errors);
        }
    );
}

export const creareNewPost = (data: any) => (dispatch: any) => {
    axios.post(`${baseURL}/posts`, data)
        .then(({data}) => {
            dispatch(createPost(data));
        })
        .catch(errors => {
            console.error(errors);
        }
    );
}