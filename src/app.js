import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import QuotePage from './pages/quote.jsx';

jQuery.ajax({
  method: 'GET',
  url: 'getEnv',
  success: (result) => {
    const user = result.user;
    const envVars = result.envVars;

    const app = (
      <QuotePage user={user} envVars={envVars}/>
    )

    jQuery(function() {
      ReactDOM.render(
        app,
        document.getElementById('stockQuotes'),
        function() {
          console.timeEnd('react-app')
        }
      );
    })
  }
});
