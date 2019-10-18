import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions';
import Headers from '../Headers';
import '../../../styles/styles.scss';
import ItemsWrapper from '../ItemsWrapper';
import FetchButton from '../FetchButton';
import Filters from '../Filters';

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.hasErrored,
  isLoading: state.isLoading,
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});

class App extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:3001/findPhones');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <Headers />
        <Filters url="http://localhost:3001/findPhones" />
        <ItemsWrapper items={this.props.items} />
        <FetchButton url="http://localhost:3001/findPhones" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
