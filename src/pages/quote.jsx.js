import React from 'react';
import Nav from '../components/nav.jsx';
import NoQuoteDetails from '../components/noQuoteDetails.jsx';
import SearchQuotes from '../components/searchQuotes.jsx';
import Quote from '../components/quote.jsx';

export default class QuotePage extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: null
    };
  }

  render() {
    let search = <div id="quotes">
                    <main>
                      <div className="container">
                        <SearchQuotes onQuoteReceived={this._handleQuote.bind(this)}/>
                      </div>
                    </main>
                </div>
    let content;
    if (!this.state.quote)
      content = <div id="quotes">
                      <main>
                        <div className="container">
                          <NoQuoteDetails/>
                        </div>
                      </main>
                  </div>
    else content = <div id="quotes">
                        <main>
                          <div className="container">
                            <Quote quote={this.state.quote}/>
                          </div>
                        </main>
                    </div>
    return (
      <div>
        <Nav/>
        <div>
          {search}
          {content}
        </div>
      </div>
    )
  }

  _handleQuote(quote) {
    this.setState({quote: quote})
  }
}
