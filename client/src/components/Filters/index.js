import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url, currentPage, properties) => dispatch(
    itemsFetchData(url, currentPage, properties),
  ),
});

class Filters extends Component {
  handleCheck = (event) => {
    if (event.target.checked) {
      let currentUrl = this.props.url;
      currentUrl = this.props.url;
      let queryValue = '';
      let properties = '';
      if (event.target.attributes.phone) {
        queryValue = event.target.attributes.phone.value;
        properties = `&brand=${queryValue}`;
      } else {
        queryValue = event.target.attributes.date.value;
        properties = `&date=${queryValue}`;
      }
      this.props.fetchData(currentUrl, this.props.currentPage, properties);
    }
  }

  render() {
    return (
      <div>
        <ul>
          <p className="catalogue-filter">
            <input type="checkbox" onChange={this.handleCheck.bind(this)} phone="Huawei" />
            Huawei
          </p>
          <p className="catalogue-filter">
            <input type="checkbox" onChange={this.handleCheck.bind(this)} phone="Nokia" />
            Nokia
          </p>
        </ul>
        <ul>
          <p className="catalogue-filter">
            <input type="checkbox" onChange={this.handleCheck.bind(this)} date="2019" />
            2019
          </p>
          <p className="catalogue-filter">
            <input type="checkbox" onChange={this.handleCheck.bind(this)} date="2018" />
            2018
          </p>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
