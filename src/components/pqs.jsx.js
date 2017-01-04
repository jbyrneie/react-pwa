import React from 'react';

export default class PQs extends React.Component {
  constructor() {
    super();
    this.state = {
      showPQs: true
    };
  }

  render() {
    let pqs;
    let title;

    let showHidePQs= <i className="fa fa-chevron-right icon" onClick={this._togglePQs.bind(this)}></i>
    if (this.state.showPQs) {
      const items = this.props.project.pqs.map(function(question, i) {
          return (
            <li key={i}>{question.question}</li>
          )
        });
      pqs = <ul>{items}</ul>
      showHidePQs = <i className="fa fa-chevron-down icon" onClick={this._togglePQs.bind(this)}></i>
    }
    title = <h4 className="projectTitle upper" onClick={this._togglePQs.bind(this)}>Profile Questions&nbsp;{showHidePQs}</h4>

    const content = <div className="questions">
                      {title}
                      {pqs}
                    </div>
    return (
      <div className="card">{content}</div>
    )
  }

  _togglePQs(event) {
    event.preventDefault();
    this.setState({showPQs: !this.state.showPQs})
  }
}
