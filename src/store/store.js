import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../reducers/quotes';

const store = configureStore({ reducer: quotesReducer });

export default store;
