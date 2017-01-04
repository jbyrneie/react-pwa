import React from 'react';

export default class SearchQuotes extends React.Component {
  render() {
    const content = <form onSubmit={this._handleSearchQuote.bind(this)}>
                        <label><input type="text" placeholder="&#xf002; Ticker Symbol" size="30" style={{'fontFamily':'Arial, FontAwesome', 'padding': '15px', 'fontSize': '1em'}} ref={quote => this._quote = quote}></input></label>
                    </form>
    return (
      <div className="errorbar">
        <div className="searchcard">{content}</div>
      </div>
    )
  }

  _handleSearchQuote(event) {
    event.preventDefault();
    console.log('searchQuote: %s',this._quote.value)
    if (!this._quote.value) {
      return;
    }

    var quote = {
                  symbol: "GOOG",
                  Ask: "780.07",
                  AverageDailyVolume: "1722990",
                  Bid: "776.50",
                  AskRealtime: null,
                  BidRealtime: null,
                  BookValue: "194.60",
                  Change_PercentChange: "+0.00 - +0.00%",
                  Change: "+0.00",
                  Commission: null,
                  Currency: "USD",
                  ChangeRealtime: null,
                  AfterHoursChangeRealtime: null,
                  DividendShare: null,
                  LastTradeDate: "12/30/2016",
                  TradeDate: null,
                  EarningsShare: "27.32",
                  ErrorIndicationreturnedforsymbolchangedinvalid: null,
                  EPSEstimateCurrentYear: "34.44",
                  EPSEstimateNextYear: "40.95",
                  EPSEstimateNextQuarter: "9.32",
                  DaysLow: null,
                  DaysHigh: null,
                  YearLow: "663.06",
                  YearHigh: "816.68",
                  HoldingsGainPercent: null,
                  AnnualizedGain: null,
                  HoldingsGain: null,
                  HoldingsGainPercentRealtime: null,
                  HoldingsGainRealtime: null,
                  MoreInfo: null,
                  OrderBookRealtime: null,
                  MarketCapitalization: "531.97B",
                  MarketCapRealtime: null,
                  EBITDA: "28.29B",
                  ChangeFromYearLow: "108.76",
                  PercentChangeFromYearLow: "+16.40%",
                  LastTradeRealtimeWithTime: null,
                  ChangePercentRealtime: null,
                  ChangeFromYearHigh: "-44.86",
                  PercebtChangeFromYearHigh: "-5.49%",
                  LastTradeWithTime: "4:00pm - <b>771.82</b>",
                  LastTradePriceOnly: "771.82",
                  HighLimit: null,
                  LowLimit: null,
                  DaysRange: null,
                  DaysRangeRealtime: null,
                  FiftydayMovingAverage: "774.34",
                  TwoHundreddayMovingAverage: "762.24",
                  ChangeFromTwoHundreddayMovingAverage: "9.58",
                  PercentChangeFromTwoHundreddayMovingAverage: "+1.26%",
                  ChangeFromFiftydayMovingAverage: "-2.52",
                  PercentChangeFromFiftydayMovingAverage: "-0.33%",
                  Name: "Alphabet Inc.",
                  Notes: null,
                  Open: null,
                  PreviousClose: "771.82",
                  PricePaid: null,
                  ChangeinPercent: "+0.00%",
                  PriceSales: "6.22",
                  PriceBook: "3.97",
                  ExDividendDate: null,
                  PERatio: "28.25",
                  DividendPayDate: null,
                  PERatioRealtime: null,
                  PEGRatio: "1.18",
                  PriceEPSEstimateCurrentYear: "22.41",
                  PriceEPSEstimateNextYear: "18.85",
                  Symbol: "GOOG",
                  SharesOwned: null,
                  ShortRatio: "1.40",
                  LastTradeTime: "4:00pm",
                  TickerTrend: null,
                  OneyrTargetPrice: "946.22",
                  Volume: "74",
                  HoldingsValue: null,
                  HoldingsValueRealtime: null,
                  YearRange: "663.06 - 816.68",
                  DaysValueChange: null,
                  DaysValueChangeRealtime: null,
                  StockExchange: "NMS",
                  DividendYield: null,
                  PercentChange: "+0.00%"
                  }

      this.props.onQuoteReceived(quote)
  }
}
