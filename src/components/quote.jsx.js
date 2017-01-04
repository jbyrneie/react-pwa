import React from 'react';
import QuoteDetail from './quoteDetail.jsx'
import PQs from './pqs.jsx'

export default class Quote extends React.Component {
  render() {
    const content = <div>
                      <QuoteDetail quote={this.props.quote} />
                      {this.props.quote.pqs != null ? <PQs project={this.props.project} /> : null }
                    </div>
    return (
      <div className="mainbar">{content}</div>
    )
  }
}
