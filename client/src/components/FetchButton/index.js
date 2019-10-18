import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, showNextItems } from '../../actions';

const mapStateToProps = state => ({
  currentPage: state.currentPage || 0,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url, currentPage) => dispatch(itemsFetchData(url, currentPage)),
  nextPage: currentPage => dispatch(showNextItems(currentPage)),
});

class FetchButton extends Component {
  handleClick = () => {
    const { currentPage } = this.props;
    this.props.nextPage(currentPage);
    this.props.fetchData(this.props.url, currentPage);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick.bind(this)} className="catalogue-next">Show next 10 phones</button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButton);
