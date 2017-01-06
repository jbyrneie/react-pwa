import React from 'react';

export default class QuoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      showQuoteDetails: true
    };
  }

  render() {
    let details;
    let showHideQuoteDetails = <i className="fa fa-chevron-right icon" onClick={this._toggleQuoteDetails.bind(this)}></i>

    if (this.state.showQuoteDetails) {
      details = <div>
                      <table>
                        <tbody>
                        <tr>
                          <td><b>Currency:</b>&nbsp;{this.props.quote.Currency}</td>
                          <td><b>Ask:</b>&nbsp;{this.props.quote.Ask}</td>
                          <td><b>Bid:</b>&nbsp;{this.props.quote.Bid}</td>
                        </tr>
                        <tr>
                          <td><b>Previous Close:</b>&nbsp;{this.props.quote.PreviousClose}</td>
                          <td><b>Low:</b>&nbsp;{this.props.quote.DaysLow}</td>
                          <td><b>High:</b>&nbsp;{this.props.quote.DaysHigh}</td>
                        </tr>
                        <tr>
                          <td><b>Year Low:</b>&nbsp;{this.props.quote.YearLow}</td>
                          <td><b>Year High:</b>&nbsp;{this.props.quote.YearHigh}</td>
                          <td><b>Year Change:</b>&nbsp;{this.props.quote.ChangeFromYearLow}</td>
                        </tr>
                        <tr>
                          <td><b>Market Cap:</b>&nbsp;{this.props.quote.MarketCapitalization}</td>
                          <td><b>EBITDA:</b>&nbsp;{this.props.quote.EBITDA}</td>
                          <td><b>% Change:</b>&nbsp;{this.props.quote.PercentChange}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
      showHideQuoteDetails = <i className="fa fa-chevron-down icon" onClick={this._toggleQuoteDetails.bind(this)}></i>
    }

    let title = <div>
                  <span className="ticker upper" onClick={this._toggleQuoteDetails.bind(this)}>{this.props.quote.Name}&nbsp;({this.props.quote.symbol})&nbsp;{this.props.quote.Ask}&nbsp;{showHideQuoteDetails}</span>
                  <span className="delta">{this.props.quote.Change_PercentChange}</span>
                </div>

    const content = <div>
                      {title}
                      {details}
                    </div>
    return (
      <div className="card">{content}</div>
    )
  }

  _toggleQuoteDetails(event) {
    event.preventDefault();
    this.setState({showQuoteDetails: !this.state.showQuoteDetails})
  }

}
