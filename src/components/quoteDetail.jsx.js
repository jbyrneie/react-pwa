import React from 'react';

export default class QuoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: true
    };
  }

  render() {
    console.log("quote: %s", JSON.stringify(this.props.quote))
    let description;
    let title = <div>
                  <span className="ticker upper" onClick={this._toggleDescription.bind(this)}>{this.props.quote.Name}&nbsp;({this.props.quote.symbol})&nbsp;{this.props.quote.Ask}&nbsp;{showHideDescription}</span>
                  <span className="delta">{this.props.quote.Change_PercentChange}</span>
                </div>
    let showHideDescription = <i className="fa fa-chevron-right icon" onClick={this._toggleDescription.bind(this)}></i>

    if (this.state.showDescription) {
      description = <div className="projectDescription" dangerouslySetInnerHTML={{__html: this.props.quote.consultationDescriptionText}}></div>
      showHideDescription = <i className="fa fa-chevron-down icon" onClick={this._toggleDescription.bind(this)}></i>
    }

    const content = <div>
                      {title}
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
    return (
      <div className="card">{content}</div>
    )
  }

  _toggleDescription(event) {
    event.preventDefault();
    this.setState({showDescription: !this.state.showDescription})
  }

}
