import { rootReducer } from './reducers/posts';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

const store = () => createStore(rootReducer, applyMiddleware(thunk));
export const wrapper = createWrapper(store);