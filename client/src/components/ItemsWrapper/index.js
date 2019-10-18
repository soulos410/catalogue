import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Item from '../Item';

// const mapStateToProps = state => ({
//   items: state.items,
//   hasErrored: state.itemsHasErrored,
//   isLoading: state.itemsIsLoading,
// });

export default class ItemsWrapper extends Component {
  render() {
    return (
      <section>
        <div className="single-item__content-wrapper">
          {this.props.items.map(el => (
            <Item
              brand={el.brand}
              title={el.title}
              date={el.date}
              key={el.mobileId}
            />
          ))}
        </div>
      </section>
    );
  }
}

// export default connect(mapStateToProps)(ItemsWrapper);
