// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './reducers/productSlice';

// export default configureStore({
//   reducer: {
//     product: productsReducer,
//   },
// })

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/index'
const store = createStore(reducers, applyMiddleware(thunk));
export default store;