import React, { Component } from "react";
class Widecard extends Component {
  render() {
    return (
      <div className="widecard">
        <div className="collegepic">
          <img src={this.props.data.picture} alt="attended school" />
        </div>
        <div className="compdet">
          <h3> {this.props.data.degree} </h3>
          <h4 className="secondtext"><a href={this.props.data.url} target="_blank" rel="noopener noreferrer">{this.props.data.name}</a>, {this.props.data.location} </h4>
          <h4 className="secondtext">
            {this.props.data.discipline}, {this.props.data.from} - {this.props.data.to}
          </h4>
          <p> {this.props.data.description}. {this.props.data.gpa}.</p>
        </div>
      </div>
    );
  }
}
export default Widecard;
