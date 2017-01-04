import React from 'react';

export default class SearchQuotes extends React.Component {
  render() {
    const content = <form onSubmit={this._handleSearchQuote.bind(this)}>
                        <label><input type="text" placeholder="&#xf002; Ticker Symbol" size="30" style={{'fontFamily':'Arial, FontAwesome', 'padding': '15px', 'fontSize': '1em', 'textTransform': 'uppercase'}} ref={quote => this._quote = quote}></input></label>
                    </form>
    return (
      <div className="errorbar">
        <div className="searchcard">{content}</div>
      </div>
    )
  }

  _handleSearchQuote(event) {
    event.preventDefault();
    if (!this._quote.value) {
      return;
    }

    const context = this;
    const ticker = this._quote.value;
    fetch('quote/' + ticker).then(function(response) {
      return response.json();
    }).then(function(json) {
      context.props.onQuoteReceived(json.query.results.quote)
      context._quote.value = '';
    });
  }
}
