import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import QuotePage from './pages/quote.jsx';

const app = (
  <QuotePage/>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('stockQuotes'),
    function() {
      console.timeEnd('react-app')
    }
  );
});
