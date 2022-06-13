import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL, QUOTES } from '../constants/constants';
import { randomNumber } from "../helpers/helpers";

const gettingQuotes = (page) => async dispatch => {
  dispatch(requesting());
  await fetch(`${BASE_URL}/${QUOTES}?page=${page}`)
    .then(res => {
      res.json()
        .then(data => {
          const quotes = data.results.map(quote => {
            const { content, author } = quote;
            return { content, author };
          });
          const quote = quotes[randomNumber(quotes.length)];

          dispatch(receiving({ quotes, quote }));
        })
        .catch(err => dispatch(error(err)));
    })
    .catch(err => dispatch(error(err)));
}

const quotes = createSlice({
  name: 'quotes',
  initialState: {
    loading: 'idle',
    quotes: [],

    quote: {}
  },
  reducers: {
    requesting(state, action) {
      state.loading = 'loading...'
    },
    receiving(state, action) {
      state.loading = 'idle';
      state.quotes = action.payload.quotes;
      state.quote = action.payload.quote;
    },
    error(state, action) {
      state.loading = 'error',
      state.quotes = `There was an error: ${action.payload}`
    },
    changeQuote(state, action) {
      state.quote = state.quotes[randomNumber(state.quotes.length)];
    }
  }
});

const quotesReducer = quotes.reducer;
const { requesting, receiving, error, changeQuote } = quotes.actions;

export default quotesReducer;
export { gettingQuotes, changeQuote }