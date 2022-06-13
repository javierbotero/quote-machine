import React, { useEffect } from 'react';
import { gettingQuotes, changeQuote } from './reducers/quotes';
import { useDispatch, useSelector } from 'react-redux';
import { randomNumber, addClassToDivById, removeClassToDivById } from './helpers/helpers';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = (props) => {
  const { twitterIcon } = props;
  const dispatch = useDispatch();
  const quote = useSelector(state => state.quote);
  const handleClick = () => {
    removeClassToDivById('quote-box', 'quote-mounted');
    setTimeout(() => {
      dispatch(changeQuote());
      addClassToDivById('quote-box', 'quote-mounted');
    }, 500)
  };

  useEffect(() => {
    const page = randomNumber(95);
    const callGettingQuotes = async () => await dispatch(gettingQuotes(page));
    callGettingQuotes();
  }, []);

  useEffect(() => {
    addClassToDivById('quote-box', 'quote-mounted');
  })

  return (
    <div className="main">
      <div id="quote-box" className="quote-box">
        <div id="text">{quote ? quote.content : 'No Phrase for now, please reload.'}</div>
        <div id="author">{quote ? quote.author : 'No Phrase for now, please reload.'}</div>
        <button id="new-quote" onClick={handleClick}>New Quote</button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote">
          <FontAwesomeIcon icon={twitterIcon} />
        </a>
      </div>
    </div>
  )
}

export default App;
