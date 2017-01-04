import React from 'react';

export default class NoQuoteDetails extends React.Component {
  render() {
    const content = <div className="questions">
                      <h4 className="projectTitle upper">No Quote Details</h4>
                      <p>There is either an error or there is no quote details.</p>
                      <p>Perform one of the following actions</p>
                      <ul>
                        <li>Enter a ticker symbol in the search box above and click enter</li>
                        <li>Try again later</li>
                      </ul>
                    </div>
    return (
      <div className="errorbar">
        <div className="errorcard">{content}</div>
      </div>
    )
  }
}
