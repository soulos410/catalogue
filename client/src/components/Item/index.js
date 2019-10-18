import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="single-item" key={this.props.mobileId}>
        <div className="item-photo" />
        <div className="item-title">
          {this.props.title}
        </div>
        <div className="item-brand">
          {this.props.brand}
        </div>
        <div className="item-date">{this.props.date}</div>
      </div>
    );
  }
}
